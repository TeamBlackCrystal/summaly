import fetch from 'node-fetch';
import { browserUA } from '../client';
import { httpAgent, httpsAgent } from './agent';

export async function fetchApi(apiUrl: string, referer?: string) {
	const headers = {
		'User-Agent': browserUA,
	} as Record<string, string>;

	if (referer) headers.Referer = referer;

	const json = await fetch(apiUrl, {
		timeout: 10 * 1000,
		size: 10 * 1024 * 1024,
		agent: u => u.protocol == 'http:' ? httpAgent : httpsAgent,
		headers
	}).then(res => {
		if (!res.ok) {
			throw `${res.status} ${res.statusText}`;
		} else {
			return res.json();
		}
	});

	return json;
}
