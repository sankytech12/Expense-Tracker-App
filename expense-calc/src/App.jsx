import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form/Form'
import ExpenseTable from './components/Form/ExpenseTable/ExpenseTable'
import axios from 'axios';
import ExpenseSummary from './components/Form/ExpenseSummary/ExpenseSummary'

function App() {
  const [arr, setData] = useState([]);
  useEffect(()=>{
    const fetch=async()=>{
      const back=await axios.get("http://localhost:4000/expense");
      //console.log(back.data.expenseData);
      setData(back.data.expenseData);

    }
    fetch();
  })
  const onSaveDataHandler=(data)=>{
    const datas={
      ...data,
    }
    //console.log(datas);
    //setData((prevData)=> [...prevData,datas])
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
