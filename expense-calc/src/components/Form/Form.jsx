import React from 'react'
import './Form.css'

const Form = ({onSaveData}) => {
  const handleSubmit=(event)=>{
    event.preventDefault();

    const data = new FormData(event.target);
    const obj={
      date:data.get('date'),
      amt:data.get('amount'),
      head:data.get('head'),
      tag:data.get('tag'),
      note:data.get('note')
    }
    onSaveData(obj);
    
    
  }
  return (
    <>
    <h1 style={{textAlign:'center',margin:'20px'}}>Add Expense</h1>
    <form className="your-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="date">Date</label>
      <input type="date" id="date" className="form-control" name='date'/>
    </div>
    <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" className="form-control" name='amount'/>
    </div>
    <div className="form-group">
      <label htmlFor="head">Head</label>
      <input type="text" id="head" className="form-control" name='head'/>
    </div>
    <div className="form-group">
      <label htmlFor="tag">Tag</label>
      <input type="text" id="tag" className="form-control" name='tag'/>
    </div>
    <div className="form-group">
      <label htmlFor="note">Note</label>
      <input type="text" id="note" className="form-control" name='note'/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </>
  )
}

export default Form;