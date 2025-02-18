import './App.css';

function App() {
  const tokenInfo = {
    addr: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chain: 'solana'
  }

  return (
    <div className='flex flex-col w-screen h-[1000px] rounded-xl'>
      <iframe
        id='tv-iframe'
        width='100%'
        height='100%'
        className='size-full object-cover'
        src={`https://birdeye.so/tv-widget/${tokenInfo?.addr}?chain=${tokenInfo?.chain}&chartType=CANDLE&chartInterval=1&chartLeftToolbar=show`}
        allowfullscreen={true}
      ></iframe>

      <div className='h-4' />

      <iframe
        className="w-full h-full"
        src={`https://www.geckoterminal.com/eth/pools/0xa3c2076eb97d573cc8842f1db1ecdf7b6f77ba27?embed=1&info=0&swaps=0&grayscale=0&light_chart=0`}
        allow="clipboard-write"
        allowfullscreen>
      </iframe>
    </div >
  )
}

export default App
