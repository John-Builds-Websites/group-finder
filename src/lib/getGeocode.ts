type GeocodingResult = {
  geometry: {
    location: {
      lat: number;
      lng: number;
    }
  }
  status: 'OK' | string; // Handle other potential status codes
}

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  const encodedAddress = encodeURIComponent(address); 
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json() as GeocodingResult;

    if (data.status === 'OK') {
      return data;
    } else {
      console.error("Geocoding failed:", data.status);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}