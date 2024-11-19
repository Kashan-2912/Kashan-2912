const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=M.%20Kashan%20Ashraf&g=Kashan-2912&x=itzKashan2912&l=Muhammad%20Kashan%20Ashraf&i=https%3A%2F%2Fi.imgur.com%2FRvyzBIA.jpeg&p=https%3A%2F%2Fbento.me%2Fkashan-ashraf&z=57e4f";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
