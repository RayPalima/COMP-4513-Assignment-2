// central place for fetching product JSON
// Uses the compact JSON provided in the assignment.
const DATA_URL =
  "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

export async function fetchProducts() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  // optionally compute derived fields here
  return data;
}
