import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {


  function set_SPOC (){
    let foo
      foo = prompt('Set working for Company Name/SPOC');
      document.getElementById("btn").innerHTML = foo;
      
     
     
  }

  return (

    <div className='con'>
    <Link to="/createTracker"> 
      <button type='button' className='btn btn-dark'>Create Tracker</button> 
    </Link>
        <button type='button' className='btn btn-dark' id='btn' onClick={set_SPOC}>Set working for Company Name/SPOC</button>

        <Link to="/search">
        <button type='button' className='btn btn-dark'>Search Record</button>
        </Link>
        <button type='button' className='btn btn-dark'>Add Record</button>
        <button type='button' className='btn btn-dark'>Update Record</button>
        <button type='button' className='btn btn-dark'>Delete Record</button>
    </div>
   
    
  )
}

export default Dashboard
