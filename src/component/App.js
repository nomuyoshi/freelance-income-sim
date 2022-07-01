import Header from './Header';
import Notice from './Notice';
import Simulator from './Simulator';

function App() {
  return (
    <>
      <Header />
      <div className='columns m-0'>
        <div className='column is-three-fifths is-offset-one-fifth'>
          <Notice />
          <Simulator />
        </div>
      </div>
    </>
  );
}

export default App;
