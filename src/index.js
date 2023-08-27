/**
 * Encode item list into cyclical, item must between 0 to n-1 for example
 * - encoding hour number: 0-23
 * - encoding month number: 0-11
 *
 * @public
 * @param {Array<number>} items item must between 0 to n-1 for e.g. [0, 1, 2, ...]
 * @param {number} n maximum number of it e.g. 12 for mouth number, 24 for hour number
 * @returns {object} return as an object with sines and coses attributes
 */
function encode (items, n) {
  const sines = items.map(item => Math.sin(item * (2.0 * Math.PI / n)))
  const coses = items.map(item => Math.cos(item * (2.0 * Math.PI / n)))

  return {
    sines,
    coses
  }
}

/* istanbul ignore next */
if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = {
    encode
  }
  exports.default = {
    encode
  }
}
