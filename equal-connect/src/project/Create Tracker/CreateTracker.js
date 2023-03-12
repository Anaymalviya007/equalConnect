import React from 'react'
import './CreateTracker.css'
import { useState } from "react";
import '../dashboard/Dashboard'



function CreateTracker() {

  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
<div className='All'>  
<div className='detail'>
    <h1>Company Name</h1>
    <h2>SPOC Name</h2>
    </div>

    <form className="App" autoComplete="off">
      <div className="form-field" >
        
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
            <label htmlFor="service" contentEditable='true' suppressContentEditableWarning={true}>Input</label>
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index  && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button type='submit' className="sub_btn">Submit</button>
    </form>
    </div>
  );
  
}

export default CreateTracker
