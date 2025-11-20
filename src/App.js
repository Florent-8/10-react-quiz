import Header from './Header'
import Main from './Main';

export default function App(){

  return (
    <div className="App">
      <Header/>

      <Main>
        <main className='main'>
          <p>1/15</p>
          <p>Question?</p>
        </main>
      </Main>
    </div>
  )
}