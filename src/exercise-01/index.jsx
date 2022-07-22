import React, {useState} from 'react'
import './index.css'

const Exercise01 = () => {
    const inputRef = React.useRef()
    const [arrayInt, setArrayInt] = useState([])
    const [arrayIntToShow, setArrayIntToShow] = useState([])
    const [input, setInput] = useState()
    const [isSumArr, setIsSumArr] = useState(false)
    const [result, setResult] = useState(0)

    const sumArrayNumber = (arr) => {
        if(isSumArr) {
            if(!arr.length) return
            if(arr.length === 1) {
                return arr[0];
            } else {
                return arr.pop() + sumArrayNumber(arr)
            }
        }

    }

    const handleChangeArray = () => {
        if(input && Number.isInteger(Number(input))) {
            setArrayInt([...arrayInt, Number(input)])
            setArrayIntToShow([...arrayInt, Number(input)])
            
            setInput()
            setIsSumArr(false)
            inputRef.current.value = ''
        }
        return
    }

    const handleReset = () => {
        setArrayInt([]);
        setArrayIntToShow([]);
        setInput();
        setIsSumArr(false)
        inputRef.current.value = ''
        setResult(0)
    }
    
    const handleSumArray = () => {
        const result = sumArrayNumber(arrayInt)
        return result
    }

    React.useEffect(() => {
        if(isSumArr && arrayInt.length) {
            const result = handleSumArray()
            setResult(result)
        }
    },[isSumArr])

  return (
    <div className='exercise-01'>
        <input ref={inputRef} placeholder='Input your Array Here' type='tel' onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleChangeArray}> Add into your array </button>
        <div>{'Your Array [' + arrayIntToShow + ']'}</div>
        <button onClick={() => setIsSumArr(true)}> Sum Array </button>
        <button onClick={handleReset}> Reset </button>
        <div> Your Result = {result}</div>
    </div>
  )
}

export default Exercise01