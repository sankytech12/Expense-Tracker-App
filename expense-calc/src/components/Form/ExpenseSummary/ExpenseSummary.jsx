import React, { useEffect } from 'react';
import './ExpenseSummary.css'

const ExpenseSummary = ({groupedData}) => {
  return (
    <>
    <h1 style={{textAlign:'center',margin:'20px'}}>Summary</h1>
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>Heads</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(groupedData.heads).map((entry, index) => (
            <tr key={index}>
              <td>{entry.head}</td>
              <td>{entry.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Tags</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(groupedData.tags).map((entry, index) => (
            <tr key={index}>
              <td>{entry.tag}</td>
              <td>{entry.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ExpenseSummary;