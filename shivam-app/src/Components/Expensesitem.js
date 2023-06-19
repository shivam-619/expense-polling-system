import React,{useState} from 'react'
import './Expensesitem.css';
export default function Expensesitem(props) 
{
    const month=props.date.toLocaleString('en-US', {month: 'long'});
    const day= props.date.toLocaleString('en-US',{day: '2-digit'});
    const year=props.date.getFullYear();
    const[title, setTitle]= useState(props.title);
    const ClickHandler = () => {
        setTitle('updated!');
        console.log(title);
    };

  return (
    
    <div className='expenses-item' >
        <div>
            <div>{month}</div> 
            <div>{day}</div>
            <div>{year}</div>
        </div> 
        <div className='expense-description'>
            <h2>{title}</h2>
            <div className='expense-price'>
                ${props.amount}
                <button onClick={ClickHandler}>hello</button>
            </div>
        </div> 
        
    </div>
  );
}
