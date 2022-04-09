import { useState } from 'react';
import axios from 'axios';

interface frequency {
  alphabetic: number;
  alphanumerics: number;
  integers: number;
  realNumber: number;
}

const useReport = () => {
  const [count, setCount] = useState<frequency>({
    alphabetic: 0,
    alphanumerics: 0,
    integers: 0,
    realNumber: 0,
  });
  const handleReport = () => {
    async function generateReport() {
      try {
        const response = await axios.get('http://localhost:5000/report');
        setCount(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    generateReport();
  };
  return { handleReport, count };
};

export default useReport;
