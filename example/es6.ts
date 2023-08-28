import { encode } from '../src'

const nRows = 30
const nHrs = 24
const hrs = Array.from({ length: nRows }, (_, i) => i).map(item => item % nHrs)
const encodedHrs = encode(hrs, nHrs)
console.log('encodedHrs', encodedHrs)
