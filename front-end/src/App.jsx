import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateQuiz from '../pages/CreateQuiz'
import StartQuiz from '../pages/StartQuiz'
import ResultPage from '../pages/ResultPage'
function App() {
  
  const [resultdata, setResultData] = useState(null); 

  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create-quiz' element={<CreateQuiz/>}></Route>
    <Route path='/start-quiz' element={<StartQuiz resultdata={resultdata} setResultData={setResultData}/>}></Route>
    <Route path='/result-page' element={resultdata ? (
            <ResultPage score={resultdata.score} total={resultdata.total} />
          ) : (
            <div className="text-center text-red-500 mt-10">
              No result data found. Please attempt a quiz first.
            </div>
          )}></Route>
   </Routes>
  )
}

export default App
