import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {

  const difficulty = ["easy", "medium", "hard"]
  const [difficultyChange,setDifficultyChange] = useState('')
  const navigate = useNavigate();
  const TOTAL_QUESTİONS = 10


  console.log(difficultyChange,"difficulty")

  const startQuiz = () => {
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }

  return (
    <div className='introduce'>
        <div className='introduce-container'>
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
          <div onClick={startQuiz} className='introduce-btn'>start Quiz</div>
        </div>
    </div>
  )
}

export default Introduce