/** @jsxImportSource preact */
import { useEffect, useRef } from "preact/hooks";
import { site } from "../../data/site";

export default function ClinicMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    if (!containerRef.current) return;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !containerRef.current) return;

      // Fix default marker icon paths for bundlers
      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const map = L.map(containerRef.current).setView(
        [site.map.lat, site.map.lng],
        site.map.zoom,
      );
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      L.marker([site.map.lat, site.map.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<strong>${site.name}</strong><br/>${site.address.line1}<br/>${site.address.line2}`,
        )
        .openPopup();
    })();

    return () => {
      cancelled = true;
      const m = mapRef.current as { remove?: () => void } | null;
      if (m && typeof m.remove === "function") m.remove();
    };
  }, []);

  return (
    <div class="card overflow-hidden h-full min-h-[400px]">
      <div ref={containerRef} class="w-full h-full min-h-[400px]" aria-label="Map showing clinic location" />
    </div>
  );
}
