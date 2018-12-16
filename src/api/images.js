import { BASE_URL } from './constants';
import { createAuthHeaders } from './user';
import { Alert } from 'react-native';

/**
 * Returns: [{ picUrl: '/images/qwerty.jpg', likes: 123 }]
 */
export async function getTrendingPics({ limit, skip } = { limit: 10, skip: 0 }) {
    const res = await fetch(`${BASE_URL}/api/pics/trending?limit=${limit}&skip=${skip}`, {
        method: 'GET',
        headers: {
            ...createAuthHeaders(),
            'Content-Type': 'application/json',
        },
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

    const res = await fetch(`${BASE_URL}/api/image/get/models`, {
        method: 'GET',
        headers: {
            ...createAuthHeaders(),
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data.items;
}

export async function addUserImage({ image, location } = { image: null, location: null }) {
    if (!Array.isArray(location) || location.length != 2) {
        throw new Error("Invalid location object!");
    }
    const formData = new FormData();
    formData.append('photo', {
        uri: image,
        type: 'image/jpeg', // or photo.type
        name: 'testPhotoName'
    });
    formData.append('lat', location[0]);
    formData.append('lon', location[1]);

    Alert.alert('Fetching', `${BASE_URL}/api/image/upload/user`);
    const res = await fetch(`${BASE_URL}/api/image/upload/user`, {
        method: 'POST',
        headers: {
            ...createAuthHeaders(),
        },
        body: formData,
    });

    const data = await res.json();
    return data.items;
}