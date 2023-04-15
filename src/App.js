import { useState } from 'react';
import './app.css';
import How from './How';
import Thank from './Thank';
function App() {
  const [submited, setSubmited] = useState(false);
  const [rate, setRate] = useState(0);
  // console.log(rate);
  return (
    <div>
      {submited ? <Thank rate={rate} /> : <How handleClick={setSubmited}
        rate={rate} setRate={setRate} />}
    </div>
  );
}

export default App;
