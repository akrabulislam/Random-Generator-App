import axios from 'axios';
import fileDownload from 'js-file-download';

const useDownload = () => {
  const handleDownload = () => {
    async function downloadData() {
      try {
        const response = await axios.get('http://localhost:5000/download');
        fileDownload(response.data,'Random Strings.txt');
      } catch (error) {
        console.error(error);
      }
    }
    downloadData();
  };
  return {handleDownload}
};

export default useDownload;
