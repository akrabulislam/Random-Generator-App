import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Link from './components/Link/Link';
import Text from './components/Text/Text';
import Mask from './components/Mask/Mask';
import Loader from './components/Loader/Loader';

import useDownload from './hooks/useDownload';
import useGenerate from './hooks/useGenerate';
import useReport from './hooks/useReport';

function App() {
  const { handleDownload } = useDownload();
  const { url, handleGenerate, loading } = useGenerate();
  const { count, handleReport } = useReport();

  return (
    <div className="App">
      {loading && (
        <Mask>
          <Loader />
        </Mask>
      )}
      <div className="App-container">
        <Button text="Generate" btnType="primary" onClick={handleGenerate} />
        <Link onClick={handleDownload} url={url} />
        <Button text="Report" btnType="secondary" onClick={handleReport} />
        <div className="result-container">
          <Text text="Alphabetical String" result={count.alphabetic} />
          <Text text="Real Numbers" result={count.realNumber} />
          <Text text="Integers" result={count.integers} />
          <Text text="Alphanumerics" result={count.alphanumerics} />
        </div>
      </div>
    </div>
  );
}

export default App;
