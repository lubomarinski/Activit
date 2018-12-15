import { BASE_URL } from './constants';
import { createAuthHeaders } from './user';

/**
 * Returns: [{ picUrl: '/images/qwerty.jpg', likes: 123 }]
 */
export async function getTrendingPics({ limit, skip } = { limit: 10, skip: 0 }) {
    const res = await fetch(`${BASE_URL}/api/pics/trending?limit=${limit}&skip=${skip}`, {
        method: 'GET',
        headers: createAuthHeaders(),
    });
    const data = await res.json();
    return data.items;
}

/**
 * Returns: [{ picUrl: '/images/qwerty.jpg', location: [lat,lon], likes: 123 }]
 */
export async function getModelPics({ location, maxdist, limit, skip } = { limit: 10, maxdist: 0, skip: 0, location: null }) {
    if (!Array.isArray(location) || location.length != 2) {
        throw new Error("Invalid location object!");
    }
    const [lat, lon] = location;

    const res = await fetch(`${BASE_URL}/api/pics/models?lat=${lat}&lon=${lon}&maxdist=${maxdist}limit=${limit}&skip=${skip}`, {
        method: 'GET',
        headers: createAuthHeaders(),
    });
    const data = await res.json();
    return data.items;
}