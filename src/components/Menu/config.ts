import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${process.env.REACT_APP_MAIN_BASE_URL}/farms`,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: `${process.env.REACT_APP_MAIN_BASE_URL}/pools`,
  },
  {
    label: 'Referrals',
    icon: 'ReferralsIcon',
    href: `${process.env.REACT_APP_MAIN_BASE_URL}/referrals`,
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    href: 'https://github.com/martiandefi/audit',
  },
  {
    label: 'Price Chart',
    icon: 'ChartIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer',
      },
    ],
  },
  {
    label: 'Features',
    icon: 'FeaturesIcon',
    items: [
      {
        label: 'Transfer Tax',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/martian',
      },
      {
        label: 'Auto Burn',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/auto-burn-mechanism',
      },
      {
        label: 'Auto LP',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/auto-liquidity-mechanism',
      },
      {
        label: 'Harvesting Time Lock',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/harvest-time-lock',
      },
      {
        label: 'Anti Whale Measures',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/mitigate-pump-and-dumps',
      },
      {
        label: 'UFO Airdrops',
        href: 'https://martianswap.gitbook.io/martianswap/tokenomics/ufo-airdrops',
      }
    ],
  },
  {
    label: 'Listings',
    icon: 'ListIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x65d8861d66f0b77faf82e0cc8377ef4539b6c69a',
      },
      {
        label: 'DappRadar',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'CoinGecko',
        href: '',
      }
    ],
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    href: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/martiandefi',
      },
      {
        label: 'Docs',
        href: 'https://martianswap.gitbook.io/',
      },
      {
        label: 'Roadmap',
        href: 'https://martianswap.gitbook.io/martianswap/roadmap-1',
      },
    ],
  },
]
export default config