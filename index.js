// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
const apiUrl = 'https://vivekfy-all-api.vercel.app/api/insta';

// Function to fetch Instagram video URL based on URL parameter
async function fetchInstagramVideoFromUrlParam() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const instagramUrl = urlParams.get('url');
        
        if (!instagramUrl) {
            throw new Error('Instagram URL parameter missing');
        }

        const response = await fetch(`${apiUrl}?link=${encodeURIComponent(instagramUrl)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch video');
        }

        const data = await response.json();
        return data.url; // Assuming the API returns the video URL in a 'url' field
    } catch (error) {
        console.error('Error fetching Instagram video:', error);
        return null;
    }
}

// Example usage:
fetchInstagramVideoFromUrlParam()
    .then(videoUrl => {
        if (videoUrl) {
            console.log('Instagram video URL:', videoUrl);
            // Here you can use 'videoUrl' to display the video or do further processing
        } else {
            console.log('Failed to fetch Instagram video.');
        }
    })
    .catch(error => console.error('Error:', error));
