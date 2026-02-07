export async function fetchOSM(query: string) {
  const res = await fetch(`/api/address?q=${query}`);
  return res.json();
}