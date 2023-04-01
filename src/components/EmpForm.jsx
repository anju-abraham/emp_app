import React from 'react'
import Header from './Header'

const EmpForm = () => {
  return (
 <>
  <Header/>
<div className="card ">
<form >
  <h3>Employee Form</h3>
        <div className="container mt-5">
        <div className="mb-3 row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8">
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
        <div className="mb-3 row">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button type="submit" className="btn btn-primary" >Submit</button></div>
        </div> 
        </div>
</form>
</div>





 </>

  )
}

export default EmpForm