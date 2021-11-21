import { fetchApi } from '../utils/fetch-api';
import * as debug from 'debug';
import { SummalyEx } from '../summary';
import clip from './../utils/clip';

const log = debug('summaly:plugins:wikipedia');

export function test(url: URL): boolean {
	return /\.wikipedia\.org$/.test(url.hostname);
}

export async function postProcess(summaly: SummalyEx): Promise<SummalyEx> {
	const url = new URL(summaly.url);
	const lang = url.host.split('.')[0];
	const title = url.pathname.split('/')[2];
	const endpoint = `https://${lang}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${title}`;

	log(`lang is ${lang}`);
	log(`title is ${title}`);
	log(`endpoint is ${endpoint}`);

	const body = await fetchApi(endpoint);
	log(body);

	if (!('query' in body) || !('pages' in body.query)) {
		throw 'fetch failed';
	}

	const info = body.query.pages[Object.keys(body.query.pages)[0]];

	return {
		title: info.title,
		icon: 'https://wikipedia.org/static/favicon/wikipedia.ico',
		description: clip(info.extract, 300),
		thumbnail: `https://wikipedia.org/static/images/project-logos/${lang}wiki.png`,
		player: {
			url: null,
			width: null,
			height: null
		},
		sitename: 'Wikipedia',
		url: summaly.url,
		$: summaly.$,
	};
}
