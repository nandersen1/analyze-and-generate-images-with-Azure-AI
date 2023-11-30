import axios from 'axios';

async function analyzeImage(imageUrl) {
  if (!imageUrl) {
    throw new Error('imageUrl is undefined');
  }

  const endpoint = "https://bilderkennung-aufgabe.cognitiveservices.azure.com/";
  const apiKey = "5adc39cf872b44ddba388add0abcaed7";
  const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview`;
  console.log(`url = ${url}`)
  try {
    const response = await axios.post(
      url, 
      { url: imageUrl },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey,
          "Content-Type": "application/json",
        },
        params: {
          features: "caption,read",
          "model-version": "latest",
          "language": "en",
        },
      } 
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error analyzing image: ", error);
    throw error;
  }
}
export default analyzeImage;