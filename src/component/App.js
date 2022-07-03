import Header from './Header';
import Notice from './Notice';
import Simulator from './Simulator';
import Links from './Links';

function App() {
  return (
    <>
      <Header />
      <div className='columns m-0'>
        <div className='column is-three-fifths is-offset-one-fifth'>
          <Notice />
          <Simulator />
          <Links />
        </div>
      </div>
    </>
  );
}

export default App;
