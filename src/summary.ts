// todo: ファイル名を'summaly'にする
import CheerioHttpcli = require("cheerio-httpcli");

export type Summaly = {
	/**
	 * The description of that web page
	 */
	description: string;

	/**
	 * The url of the icon of that web page
	 */
	icon: string;

	/**
	 * The name of site of that web page
	 */
	sitename: string;

	/**
	 * The url of the thumbnail of that web page
	 */
	thumbnail: string;

	/**
	 * The player of that web page
	 */
	player: Player;

	/**
	 * The title of that web page
	 */
	title: string;

	/**
	 * Possibly sensitive
	 */
	sensitive?: boolean;

	/**
	 * 最終リダイレクト先URL
	 */
	url: string;
};

export type SummalyEx = Summaly & {
	$: CheerioHttpcli.CheerioStaticEx;
};

export function StripEx(ex: SummalyEx): Summaly {
	return {
		description: ex.description,
		icon: ex.icon,
		sitename: ex.sitename,
		thumbnail: ex.thumbnail,
		player: ex.player,
		title: ex.title,
		sensitive: ex.sensitive,
		url: ex.url,
	};
}

export type Player = {
	/**
	 * The url of the player
	 */
	url: string;

	/**
	 * The width of the player
	 */
	width: number;

	/**
	 * The height of the player
	 */
	height: number;
};
