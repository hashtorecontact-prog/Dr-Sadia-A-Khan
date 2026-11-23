import React, { useEffect, useState } from 'react';
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  InfoWindow,
  Pin,
  useMapsLibrary,
  useApiLoadingStatus,
  useAdvancedMarkerRef,
  APILoadingStatus,
} from '@vis.gl/react-google-maps';
import { MapPin, Navigation, ExternalLink, Loader2 } from 'lucide-react';

interface ChamberMapProps {
  lang: 'en' | 'bn';
  chamberName: string;
  chamberAddress: string;
}

interface ResolvedChamberPlace {
  id: string;
  displayName: string;
  formattedAddress: string;
  location: google.maps.LatLngLiteral;
  googleMapsURI: string;
}

const CHAMBER_SEARCH_QUERY =
  'Popular Diagnostic Centre Ltd., House 16, Road 2, Dhanmondi, Dhaka, Bangladesh';

const FALLBACK_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Popular Diagnostic Centre Ltd., House-16, Road-2, Dhanmondi, Dhaka, Bangladesh'
)}`;

function ChamberMapCanvas({
  lang,
  chamberName,
  chamberAddress,
}: ChamberMapProps) {
  const placesLib = useMapsLibrary('places');
  const loadingStatus = useApiLoadingStatus();
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [resolvedPlace, setResolvedPlace] = useState<ResolvedChamberPlace | null>(null);
  const [isSearching, setIsSearching] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  useEffect(() => {
    if (
      loadingStatus === APILoadingStatus.AUTH_FAILURE ||
      loadingStatus === APILoadingStatus.FAILED
    ) {
      setIsSearching(false);
      setHasError(true);
      if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
        window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
      }
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (!placesLib) return;

    let cancelled = false;
    setIsSearching(true);
    setHasError(false);

    const resolveChamber = async () => {
      try {
        const { places } = await placesLib.Place.searchByText({
          textQuery: CHAMBER_SEARCH_QUERY,
          fields: ['id', 'displayName', 'formattedAddress', 'location', 'googleMapsURI'],
          region: 'bd',
          language: lang === 'bn' ? 'bn' : 'en',
          maxResultCount: 1,
          internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio'],
        });

        if (cancelled) return;

        const firstPlace = places?.[0];
        if (firstPlace && firstPlace.location) {
          setResolvedPlace({
            id: firstPlace.id || 'popular-diagnostic-dhanmondi',
            displayName: firstPlace.displayName || chamberName,
            formattedAddress: firstPlace.formattedAddress || chamberAddress,
            location: {
              lat: firstPlace.location.lat(),
              lng: firstPlace.location.lng(),
            },
            googleMapsURI: firstPlace.googleMapsURI || FALLBACK_MAPS_URL,
          });
          setInfoWindowOpen(true);
        } else {
          setHasError(true);
        }
      } catch (err: unknown) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : String(err);
        if (
          message.includes('RESOURCE_EXHAUSTED') ||
          message.includes('OVER_QUERY_LIMIT') ||
          message.includes('Quota') ||
          message.includes('429')
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        setHasError(true);
      } finally {
        if (!cancelled) {
          setIsSearching(false);
        }
      }
    };

    void resolveChamber();

    return () => {
      cancelled = true;
    };
  }, [placesLib, lang, chamberName, chamberAddress]);

  const directionsUrl = resolvedPlace?.googleMapsURI || FALLBACK_MAPS_URL;

  if (hasError) {
    return (
      <div className="bg-white/10 rounded-2xl border border-white/20 p-5 text-white space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-[#E7F5F6]" />
          </div>
          <div>
            <p className="font-bold text-sm">{chamberName}</p>
            <p className="num-font text-xs text-[#E7F5F6] mt-0.5 leading-relaxed">
              {chamberAddress}
            </p>
          </div>
        </div>
        <a
          href={FALLBACK_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#087F8C] hover:bg-[#E7F5F6] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm"
        >
          <Navigation size={15} />
          <span>{lang === 'en' ? 'Open Location in Google Maps' : 'Google Maps-এ লোকেশন দেখুন'}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 shadow-lg">
      <div className="px-4 py-2.5 bg-[#055862]/80 border-b border-white/15 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin size={15} className="text-[#E7F5F6] shrink-0" />
          <span className="text-xs font-bold text-white truncate">
            {lang === 'en' ? 'Chamber Location Map' : 'চেম্বারের লোকেশন ম্যাপ'}
          </span>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E7F5F6] hover:text-white underline shrink-0"
        >
          <span>{lang === 'en' ? 'Directions' : 'দিকনির্দেশনা'}</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Explicit height required by Google Maps Platform (CF2) */}
      <div className="relative w-full h-[290px] sm:h-[320px] bg-[#E7F5F6]">
        {isSearching || !resolvedPlace ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#087F8C] p-4 text-center">
            <Loader2 size={24} className="animate-spin" />
            <span className="text-xs font-semibold">
              {lang === 'en'
                ? 'Loading chamber map for Dhanmondi, Dhaka...'
                : 'ধানমন্ডি চেম্বারের ম্যাপ লোড হচ্ছে...'}
            </span>
          </div>
        ) : (
          <GoogleMap
            key={`${resolvedPlace.id}-${lang}`}
            mapId="DEMO_MAP_ID"
            defaultCenter={resolvedPlace.location}
            defaultZoom={16}
            gestureHandling="cooperative"
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={true}
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
          >
            <AdvancedMarker
              ref={markerRef}
              position={resolvedPlace.location}
              title={resolvedPlace.displayName}
              onClick={() => setInfoWindowOpen((prev) => !prev)}
            >
              <Pin
                background="#008C9E"
                borderColor="#055862"
                glyphColor="#FFFFFF"
                scale={1.15}
              />
            </AdvancedMarker>

            {infoWindowOpen && marker && (
              <InfoWindow
                anchor={marker}
                maxWidth={270}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div className="text-[#172B35] p-1 space-y-1.5">
                  <p className="font-bold text-sm leading-snug text-[#087F8C]">
                    {chamberName}
                  </p>
                  <p className="num-font text-xs text-[#475569] leading-relaxed">
                    {chamberAddress}
                  </p>
                  {resolvedPlace.formattedAddress && (
                    <p className="num-font text-[11px] text-[#64748B]">
                      {resolvedPlace.formattedAddress}
                    </p>
                  )}
                  <a
                    href={resolvedPlace.googleMapsURI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#008C9E] hover:underline pt-0.5"
                  >
                    <Navigation size={12} />
                    <span>
                      {lang === 'en' ? 'Get Directions' : 'Google Maps-এ দিকনির্দেশনা'}
                    </span>
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default function ChamberMap({
  lang,
  chamberName,
  chamberAddress,
}: ChamberMapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  if (!apiKey) {
    return (
      <div className="bg-white/10 rounded-2xl border border-white/20 p-5 text-white space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-[#E7F5F6]" />
          </div>
          <div>
            <p className="font-bold text-sm">{chamberName}</p>
            <p className="num-font text-xs text-[#E7F5F6] mt-0.5 leading-relaxed">
              {chamberAddress}
            </p>
          </div>
        </div>
        <a
          href={FALLBACK_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#087F8C] hover:bg-[#E7F5F6] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm"
        >
          <Navigation size={15} />
          <span>{lang === 'en' ? 'Open Location in Google Maps' : 'Google Maps-এ লোকেশন দেখুন'}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  return (
    <APIProvider
      apiKey={apiKey}
      libraries={['places', 'marker']}
      language={lang === 'bn' ? 'bn' : 'en'}
      region="BD"
    >
      <ChamberMapCanvas
        lang={lang}
        chamberName={chamberName}
        chamberAddress={chamberAddress}
      />
    </APIProvider>
  );
}
