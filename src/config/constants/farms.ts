import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BABE-BNB LP',
    lpAddresses: {
      97: '0x23AFe2aBbc2274d681225D6Af0C5f02bcEa7891B',
      56: '0x23AFe2aBbc2274d681225D6Af0C5f02bcEa7891B',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x5cB1025440F7A07107CBF1588cEacF8bBF3dAB22',
      56: '0x5cB1025440F7A07107CBF1588cEacF8bBF3dAB22',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BABE-BUSD LP',
    lpAddresses: {
      97: '0x3e70E836c49Dbf1b9c49655aB9aF8D3734c74026',
      56: '0x3e70E836c49Dbf1b9c49655aB9aF8D3734c74026',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BABE-USDT LP',
    lpAddresses: {
      97: '0x269408CDfDdd1C7E2a043979688260f86c50aC25',
      56: '0x269408CDfDdd1C7E2a043979688260f86c50aC25',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'BABE-CAKE LP',
    lpAddresses: {
      97: '0xF4367C1fbC33957c20b733cA64A92520c2179ea4',
      56: '0xF4367C1fbC33957c20b733cA64A92520c2179ea4',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.CAKEE,
    quoteTokenAdresses: contracts.cakee,
  },
  {
    pid: 6,
    lpSymbol: 'BABE-DOGE LP',
    lpAddresses: {
      97: '0xb2556Ad094AD23f5c22C75ACdf5a5efE82EA2c06',
      56: '0xb2556Ad094AD23f5c22C75ACdf5a5efE82EA2c06',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.doge,
  },
  {
    pid: 7,
    lpSymbol: 'BABE-ADA LP',
    lpAddresses: {
      97: '0x432E920291193e02021E8c91dBB3BA76cd1B2c9D',
      56: '0x432E920291193e02021E8c91dBB3BA76cd1B2c9D',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.ADA,
    quoteTokenAdresses: contracts.ada,
  },
  {
    pid: 8,
    lpSymbol: 'BABE-BTCB LP',
    lpAddresses: {
      97: '0xd6acE9a29F59f3414cC6090d9d13af172397e1A9',
      56: '0xd6acE9a29F59f3414cC6090d9d13af172397e1A9',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btcb,
  },
  {
    pid: 9,
    lpSymbol: 'BABE-DOT LP',
    lpAddresses: {
      97: '0xc0058fd6c822329bAAdaC904d9289B3B54Db5381',
      56: '0xc0058fd6c822329bAAdaC904d9289B3B54Db5381',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.DOT,
    quoteTokenAdresses: contracts.dot,
  },
  {
    pid: 10,
    lpSymbol: 'BABE-ETH LP',
    lpAddresses: {
      97: '0x10ce1e643b790A8aF456B172A233053346d728FD',
      56: '0x10ce1e643b790A8aF456B172A233053346d728FD',
    },
    tokenSymbol: 'BABE',
    tokenAddresses: {
      97: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
      56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 11,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xc2b17C85da2B1921B309153640fdb6f860C9e651',
      56: '0xc2b17C85da2B1921B309153640fdb6f860C9e651',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
  // {
  //   pid: 14,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '0x3e70E836c49Dbf1b9c49655aB9aF8D3734c74026',
  //     56: '0x3e70E836c49Dbf1b9c49655aB9aF8D3734c74026',
  //   },
  //   tokenSymbol: 'Babe',
  //   tokenAddresses: {
  //     97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     56: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
