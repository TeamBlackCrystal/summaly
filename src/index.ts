/**
 * summaly
 * https://github.com/syuilo/summaly
 */

import requireAll = require('require-all');
import { StripEx, Summaly } from './summary';
import IPlugin from './iplugin';
import general from './general';
//import { attachImage } from './attach-image';
//import { applySensitive } from './apply-sensitive';

// Load builtin plugins
const _builtinPlugins = requireAll({
	dirname: __dirname + '/plugins'
}) as { [key: string]: IPlugin };

type Options = {
	/**
	 * Accept-Language for the request
	 */
	lang?: string;

	/**
	 * Whether follow redirects
	 */
	followRedirects?: boolean;

	attachImage?: boolean;

	/**
	 * Custom Plugins
	 */
	plugins?: IPlugin[] | null;

	allowedPlugins?: string[],
};

type Result = Summaly & {
	/**
	 * The actual url of that web page
	 */
	url: string;
};

const defaultOptions = {
	lang: null,
	followRedirects: true,
	attachImage: true,
	plugins: null
} as Options;

/**
 * Summarize an web page
 */
export default async (url: string, options?: Options): Promise<Result> => {
	const opts = Object.assign(defaultOptions, options);

	const builtinPlugins = Object.keys(_builtinPlugins)
		.filter(key => opts.allowedPlugins == null || opts.allowedPlugins.includes(key))
		.map(key => _builtinPlugins[key]);

	const plugins = builtinPlugins.concat(opts.plugins || []);

	const _url = new URL(url);

	// Get summary
	let summary = await general(_url, opts.lang);

	if (summary == null) {
		throw 'failed summarize';
	}

	const landingUrl = summary.url;

	// Find matching plugin
	const match = plugins.filter(plugin => plugin.test(new URL(landingUrl)))[0];

	if (match) {
		summary = await match.postProcess(summary);
	}

	// if (opts.attachImage) await attachImage(summary);

	// await applySensitive(summary).catch(e => console.log(e));

	return StripEx(summary);
};
