import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form/Form'
import ExpenseTable from './components/Form/ExpenseTable/ExpenseTable'
import ExpenseSummary from './components/Form/ExpenseSummary/ExpenseSummary'

function App() {
  const [arr, setData] = useState([]);
  const onSaveDataHandler=(data)=>{
    const datas={
      ...data,
    }
    //console.log(datas);
    setData((prevData)=> [...prevData,datas])
    setKeyForRerender((prevKey) => prevKey + 1);
  }
  return (
    <>
    <Form onSaveData={onSaveDataHandler}/>
    {arr.length > 0 && 
        <>
        <ExpenseTable  data={arr} /> 
        
        </>
      }
    </>
  )
}

export default App
