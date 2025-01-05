import React from "react";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";

const Contact = () => {
  const notifySuccess = (msg) => toast.success(msg,
        {duration: 2000}
      );
      const notifyError = (msg) => toast.error(msg,
        {duration: 2000}
      );

      const [state, handleSubmit] = useForm("mlddonoj")
      if(state.succeeded){
        notifySuccess("successfully submittted");
        window.location.reload();

      }
  return <section id="contact" className="ico-contact pos-rel">
    <div className="container">
      <div className="ico-contact__wrap">
        <h2 className="title">
          Send us a message
        </h2>
      
      <form  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <input type="text" id="name" name="name" placeholder="Entername" />
          </div>

          <div className="col-lg-6">
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>

          <div className="col-lg-12">
            <textarea type="text" id="message" name="message" placeholder="message">
              </textarea> 
          </div>
          <div className="ico-contact__btn text-center mt-10">
            <button className="thm-btn" type="submit" disabled={state.submitting}>
              send message

            </button>
          </div>
        </div>
      </form>
      <div className="ico-contact__shape-img">
        <div className="shape shape--1">
          <div data-parallax='{"y" : -50}'>
            <img src="assets/img/shape/c_shape1.png" alt="" />
          </div>
           </div>
           <div className="shape shape--2">
          <div data-parallax='{"y" : 60}'>
            <img src="assets/img/shape/c_shape2.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="ico-contact__shape">
      <div className="shape shape--1">
        <img src="assets/img/shape/f_shape1.png" alt="" />
      </div>
      <div className="shape shape--2">
        <img src="assets/img/shape/f_shape2.png" alt="" />
      </div>
      <div className="shape shape--3">
        <img src="assets/img/shape/f_shape3.png" alt="" />
      </div>
    </div>
  
  </section>;
};

export default Contact;
