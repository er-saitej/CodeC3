import React, { useEffect, useState } from 'react';
import { HandShakeFormDefaultValues, HandShakeFormErrorDefaultValues } from './HandShakeFormDefaultValues';
import './HandShakeForm.css';

const HandShakeForm = () => {
  let [handShakeForm, setHandShakeForm] = useState(HandShakeFormDefaultValues);
  let [handShakeFormError, setHandShakeFormError] = useState(HandShakeFormErrorDefaultValues);
  let [formError, setFormError] = useState(true);
  let [isFormSubmitted, setIsFormSubmitted] = useState(false);
  let handleFormChange = (e) => {
    const {id, value} = e.target;
    validateForm(id, value);
    setHandShakeForm({...handShakeForm, [id]:value})
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    // values of form when submitted
    setIsFormSubmitted(true);
    setHandShakeForm(HandShakeFormDefaultValues);
    setHandShakeFormError(HandShakeFormDefaultValues);
    setFormError(true);
  }
  let validateForm = (id, value) => {
    setIsFormSubmitted(false);
    if(id==='name') {
      if(value.length<2 || value.length>30) {
        setHandShakeFormError({...handShakeFormError, nameError:true, isFormNameNotPristine:true});
      }
      else {
        setHandShakeFormError({...handShakeFormError, nameError:false, isFormNameNotPristine:true});
      }
    }
    else if(id==='message') {
      if(value.length<10 || value.length>700) {
        setHandShakeFormError({...handShakeFormError, messageError:true, isFormMessageNotPristine:true});
      }
      else {
        setHandShakeFormError({...handShakeFormError, messageError:false, isFormMessageNotPristine:true});
      }
    }
    else if(id==="email") {
      let emailRegularExpression = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      if(emailRegularExpression.test(value)) {
        setHandShakeFormError({...handShakeFormError, emailError:false, isFormEmailNotPristine:true});
      }
      else {
        setHandShakeFormError({...handShakeFormError, emailError:true, isFormEmailNotPristine:true});
      }
    }
  }

  useEffect(()=>{
    let noError = !handShakeFormError.emailError&&!handShakeFormError.nameError&&!handShakeFormError.messageError;
    let isFormNotPristine = handShakeFormError.isFormNameNotPristine&&handShakeFormError.isFormEmailNotPristine&&handShakeFormError.isFormMessageNotPristine;
    if(isFormNotPristine&&noError) {
      setFormError(false);
    }
    else {
      setFormError(true);
    }
  }, [handShakeFormError]);

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div id="nameField">
          <label htmlFor="name" className='form-label text-hard'>Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="name" placeholder='Enter your name in this field' value={handShakeForm.name} onChange={(e)=>handleFormChange(e)} autoComplete="off" />
          {handShakeFormError.nameError&&!handShakeForm.isNamePristine?<label className='form-text text-danger'>Name should not exceed 30 characters and should have at least 2 characters.</label>:<label></label>}
        </div>
        <div id="emailField">
          <label htmlFor="email" className='form-label text-hard'>Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="email" placeholder='Enter your email address'  value={handShakeForm.email} onChange={(e)=>handleFormChange(e)} autoComplete="off" />
          {handShakeFormError.emailError&&!handShakeForm.isEmailPristine?<label className='form-text text-danger'>Invalid email. Please check again.</label>:<label></label>}
        </div>
        <div id="textField">
          <label htmlFor="areaText" className='form-label text-hard'>Message</label>
          <textarea type="text" className="form-control" id="message" aria-describedby="areaText" placeholder='Enter your message here'  value={handShakeForm.message} onChange={(e)=>handleFormChange(e)} autoComplete="false" />
          {handShakeFormError.messageError&&!handShakeForm.isMessagePristine?<label className='form-text text-danger'>Message should not exceed 700 characters and should have at least 10 characters.</label>:<label></label>}
        </div>
        {formError?<button type='submit' className='btn btn-danger form-control' onClick={(e)=>handleSubmit(e)} disabled>Submit</button>:<button type='submit' className='btn btn-success form-control' onClick={(e)=>handleSubmit(e)}>Submit</button>}
        {isFormSubmitted?<label className='form-text text-success'>Your Handshake sent successfully.</label>:<label></label>}
    </form>
  );
};

export default HandShakeForm;
