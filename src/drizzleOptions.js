import Guestbook from '@/contracts/Guestbook.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [Guestbook],
  events: {
    Guestbook: ['SignatureAdded']
  },
  polls: {
    accounts: 15000
  }
}

export default options
