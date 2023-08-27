const { encode } = require('./index')
jest.autoMockOff()

/**
 * Return list of number [0, num-1] with step = 1
 *
 * @private
 * @param {number} num
 * @returns {Array.number}
 */
function range (num) {
  return [...Array(num).keys()]
}

describe('encode', () => {
  test('normal hrs', () => {
    const nRows = 30
    const nHrs = 24
    const hrs = range(nRows).map(item => item % nHrs)
    const encodedHrs = encode(hrs, nHrs)
    const expectedSines = [
      0.0, 0.25881904510252074, 0.49999999999999994, 0.7071067811865475, 0.8660254037844386,
      0.9659258262890682, 1.0, 0.9659258262890683, 0.8660254037844387, 0.7071067811865476,
      0.5000000000000003, 0.258819045102521, 1.2246467991473532e-16, -0.25881904510252035, -0.4999999999999997,
      -0.7071067811865471, -0.8660254037844385, -0.9659258262890681, -1.0, -0.9659258262890684,
      -0.866025403784439, -0.7071067811865477, -0.5000000000000004, -0.25881904510252157, 0.0,
      0.25881904510252074, 0.49999999999999994, 0.7071067811865475, 0.8660254037844386, 0.9659258262890682
    ]
    const expectedCosines = [
      1.0, 0.9659258262890683, 0.8660254037844387, 0.7071067811865476, 0.5000000000000001,
      0.25881904510252096, 6.123233995736766e-17, -0.25881904510252063, -0.4999999999999998, -0.7071067811865475,
      -0.8660254037844385, -0.9659258262890682, -1.0, -0.9659258262890684, -0.8660254037844388,
      -0.7071067811865479, -0.5000000000000004, -0.2588190451025215, -1.8369701987210297e-16, 0.2588190451025203,
      0.49999999999999933, 0.7071067811865474, 0.8660254037844384, 0.9659258262890681, 1.0,
      0.9659258262890683, 0.8660254037844387, 0.7071067811865476, 0.5000000000000001, 0.25881904510252096
    ]

    expect(JSON.stringify(encodedHrs.sines)).toBe(JSON.stringify(expectedSines))
    expect(JSON.stringify(encodedHrs.coses)).toBe(JSON.stringify(expectedCosines))
  })

  test('normal months', () => {
    const nRows = 30
    const nMonths = 12
    const months = range(nRows).map(item => item % nMonths)
    const encodedMonths = encode(months, nMonths)
    const expectedSines = [
      0.0, 0.49999999999999994, 0.8660254037844386, 1.0, 0.8660254037844387,
      0.5000000000000003, 1.2246467991473532e-16, -0.4999999999999997, -0.8660254037844385, -1.0,
      -0.866025403784439, -0.5000000000000004, 0.0, 0.49999999999999994, 0.8660254037844386, 1.0,
      0.8660254037844387, 0.5000000000000003, 1.2246467991473532e-16, -0.4999999999999997, -0.8660254037844385,
      -1.0, -0.866025403784439, -0.5000000000000004, 0.0, 0.49999999999999994,
      0.8660254037844386, 1.0, 0.8660254037844387, 0.5000000000000003
    ]
    const expectedCosines = [
      1.0, 0.8660254037844387, 0.5000000000000001, 6.123233995736766e-17, -0.4999999999999998,
      -0.8660254037844385, -1.0, -0.8660254037844388, -0.5000000000000004, -1.8369701987210297e-16,
      0.49999999999999933, 0.8660254037844384, 1.0, 0.8660254037844387, 0.5000000000000001,
      6.123233995736766e-17, -0.4999999999999998, -0.8660254037844385, -1.0, -0.8660254037844388,
      -0.5000000000000004, -1.8369701987210297e-16, 0.49999999999999933, 0.8660254037844384, 1.0,
      0.8660254037844387, 0.5000000000000001, 6.123233995736766e-17, -0.4999999999999998, -0.8660254037844385
    ]

    expect(JSON.stringify(encodedMonths.sines)).toBe(JSON.stringify(expectedSines))
    expect(JSON.stringify(encodedMonths.coses)).toBe(JSON.stringify(expectedCosines))
  })
})