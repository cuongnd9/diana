# thinid

> 🚀📦 Easy way to create 🆔 unique id and number code.

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Build Status](https://travis-ci.com/cuongw/thinid.svg?branch=master)](https://travis-ci.com/cuongw/thinid)
![npm](https://img.shields.io/npm/v/thinid.svg)
![david](https://img.shields.io/david/cuongw/thinid.svg)
[![Hits-of-Code](https://hitsofcode.com/github/cuongw/thinid)](https://hitsofcode.com/view/github/cuongw/thinid)
[![GitHub](https://img.shields.io/github/license/cuongw/thinid.svg)](https://github.com/cuongw/thinid/blob/master/LICENSE)

## Installation

```sh
yarn add thinid
# or
npm install -s thinid
```

## Usage

**For ES6 or ESNext**
```javascript
import { uid, code } from 'thinid';
```

**For CommonJS**
```javascript
const { uid, code } = require('thinid');
```

```javascript
console.log(uid());
console.log(code());
```

```sh
Output should be '13b6-351b_fb04$14b8#8983'
Output should be '1998'
```

## API

### `uid(length)`

**Returns** `string` unique id with length option.

**Example**

```javascript
thinid(9);
```

```sh
Output should be '9jw6-745b'
```
------------------------------------------------------------------------------------------

### `code(length)`

**Returns** `string` unique id with length option (length from 4 to 6).

**Example**

```javascript
code(6);
```

```sh
Output should be '122856'
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Code">💻</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Documentation">📖</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Tests">⚠️</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [cuongw](https://github.com/cuongw)
