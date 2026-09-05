/** Passphrase login for /admin. One cookie, HMAC of a fixed message under the passphrase. */
export const COOKIE = 'sl_admin';
const MESSAGE = 'sumolab-admin-v1';

async function hmac(secret: string) {
	const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
	const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(MESSAGE));
	return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function tokenFor(password: string) {
	return hmac(password);
}

export async function isAuthed(cookieHeader: string | null, password: string) {
	if (!cookieHeader || !password) return false;
	const m = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-f0-9]+)`));
	if (!m) return false;
	return m[1] === (await hmac(password));
}

export function cookieHeader(token: string, secure: boolean) {
	return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 30}${secure ? '; Secure' : ''}`;
}

export function clearCookieHeader() {
	return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
