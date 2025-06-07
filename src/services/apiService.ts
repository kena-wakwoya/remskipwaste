import type { SkipData } from "../types/allTypes";

export const fetchSkips = async (postcode: string, area: string): Promise<SkipData[]> => {
  const url = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log("Fetched skips:", data);
    return data;
  } catch (error) {
    console.error('Error fetching skips:', error);
    return [];
  }
};
