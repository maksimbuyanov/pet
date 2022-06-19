/**
 * парсит стоимость в приятную глазу строку
 * @param number число
 * @param splitter разделитель каждого 3 и 4 символа
 * @returns {string}
 */
// eslint-disable-next-line import/prefer-default-export
export const moneySplitter = (number = 1000, splitter = " ") => {
  const arr = [...number.toString()].reverse()
  const result = []
  if (arr.includes(".")) {
    let isBeforeDot = true
    let count = 1
    arr.forEach(char => {
      if (isBeforeDot) {
        if (char === ".") {
          isBeforeDot = false
        }
        result.unshift(char)
        return
      }
      if (count % 3 === 0) {
        result.unshift(splitter + char)
        count += 1
      } else {
        result.unshift(char)
        count += 1
      }
    })
  } else {
    arr.forEach((char, index) => {
      if ((index + 1) % 3 === 0) {
        result.unshift(splitter + char)
      } else {
        result.unshift(char)
      }
    })
  }
  return result.join("")
}

export const shuffle = array => array.sort(() => Math.random() - 0.5)

export const toFix2 = expression => +expression.toFixed(2)
export const toFix = expression => +expression.toFixed(0)

export const avValue = array => {
  const count = array.length
  const sumValue = array.reduce((acc, item) => acc + item, 0)
  return toFix2(sumValue / count)
}
