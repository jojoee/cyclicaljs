import { encode } from '../src'

// example1
const nItems1 = 24
const items1 = Array.from({ length: 16 }, (_, i) => i).map(item => item % nItems1)
const encodedItems1 = encode(items1, nItems1)
console.log('encodedItems1', encodedItems1)

// example2
const nItems2 = 52
const items2 = Array.from({ length: 60 }, (_, i) => i).map(item => item % nItems2)
const encodedItems2 = encode(items2, nItems2)
console.log('encodedItems2', encodedItems2)
