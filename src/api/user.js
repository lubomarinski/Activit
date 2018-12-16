import { BASE_URL } from './constants';

let AUTH_TOKEN = null;
export function getAuthToken() {
    if (AUTH_TOKEN == null) {
        throw new Error("The user token has expired!");
    }
    return AUTH_TOKEN;
}

export function createAuthHeaders() {
    return { Authentication: getAuthToken() };
}

/**
 * @returns { error?: String, token?: String }
 */
export async function loginUser({ email, password }) {
    if (!email || !password) {
        throw new Error("Invalid user object!");
    }
    const res = await fetch(`${BASE_URL}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await res.json();

    if (!data.error) {
        AUTH_TOKEN = data.token;
    }

    return data;
}

/**
 * @returns { error?: String, token?: String }
 */
export async function signupUser({ email, name, password }) {
    if (!email || !name || !password) {
        throw new Error("Invalid user object!");
    }
    const res = await fetch(`${BASE_URL}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            name,
            password,
        }),
    });
    const data = await res.json();

    if (!data.error) {
        AUTH_TOKEN = data.token;
    }

    return data;
}

export async function isTrustedUser() {
    const res = await fetch(`${BASE_URL}/api/user/trust`, {
        method: 'POST',
        headers: createAuthHeaders(),
    });
    const data = await res.json(); // { isTrusted: Boolean }
    return data.isTrusted === true;
}

export async function getUserPoints() {
    //FIXME
    return Promise.resolve(150);
    const res = await fetch(`${BASE_URL}/api/user/points`, {
        method: 'POST',
        headers: createAuthHeaders(),
    });
    const data = await res.json(); // { isTrusted: Boolean }
    return data.points;
}