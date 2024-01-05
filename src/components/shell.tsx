import { useRateSourceInfoQuery } from '../lib/hooks/useRateSourceInfoQuery'
import { View } from '../lib/view-style'
import Converter from './converter'
import ListRates from './list-rates'

export default function Shell() {
  const { data } = useRateSourceInfoQuery()

  if (!data) return <>Error fetch data. Try it again.</>

  return (
    <View>
      <Converter list={data} />
      <ListRates list={data} />
    </View>
  )
}
