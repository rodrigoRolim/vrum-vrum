import { NextResponse } from "next/server";

export interface MapAddress {
  id: string;
  label: string;
  lat: number;
  lon: number;
  city: string;
  state: string;
  text: string;
}

/* ---------------- helpers ---------------- */

function normalize(str = "") {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getCity(address: any): string | null {
  return (
    address?.city ||
    address?.town ||
    address?.village ||
    address?.hamlet ||
    address?.municipality ||
    address?.county ||
    address?.state_district ||
    address?.urban ||
    null
  );
}

function score(city: string, query: string): number {
  if (city.startsWith(query)) return 3;
  if (city.includes(query)) return 1;
  return 0;
}

const STATE_MAP: Record<string, string> = {
  acre: "AC",
  alagoas: "AL",
  amapa: "AP",
  amazonas: "AM",
  bahia: "BA",
  ceara: "CE",
  "distrito federal": "DF",
  "espirito santo": "ES",
  goias: "GO",
  maranhao: "MA",
  "mato grosso": "MT",
  "mato grosso do sul": "MS",
  "minas gerais": "MG",
  para: "PA",
  paraiba: "PB",
  parana: "PR",
  pernambuco: "PE",
  piaui: "PI",
  "rio de janeiro": "RJ",
  "rio grande do norte": "RN",
  "rio grande do sul": "RS",
  rondonia: "RO",
  roraima: "RR",
  "santa catarina": "SC",
  "sao paulo": "SP",
  sergipe: "SE",
  tocantins: "TO",
};

/* ---------------- handler ---------------- */

export async function GET(req: Request): Promise<NextResponse<MapAddress[]>> {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim() ?? "";

  if (q.length < 3) {
    return NextResponse.json([]);
  }

  const queryNorm = normalize(q);

  const url = `https://nominatim.openstreetmap.org/search?${new URLSearchParams({
    city: queryNorm,
    format: "json",
    addressdetails: "2",
    limit: "10",
    countrycodes: "br",
    polygon_geojson: "1"
  })}`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "VrumApp/1.0 (contato@vrum.com)",
      "Accept-Language": "pt-BR",
    },
  });

  const data = await res.json();

  console.log("OSM results:", data);
  const results = data
    .map((item: any) => {
      const cityRaw = getCity(item.address);
      const stateRaw = item.address?.state;

      if (!cityRaw || !stateRaw) return null;

      const state = normalize(stateRaw);

      return {
        id: item.place_id,
        label: item.display_name,
        lat: Number(item.lat),
        lon: Number(item.lon),
        city: cityRaw,
        state: stateRaw,
        stateSlug: STATE_MAP[state] ?? "",
      };
    })
    .filter(Boolean)
    .map((item: any): MapAddress => ({
      id: String(item.id),
      label: item.label,
      lat: item.lat,
      lon: item.lon,
      city: item.city,
      state: item.state,
      text: `${item.city}, ${item.stateSlug}`,
    }));

  return NextResponse.json(results);
}
