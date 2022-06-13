/* eslint-disable max-len,import/prefer-default-export,prettier/prettier */
export const generateNewCash = state => {
  const {
    visitors,
    cr,
    amortization,
    avPayment,
    salary,
    avPrice,
    cost,
    commissions,
    rent,
  } = state
  const acqcosts = 300000
  const ЧИСЛО_ПЛАТЯЩИХ = visitors * cr
  const ДОХОД_НА_1_ПЛАТЯЩЕГО = avPrice * commissions * avPayment
  const СТОИМОСТЬ_ПРИВЛЕЧЕНИЯ = acqcosts / visitors
  const ДОХОД_НА_1_ПРИВЛЕЧЕННОГО = ДОХОД_НА_1_ПЛАТЯЩЕГО * cr
  const ПРИБЫЛЬ_С_ПОТОКА = (ДОХОД_НА_1_ПРИВЛЕЧЕННОГО - СТОИМОСТЬ_ПРИВЛЕЧЕНИЯ) * visitors
  const REVENUE = ЧИСЛО_ПЛАТЯЩИХ * avPrice * avPayment
  const ДОХОД_С_ПОТОКА = ЧИСЛО_ПЛАТЯЩИХ * ДОХОД_НА_1_ПЛАТЯЩЕГО
  const COGS_ПОСЛЕ_ПРОДАЖИ = REVENUE * (1 - commissions) // TODO проверить что бы вычислял правильно, без десятитысячных
  const FIX_COSTS = salary + rent + cost
  const EBITDA = ПРИБЫЛЬ_С_ПОТОКА - FIX_COSTS
  const TAX = EBITDA - amortization > 0 ? (EBITDA - amortization) * 0.2 : 0
  const ЧИСТАЯ_ПРИБЫЛЬ = EBITDA - amortization - TAX

  return ЧИСТАЯ_ПРИБЫЛЬ
}
