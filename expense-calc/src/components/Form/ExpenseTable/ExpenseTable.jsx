import React, { useState,useEffect } from "react";
import "./ExpenseTable.css";
import ExpenseSummary from "../ExpenseSummary/ExpenseSummary";

const ExpenseTable = ({ data }) => {
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [groupedData, setGroupedData] = useState({ heads: {}, tags: {} });

  useEffect(() => {
    const initialGroupedData = data.reduce((result, entry) => {
      const { head, tag, amt } = entry;


      if (head) {
        if (!result.heads[head]) {
          result.heads[head] = { head, totalAmount: 0 };
        }
        result.heads[head].totalAmount += parseFloat(amt);
      }


      if (tag) {
        if (!result.tags[tag]) {
          result.tags[tag] = { tag, totalAmount: 0 };
        }
        result.tags[tag].totalAmount += parseFloat(amt);
      }

      return result;
    }, { heads: {}, tags: {} });

    setGroupedData(initialGroupedData);
  }, [data]);

  const handleEditClick = (index) => {
    setEditableIndex(index);
    setEditedData({ ...data[index] });
  };

  const handleSaveClick = (index) => {
      
      const newData = [...data];
      newData[index] = editedData;
      data[index] = editedData;


    const updatedGroupedData = newData.reduce((result, entry) => {
      const { head, tag, amt } = entry;


      if (head) {
        if (!result.heads[head]) {
          result.heads[head] = { head, totalAmount: 0 };
        }
        result.heads[head].totalAmount += parseFloat(amt);
      }


      if (tag) {
        if (!result.tags[tag]) {
          result.tags[tag] = { tag, totalAmount: 0 };
        }
        result.tags[tag].totalAmount += parseFloat(amt);
      }

      return result;
    }, { heads: {}, tags: {} });

    setGroupedData(updatedGroupedData);
    setEditedData(null);
    setEditableIndex(null);
  };
  console.log(groupedData);
  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  if (data && data.length > 0) {
    return (
        <>
        <h1 style={{textAlign:'center',margin:'20px'}}>List Expense</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Head</th>
            <th>Tag</th>
            <th>Note</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>
                {editableIndex === index ? (
                  <input
                    type="date"
                    value={editedData.date}
                    onChange={(e) => handleInputChange(e, "date")}
                  />
                ) : (
                  entry.date
                )}
              </td>
              <td>
                {editableIndex === index ? (
                  <input
                    type="number"
                    value={editedData.amt}
                    onChange={(e) => handleInputChange(e, "amt")}
                  />
                ) : (
                  entry.amt
                )}
              </td>
              <td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={editedData.head}
                    onChange={(e) => handleInputChange(e, "head")}
                  />
                ) : (
                  entry.head
                )}
              </td>
              <td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={editedData.tag}
                    onChange={(e) => handleInputChange(e, "tag")}
                  />
                ) : (
                  entry.tag
                )}
              </td>
              <td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={editedData.note}
                    onChange={(e) => handleInputChange(e, "note")}
                  />
                ) : (
                  entry.note
                )}
              </td>
              <td>
                {editableIndex === index ? (
                  <button onClick={() => handleSaveClick(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ExpenseSummary groupedData={groupedData} />
      </>
    );
  }
};

export default ExpenseTable;
