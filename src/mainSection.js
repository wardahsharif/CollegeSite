import React from 'react';
import "./mainSection.css";

const Main = () => {
   return ( <div className="main">
    {/*header section */}
<div className="header card text-light bg-secondary">
  <img src="/graduates.jpeg" className="card-img headerImg" alt="school" />
  <div className="card-img-overlay text-main">
    <h3 className="card-title">All the courses you need</h3>
    <h1 className="card-text">Welcome To Our Online College</h1>
    <h5 className="card-text">Your Knowledge is the Way To Your Success</h5>
    <button className="btn btn-dark">Read more</button>
  </div>
</div>

{/*category section */}
  <div className="container">
  <div className="row">
    <div className="col-md-3">
      <div className="card my-3 m-2 p-3 bg-dark-subtle">
        <div className="card-body">   
        
           <i class="fa-solid fa-user-graduate fa-2xl " >
           </i>
        
          <h5 className="card-title m-2">Certified Teachers</h5>
          <p className="card-text">Even the all-powerful pointing has no control about the blind texts it is an almost </p>
          <a href="#" className="btn btn-dark">Read more</a>
        </div>
      </div>
    </div>

     <div className="col-md-3">
      <div className="card my-3 m-2 p-3 bg-dark-subtle">
        <div className="card-body">
            <i class="fa-solid fa-book-open-reader fa-2xl"></i>
          <h5 className="card-title m-2">Special Education</h5>
          <p className="card-text">Even the all-powerful pointing has no control about the blind texts it is an almost </p>
          <a href="#" className="btn btn-dark">Read more</a>
        </div>
      </div>
    </div>

     <div className="col-md-3">
      <div className="card my-3 m-2 p-3 bg-dark-subtle">
        <div className="card-body">
            <i class="fa-solid fa-book-open fa-2xl"></i>
          <h5 className="card-title m-2">Book & Library</h5>
          <p className="card-text">Even the all-powerful pointing has no control about the blind texts it is an almost </p>
          <a href="#" className="btn btn-dark">Read more</a>
        </div>
      </div>
    </div>

    
    <div className="col-md-3">
      <div className="card my-3 m-2 p-3 bg-dark-subtle">
        <div className="card-body">
            <i class="fa-solid fa-medal fa-2xl"></i>
          <h5 className="card-title m-2">Sport Clubs</h5>
          <p className="card-text">Even the all-powerful pointing has no control about the blind texts it is an almost </p>
          <a href="#" className="btn btn-dark">Read more</a>
        </div>
      </div>
    </div>

</div>
</div>
        </div>
    
)}

export default Main;