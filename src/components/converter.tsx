import {
  Form,
  Input,
  Select,
  utils,
  useFieldState,
  useFieldApi,
} from 'informed'
import { useEffect } from 'react'
import { Row, Title } from '../lib/view-style'

export interface ListRatesProps {
  country: string
  currency: string
  amount: number
  code: string
  rate: number
}

export default function Converter({ list }: { list: ListRatesProps[] }) {
  const format = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)

  const localeOptions = [{ value: 'CZK', label: 'Czech (Crown)' }]
  const currencyOptions = list.map(({ code, country, currency }) => ({
    value: code,
    label: `${country} (${format(currency)})`,
  }))

  const LocaledField = () => {
    const { formatter, parser } = utils.createIntlNumberFormatter('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
    })

    return (
      <Input
        name="localeMask"
        formatter={formatter}
        parser={parser}
        initialValue={13}
      />
    )
  }

  const FormattedField = () => {
    const { value: localeMask } = useFieldState('localeMask')
    const { value: currency } = useFieldState('currency')
    const { setValue } = useFieldApi('currencyMask')

    const { formatter, parser } = utils.createIntlNumberFormatter('cs-CZ', {
      style: 'currency',
      currency: currency as string,
    })

    const converter = () => {
      const c = list.find((c) => c.code === currency) as ListRatesProps
      return ((localeMask as number) / c.rate) * c.amount
    }

    useEffect(() => {
      setValue(converter())
    }, [localeMask, currency])

    return (
      <Input
        name="currencyMask"
        formatter={formatter}
        parser={parser}
        initialValue={localeMask}
        disabled
        // @ts-ignore
        formatterDependencies={['cs-CZ', currency]}
      />
    )
  }

  return (
    <>
      <Title>Exchange your crowns</Title>
      <Form>
        <Row>
          <Select name="locale" options={localeOptions} />
          <LocaledField />
        </Row>
        <Row>
          <Select
            name="currency"
            options={currencyOptions}
            initialValue="USD"
          />
          <FormattedField />
        </Row>
      </Form>
    </>
  )
}
