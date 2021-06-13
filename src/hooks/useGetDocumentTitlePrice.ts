import { useEffect } from 'react'
import { usePriceCakeBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cakePriceUsd = usePriceCakeBusd()
  const currentPrice = cakePriceUsd
  useEffect(() => {
    document.title = `BabeSwap - $${Number(currentPrice).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })}`
  })
}
export default useGetDocumentTitlePrice
