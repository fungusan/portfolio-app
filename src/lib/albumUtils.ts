import { type AlbumData, type ImageData } from '../lib/albumType'
import { setAccessToken, getAccessToken } from '../lib/authUtils'

// Helper: Fetch albums (returns data, no state setting)
export const fetchAlbums = async (): Promise<AlbumData[]> => {
    try {
        const response = await fetch('http://localhost:3000/albums');

        if (!response.ok) {
            throw new Error(`Failed to fetch albums: ${response.status} ${response.statusText}`);
        }

        return await response.json(); // Array of Album
    } catch (err) {
        console.error('Fetch albums error:', err);
        throw err; // Rethrow for component handling
    }
};

// Helper: Fetch images for an album (with pagination params)
export const fetchImages = async (albumTitle: string, offset: number = 0, limit: number = 10): Promise<ImageData[]> => {
    try {
        const token = getAccessToken();
        const url = `http://localhost:3000/images?album=${encodeURIComponent(albumTitle)}&offset=${offset}&limit=${limit}`;
        const headers: HeadersInit = { 'Content-Type': 'application/json' };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Unauthorized'); // Specific error for auth handling
            }
            
            throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`);
        }

        return await response.json(); // Array of Image
    } catch (err) {
        console.error('Image fetch error:', err);
        throw err; // Rethrow
    }
};

// Helper: Handle authentication (returns token on success)
export const handleAuth = async (userName: string, password: string): Promise<string> => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        });

        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        const { token } = await response.json();
        setAccessToken(token);
        console.log('Auth successful, token stored');
        
        return token;
    } catch (err) {
        console.error('Auth error:', err);
        throw err; // Rethrow for modal handling
    }
};