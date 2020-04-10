# thinid

🚀📦 Easy way to create 🆔 unique ids.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/103cuong/thinid.svg?branch=master)](https://travis-ci.com/103cuong/thinid)
![npm](https://img.shields.io/npm/v/thinid.svg)
![npm](https://img.shields.io/npm/dw/thinid)
![david](https://img.shields.io/david/103cuong/thinid.svg)
[![Hits-of-Code](https://hitsofcode.com/github/103cuong/thinid)](https://hitsofcode.com/view/github/103cuong/thinid)
[![GitHub](https://img.shields.io/github/license/103cuong/thinid.svg)](https://github.com/103cuong/thinid/blob/master/LICENSE)

ThinId creates lovely unique ids. Easy to use, support both JavaScript and TypeScript.

## Installation

```sh
yarn add thinid
# or
npm install -s thinid
```

## Usage

**For ES6 or ESNext**

```javascript
import { thinid } from 'thinid';
```

**For CommonJS**

```javascript
const { thinid } = require('thinid');
```

```javascript
console.log(thinid());
```

```sh
Output should be '13b6-351b_fb04$14b8#8983'
```

## API

### `thinid(length)`

**Returns** `string` unique id with length option.

**Example**

```javascript
thinid(9);
```

```sh
Output should be '9jw6-745b'
```

---

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://103cuong.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Code">💻</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Documentation">📖</a> <a href="https://github.com/103cuong/thinid/commits?author=103cuong" title="Tests">⚠️</a> <a href="#review-103cuong" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [103cuong](https://github.com/103cuong)
