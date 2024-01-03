import {
  Amount,
  List,
  ListItem,
  Powered,
  PoweredBy,
  RateItem,
  Rates,
} from '../lib/view-style'

export interface ListRatesProps {
  country: string
  currency: string
  amount: number
  code: string
  rate: number
}

export default function ListRates({ list }: { list: ListRatesProps[] }) {
  const format = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)

  return (
    <Rates>
      <Powered>
        <PoweredBy>Powered by</PoweredBy>
        <img
          src="https://www.cnb.cz/export/system/modules/cz.nelasoft.opencms.cnb/resources/img/LOGO-2RC_RGB.svg"
          alt="CNB"
          height={42}
        />
      </Powered>
      <List>
        {list.map((item) => {
          return (
            <ListItem key={item.code}>
              <div data-testid="listitem">
                {item.country} ({format(item.currency)})
                {item.amount > 1 && <Amount>{`(:${item.amount})`}</Amount>}
              </div>
              <div>
                <RateItem>{item.rate} Kč</RateItem>
              </div>
            </ListItem>
          )
        })}
      </List>
    </Rates>
  )
}
