# Ayu-summaly

 fork of <https://github.com/syuilo/summaly>

================================================================

[![][npm-badge]][npm-link]
[![][mit-badge]][mit]
[![][actions-badge]][actions-link]
[![][himawari-badge]][himasaku]
[![][sakurako-badge]][himasaku]
[![][work-badge]][work-badge]

[![NPM](https://nodeico.herokuapp.com/@ayuskey/summaly.svg)](https://www.npmjs.com/package/@ayuskey/summaly)

Get any web page's summary. [Try it out](https://runkit.com/npm/summaly)

Installation
----------------------------------------------------------------
`$ npm install @ayuskey/summaly`

Usage
----------------------------------------------------------------
``` javascript
summaly(url[, opts])
```

### Options

| Property            | Type                   | Description              | Default |
| :------------------ | :--------------------- | :----------------------- | :------ |
| **followRedirects** | *boolean*              | Whether follow redirects | `true`  |
| **plugins**         | *plugin[]* (see below) | Custom plugins           | `null`  |

#### Plugin

``` typescript
interface IPlugin {
	test: (url: URL.Url) => boolean;
	summarize: (url: URL.Url) => Promise<Summary>;
}
```

### Returns

A Promise of an Object that contains properties below:

#### Root

| Property        | Type     | Description                              |
| :-------------- | :------- | :--------------------------------------- |
| **description** | *string* | The description of the web page          |
| **icon**        | *string* | The url of the icon of the web page      |
| **sitename**    | *string* | The name of the web site                 |
| **thumbnail**   | *string* | The url of the thumbnail of the web page |
| **player**      | *Player* | The player of the web page               |
| **title**       | *string* | The title of the web page                |
| **url**         | *string* | The url of the web page                  |

#### Player

| Property        | Type     | Description                              |
| :-------------- | :------- | :--------------------------------------- |
| **url**         | *string* | The url of the player                    |
| **width**       | *number* | The width of the player                  |
| **height**      | *number* | The height of the player                 |

### Example

``` javascript
import summaly from '@ayuskey/summaly';

const summary = await summaly('https://www.youtube.com/watch?v=NMIEAhH_fTU');

console.log(summary); // will be ... ↓
/*
{
	title: '【楽曲試聴】「Stage Bye Stage」(歌：島村卯月、渋谷凛、本田未央)',
	icon: 'https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico',
	description: 'http://columbia.jp/idolmaster/ 2018年7月18日発売予定 THE IDOLM@STER CINDERELLA GIRLS CG STAR LIVE Stage Bye Stage 歌：島村卯月、渋谷凛、本田未央 COCC-17495［CD1枚組］ ￥1,200＋税 収録内容 Tr...',
	thumbnail: 'https://i.ytimg.com/vi/NMIEAhH_fTU/maxresdefault.jpg',
	player: {
		url: 'https://www.youtube.com/embed/NMIEAhH_fTU',
		width: 1280,
		height: 720
	},
	sitename: 'YouTube',
	url: 'https://www.youtube.com/watch?v=NMIEAhH_fTU'
}
*/
```

Testing
----------------------------------------------------------------
`npm run test`

License
----------------------------------------------------------------
[MIT](LICENSE)

[npm-link]:       https://www.npmjs.com/package/@ayuskey/summaly
[npm-badge]:      https://img.shields.io/npm/v/@ayuskey/summaly.svg?style=flat-square
[mit]:            http://opensource.org/licenses/MIT
[mit-badge]:      https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[actions-link]:    https://github.com/TeamBlackCrystal/summaly/actions
[actions-badge]:   https://img.shields.io/github/workflow/status/TeamBlackCrystal/summaly/Node.js%20CI?style=flat-square
[himasaku]:       https://himasaku.net
[himawari-badge]: https://img.shields.io/badge/%E5%8F%A4%E8%B0%B7-%E5%90%91%E6%97%A5%E8%91%B5-1684c5.svg?style=flat-square
[sakurako-badge]: https://img.shields.io/badge/%E5%A4%A7%E5%AE%A4-%E6%AB%BB%E5%AD%90-efb02a.svg?style=flat-square
[work-badge]:     https://img.shields.io/badge/work%20on-my%20machine-orange.svg?style=flat-square
