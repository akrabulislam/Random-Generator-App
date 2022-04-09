import { useState } from 'react';
import axios from 'axios';

const useGenerate = () => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleGenerate = () => {
    async function generateData() {
      try {
        setLoading(true);
        await axios.get('http://localhost:5000/generate');
        setUrl(`http://localhost:5000/${Math.random().toString(36).slice(2)}`);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
    generateData();
  };
  return { handleGenerate, url, loading };
};

export default useGenerate;
