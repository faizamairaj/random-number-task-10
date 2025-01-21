import { useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className=' text-white font-bold text-4xl mt-64  rounded-lg bg-cover bg-center bg-[url("image.png")] sm:bg-[url("image.png")]'>
      <h1>Random Number Generator</h1>
      <button className='bg-blue-500 p-5 rounded-md shadow-2xl mt-8 mb-10' onClick={generateRandomNumber}> Generate Number </button>
      {number !== null && <h2>Generated Number: {number}</h2>}
    </div>
  );
}

export default App;
