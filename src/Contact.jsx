import React, { useState } from "react";

const Contact = () => {
const [data, setData] = useState({
    Fullname:"",
    phone:"",
    msg:"",
});
const formSubmit = () =>{};     
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container container-div">
                <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                        <form pnsubmit={formSubmit}>
                                <div class="form-group p-21">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="Fullname"
                                    value={data.Fullname}
                                     onChange={InputEvent}
                                    placeholder="Enter Your Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" 
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your Phone Number" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormC ample.com" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                      name="msg"
                                      value={data.msg}
                                       onChange={InputEvent}>
                                    </textarea>
                                </div>
                                <div className="col-12">
                                <button  class="btn-get-started " type="submit">Submit form</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>

    );

};
export default Contact;