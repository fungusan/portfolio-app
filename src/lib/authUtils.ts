// Centralized token session storage

// Set token
export const setAccessToken = (token: string): void => {
    sessionStorage.setItem('accessToken', token);
};

// Get token
export const getAccessToken = (): string | null => {
    return sessionStorage.getItem('accessToken');
};

// Remove token (e.g., on logout)
export const removeAccessToken = (): void => {
    sessionStorage.removeItem('accessToken');
};

// Optional: Check if token exists (for auth guards)
export const isAuthenticated = (): boolean => {
    return !!getAccessToken();
};