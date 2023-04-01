import React from 'react'

const EmpForm = () => {
  return (
  
 
<div className="card ">
<form >
        <div className="container mt-5">
        <div className="mb-3 row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <input type="text"  className="form-control" id="name" placeholder='Enter your Name'/>
        </div>
        </div>
        <div className="mb-3 row">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <input type="text" className="form-control" id="location" placeholder='Enter your Location'></input>
        </div>
        </div>
        <div className="mb-3 row">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <input type="text" className="form-control" id="inputDesig" placeholder='Enter your Designation'/>
        </div>
        </div>
        <div className="mb-3 row">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <input type="text" className="form-control" id="inputSalary"placeholder='Enter your salary'/>
        </div>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
        </div> 
</form>
</div>





 

  )
}

export default EmpForm