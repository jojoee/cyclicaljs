# cyclicaljs

[![Version - npm](https://img.shields.io/npm/v/cyclicaljs.svg)](https://www.npmjs.com/package/cyclicaljs)
[![License - npm](https://img.shields.io/npm/l/cyclicaljs.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/jojoee/cyclicaljs.svg)](https://greenkeeper.io/)
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/cyclicaljs.svg)](https://codecov.io/github/jojoee/cyclicaljs)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fjojoee%2Fcyclicaljs%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/jojoee/cyclicaljs/master)

[![continuous integration](https://github.com/jojoee/cyclicaljs/workflows/continuous%20integration/badge.svg?branch=master)](https://github.com/jojoee/cyclicaljs/actions/workflows/continuous-integration.yml)
[![release](https://github.com/jojoee/cyclicaljs/workflows/release/badge.svg?branch=master)](https://github.com/jojoee/cyclicaljs/actions/workflows/release.yml)
[![runnable](https://github.com/jojoee/cyclicaljs/workflows/runnable/badge.svg?branch=master)](https://github.com/jojoee/cyclicaljs/actions/workflows/runnable.yml)

Encode item list into "cyclical"

## Installation

```
// CommonJS
npm install cyclicaljs
const { encode } = require('cyclicaljs')

// githack
<script src="https://raw.githack.com/jojoee/cyclicaljs/master/src/index.js"></script>

// ES6
npm install cyclicaljs
import { encode } from "cyclicaljs"
```

## Example usage

```javascript
const { encode } = require('../src')

const nRows = 30
const nHrs = 24
const hrs = [...Array(nRows).keys()].map(item => item % nHrs)
const encodedHrs = encode(hrs, nHrs)
console.log('encodedHrs', encodedHrs)
```

## Other languages

- Python: [jojoee/cyclical](https://github.com/jojoee/cyclical)
