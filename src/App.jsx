import './App.css';

function App() {
  const tokenInfo = {
    addr: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chain: 'solana'
  }

  return (
    <div className='flex flex-col w-screen h-[600px] rounded-xl'>
      <iframe
        id='tv-iframe'
        width='100%'
        height='100%'
        className='size-full object-cover'
        src={`https://birdeye.so/tv-widget/${tokenInfo?.addr}?chain=${tokenInfo?.chain}&chartType=CANDLE&chartInterval=1&chartLeftToolbar=show`}
        allowfullscreen={true}
      ></iframe>
    </div>
  )
}

export default App
