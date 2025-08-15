// Gemini API configuration
const API_KEY = 'AIzaSyAB4TBJQnmYu7-LgLXJOVtJyOTQ65KHCmc';
const MODEL = 'gemini-2.0-flash';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

// Function to generate content using Gemini API
export const generateGeminiResponse = async (prompt) => {
  try {
    const url = `${BASE_URL}/${MODEL}:generateContent?key=${API_KEY}`;
    
    const payload = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: prompt
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Log the response to console
    console.log('Gemini API Response:', data);
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const generatedText = data.candidates[0].content.parts[0].text;
      console.log('Generated Text:', generatedText);
      console.log('Generated Text:', generatedText);
      return generatedText;
    } else {
      console.log('No valid response generated');
      return null;
    }
    
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return null;
  }
};

// Function to test the API (for debugging)
export const testGeminiAPI = () => {
  console.log('Testing Gemini API...');
  generateGeminiResponse('Hello! Can you tell me a short joke?');
};