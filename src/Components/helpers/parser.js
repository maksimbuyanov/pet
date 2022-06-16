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
  arr.forEach((char, index) => {
    if ((index + 1) % 3 === 0) {
      result.unshift(splitter + char)
    } else {
      result.unshift(char)
    }
  })
  return result.join("")
}

export const shuffle = array => array.sort(() => Math.random() - 0.5)

export const toFix2 = expression => +expression.toFixed(2)
export const toFix = expression => +expression.toFixed(0)
