# K-View-Next

[![npm version](https://img.shields.io/npm/v/k-view-next.svg?style=flat-square)](https://www.npmjs.org/package/k-view-next)
[![build status](https://img.shields.io/travis/SoldierAb/k-view-next/master.svg?style=flat-square)](https://travis-ci.org/SoldierAb/k-view-next)
[![install size](https://packagephobia.now.sh/badge?p=k-view-next)](https://packagephobia.now.sh/result?p=k-view-next)
[![npm downloads](https://img.shields.io/npm/dm/k-view-next.svg?style=flat-square)](http://npm-stat.com/charts.html?package=k-view-next)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)

## Scripts

### dev
Component development and debugging

```bash
# Debug button component

yarn dev ./components/button

```

### docs

Documentation site preview

```bash

yarn docs

```


### compile

Component compilation

```

yarn compile

```


### gen

`TODO`

Script to quickly create component code

```bash


```



### Import on Demand

> `k-view-next` supports tree shaking of ES modules, so using import { Button } from 'k-view-next'; would drop js code you didn't use. If you see logs like in the screenshot below, you might still be using webpack@1.x or have a wrong webpack config which can't support tree shaking.

- we can import individual components on demand:

```js

import Button from 'k-view-next/lib/button'
import 'k-view-next/lib/button/style'

```

- We strongly recommend using [babel-plugin-import](https://github.com/umijs/babel-plugin-import), which can convert the following code to the 'k-view-next/lib/xxx' way:


```js
// babel.config.js

  [
    'babel-plugin-import',
    {
      libraryName: 'k-view-next',
      libraryDirectory: '', // default: lib
      style: true,
    },
  ]

```

```js

import { Button } from 'k-view-next'

```
