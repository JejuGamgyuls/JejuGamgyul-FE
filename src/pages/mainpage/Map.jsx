import filtered_stops from '@assets/busLocationInfo/filtered_stops.json';
import { geolocationOptions } from '@constants/const';
import useCurrentLocation from '@hooks/useCurrentLocation.js';
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useSearchParams } from 'react-router-dom';

const Map = () => {
  const [selectedStopIndex, setSelectedStopIndex] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const navermaps = useNavermaps();
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const mapRef = useRef(null);
  const [searchParams] = useSearchParams();

  const moveMapToLocation = useCallback(
    (lat, lng) => {
      if (mapRef.current) {
        const position = new navermaps.LatLng(lat, lng);
        mapRef.current.setCenter(position);
        setMapCenter(position);
      }
    },
    [navermaps],
  );

  const closeIcon = useMemo(
    () => `<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.7076 24.2924C25.8005 24.3854 25.8742 24.4957 25.9245 24.6171C25.9747 24.7384 26.0006 24.8686 26.0006 24.9999C26.0006 25.1313 25.9747 25.2614 25.9245 25.3828C25.8742 25.5042 25.8005 25.6145 25.7076 25.7074C25.6147 25.8004 25.5044 25.8741 25.383 25.9243C25.2616 25.9746 25.1315 26.0005 25.0001 26.0005C24.8687 26.0005 24.7386 25.9746 24.6172 25.9243C24.4958 25.8741 24.3855 25.8004 24.2926 25.7074L16.0001 17.4137L7.70757 25.7074C7.51993 25.8951 7.26543 26.0005 7.00007 26.0005C6.7347 26.0005 6.48021 25.8951 6.29257 25.7074C6.10493 25.5198 5.99951 25.2653 5.99951 24.9999C5.99951 24.7346 6.10493 24.4801 6.29257 24.2924L14.5863 15.9999L6.29257 7.70745C6.10493 7.5198 5.99951 7.26531 5.99951 6.99995C5.99951 6.73458 6.10493 6.48009 6.29257 6.29245C6.48021 6.1048 6.7347 5.99939 7.00007 5.99939C7.26543 5.99939 7.51993 6.1048 7.70757 6.29245L16.0001 14.5862L24.2926 6.29245C24.4802 6.10481 24.7347 5.99939 25.0001 5.99939C25.2654 5.99939 25.5199 6.1048 25.7076 6.29245C25.8952 6.48009 26.0006 6.73458 26.0006 6.99995C26.0006 7.26531 25.8952 7.5198 25.7076 7.70745L17.4138 15.9999L25.7076 24.2924Z" fill="black" fill-opacity="0.6"/>
  </svg>`,
    [],
  );

  const infoWindows = useMemo(
    () =>
      filtered_stops.map((stop, index) => {
        return new navermaps.InfoWindow({
          content: `
        <div id="infoWindow-${index}" style="cursor:pointer; width:380px; padding: 17px 20px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; border-radius: 4px; width: 330px; box-sizing: border-box;">
          <div style="width:280px; margin:0 auto; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; font-size: 17px; font-weight: bold; color:#000">
              <div>
                <span>${stop.stopsNm}</span>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; cursor: pointer;">
                <span id="closeIcon-${index}">${closeIcon}</span>
              </div>
            </div>
            <div style="display:flex; gap:8px; font-size: 12px; color: #919191; align-items: center;">
              <div>${stop.stopsNo}</div>
              <div style="width: 1px; color: #e2e2e2;">|</div>
              <div>${stop.direction} 방면</div>
            </div>
          </div>
        </div>
      `,
          maxWidth: 300,
          anchorSize: { width: 12, height: 14 },
          borderWidth: 0,
          disableAnchor: true,
          pixelOffset: new navermaps.Point(0, -50),
        });
      }),
    [navermaps, closeIcon],
  );

  const handleMarkerClick = useCallback(
    (index) => {
      console.log(filtered_stops[index]);
      if (selectedStopIndex !== null && selectedStopIndex !== index) {
        infoWindows[selectedStopIndex].close();
      }

      if (selectedStopIndex === index) {
        infoWindows[index].close();
        setSelectedStopIndex(null);
      } else {
        const position = {
          lat: parseFloat(filtered_stops[index].ycrd),
          lng: parseFloat(filtered_stops[index].xcrd),
        };
        infoWindows[index].open(mapRef.current, position);

        setSelectedStopIndex(index);
      }
    },
    [selectedStopIndex, infoWindows, moveMapToLocation],
  );

  useEffect(() => {
    if (selectedStopIndex !== null) {
      const infoWindowElement = document.getElementById(`infoWindow-${selectedStopIndex}`);
      const closeIconElement = document.getElementById(`closeIcon-${selectedStopIndex}`);

      if (infoWindowElement) {
        infoWindowElement.addEventListener('click', (e) => {
          if (e.target !== closeIconElement && !closeIconElement.contains(e.target)) {
            const stop = filtered_stops[selectedStopIndex];
            window.location.href = `http://localhost:3000/station/${encodeURIComponent(
              stop.stopsNm,
            )}?busStopId=${stop.nodeId}&lat=${stop.ycrd}&lng=${stop.xcrd}`;
          }
        });
      }

      if (closeIconElement) {
        closeIconElement.addEventListener('click', (e) => {
          e.stopPropagation();
          infoWindows[selectedStopIndex].close();
          setSelectedStopIndex(null);
        });
      }
    }
  }, [selectedStopIndex, filtered_stops, infoWindows]);

  useEffect(() => {
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    if (lat && lng) {
      setMapCenter(new navermaps.LatLng(parseFloat(lat), parseFloat(lng)));
    } else if (currentLocation && !mapCenter) {
      setMapCenter(new navermaps.LatLng(currentLocation.latitude, currentLocation.longitude));
    }
  }, [currentLocation, mapCenter, navermaps, searchParams]);

  if (currentError) {
    return <div>Error: {currentError.message}</div>;
  }

  if (!mapCenter) {
    return <div>Loading...</div>;
  }

  return (
    <NaverMap ref={mapRef} center={mapCenter} defaultZoom={16}>
      {filtered_stops.map((stop, index) => (
        <Marker
          key={stop.stopsNo}
          position={{ lat: parseFloat(stop.ycrd), lng: parseFloat(stop.xcrd) }}
          title={stop.stops_nm}
          onClick={() => handleMarkerClick(index)}
        />
      ))}
    </NaverMap>
  );
};

export default Map;
