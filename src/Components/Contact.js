import React from "react";

function Contact() {
  return (
 <div className="img">
   <div className="overlay">
    <div className="container">
      <div className="col-lg-6 col-md-8 col-12 formhandler">
      <form>
  <div className="form-group pb-3">
    <label className="pb-1">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group pb-3">
    <label className="pb-1">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="email" />
  </div>
  
  <div className="form-group pb-3">
    <label className="pb-1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
   </div>
 </div>
  )
 
}

export default Contact;
