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
    icon: 'PoolIcon',
    href: `${process.env.REACT_APP_MAIN_BASE_URL}/referrals`,
  },
  {
    label: 'Audits',
    icon: 'PoolIcon',
    href: 'https://github.com/martiandefi/audit',
  },
  {
    label: 'Features',
    icon: 'InfoIcon',
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
  {
    label: 'Listings (Coming Soon)',
    icon: 'PoolIcon',
    href: '#',
  },
  {
    label: 'Analytics (Coming Soon)',
    icon: 'PoolIcon',
    href: '',
  },
]
export default config