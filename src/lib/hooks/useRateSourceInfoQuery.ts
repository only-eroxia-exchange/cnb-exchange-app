import { useQuery } from '@tanstack/react-query'

const prefix = 'https://api.allorigins.win/raw?url='
const API_URL = `${prefix}https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt`

export const parser = (rates: string) =>
  rates
    .trim()
    .split('\n')
    .slice(2)
    .map((r) => {
      const [country, currency, amount, code, rate] = r.split('|')
      return {
        country,
        currency,
        amount: +amount,
        code,
        rate: +rate.replace(',', '.'),
      }
    })

export function useRateSourceInfoQuery() {
  return useQuery<
    {
      country: string
      currency: string
      amount: number
      code: string
      rate: number
    }[]
  >({
    queryKey: ['rates'],
    queryFn: () =>
      fetch(API_URL)
        .then((res) => res.text())
        .then(parser),
  })
}
