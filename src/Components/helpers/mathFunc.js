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
    round,
  } = state
  const acqcosts = 300000
  const number_of_paying = visitors * cr
  const income_per_payer = avPrice * commissions * avPayment
  const cost_of_attraction = +(acqcosts / visitors).toFixed(2)
  const income_per_attracted = income_per_payer * cr
  const differentCost = income_per_attracted - cost_of_attraction
  const profit_from_stream = differentCost * visitors
  const revenue = number_of_paying * avPrice * avPayment
  const income_from_stream = number_of_paying * income_per_payer
  const COGS_after_sales = revenue * (1 - commissions) // TODO проверить что бы вычислял правильно, без десятитысячных
  const FIX_COSTS = salary + rent + cost
  const EBITDA = profit_from_stream - FIX_COSTS
  const tax = EBITDA - amortization > 0 ? (EBITDA - amortization) * 0.2 : 0
  const net_profit = EBITDA - amortization - tax

  return [
    +Math.round(net_profit),
    {
      visitors,
      cr,
      amortization,
      avPayment,
      salary,
      avPrice,
      cost,
      commissions,
      rent,
      acqcosts,
      number_of_paying,
      income_per_payer,
      cost_of_attraction,
      income_per_attracted,
      profit_from_stream,
      revenue,
      income_from_stream,
      COGS_after_sales,
      FIX_COSTS,
      EBITDA,
      tax,
      round,
      net_profit: Math.round(net_profit),
    },
  ]
}
