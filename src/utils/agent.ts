import * as http from 'http';
import * as https from 'https';

export const httpAgent = new http.Agent({
		keepAlive: true,
		keepAliveMsecs: 30 * 1000
	});

export const httpsAgent = new https.Agent({
		keepAlive: true,
		keepAliveMsecs: 30 * 1000
	});