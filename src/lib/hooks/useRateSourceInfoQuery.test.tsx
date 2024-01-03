import { parser } from './useRateSourceInfoQuery'

describe('exchange rates api', () => {
  const mockResponse = `02 Jan 2024 #1
  Country|Currency|Amount|Code|Rate
  Australia|dollar|1|AUD|15.278
  Brazil|real|1|BRL|4.609
  Bulgaria|lev|1|BGN|12.621
  Canada|dollar|1|CAD|16.938
  China|renminbi|1|CNY|3.154
  Denmark|krone|1|DKK|3.311
  EMU|euro|1|EUR|24.685
  Hongkong|dollar|1|HKD|2.883
  Hungary|forint|100|HUF|6.460
  Iceland|krona|100|ISK|16.380
  IMF|SDR|1|XDR|30.222
  India|rupee|100|INR|27.036
  Indonesia|rupiah|1000|IDR|1.456
  Israel|new shekel|1|ILS|6.219
  Japan|yen|100|JPY|15.862
  Malaysia|ringgit|1|MYR|4.894
  Mexico|peso|1|MXN|1.322
  New Zealand|dollar|1|NZD|14.125
  Norway|krone|1|NOK|2.189
  Philippines|peso|100|PHP|40.471
  Poland|zloty|1|PLN|5.651
  Romania|leu|1|RON|4.966
  Singapore|dollar|1|SGD|16.986
  South Africa|rand|1|ZAR|1.214
  South Korea|won|100|KRW|1.715
  Sweden|krona|1|SEK|2.213
  Switzerland|franc|1|CHF|26.524
  Thailand|baht|100|THB|65.711
  Turkey|lira|100|TRY|75.776
  United Kingdom|pound|1|GBP|28.483
  USA|dollar|1|USD|22.526
`

  it('parses exchange rates', () => {
    const rates = parser(mockResponse)
    expect(rates.length).toBe(31)
  })
})
