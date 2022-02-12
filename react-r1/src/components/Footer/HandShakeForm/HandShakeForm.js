import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
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
      let emailRegularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        {handShakeFormError.nameError&&!handShakeForm.isNamePristine?
          <TextField error helperText='Name should not exceed 30 characters and should have at least 2 characters.' variant='standard' fullWidth label="Enter your name here" id="name" aria-describedby="name" value={handShakeForm.name} onChange={(e)=>handleFormChange(e)} autoComplete="off" />
          :
          <TextField variant='standard' fullWidth label="Enter your name here" id="name" aria-describedby="name" value={handShakeForm.name} onChange={(e)=>handleFormChange(e)} autoComplete="off" InputProps={{style:{color:'#003B46'}}} />
        }
        </div><br/>
        <div id="emailField">
          {handShakeFormError.emailError&&!handShakeForm.isEmailPristine?
          <TextField error helperText="Invalid email. Please check the email you've entered." variant='standard' fullWidth label="Enter your email address" id="email" aria-describedby="email" value={handShakeForm.email} onChange={(e)=>handleFormChange(e)} autoComplete="off" />
          :
          <TextField variant='standard' fullWidth label="Enter your email address" id="email" aria-describedby="email" value={handShakeForm.email} onChange={(e)=>handleFormChange(e)} autoComplete="off" InputProps={{style:{color:'#003B46'}}} />
          }
        </div><br/>
        <div id="textField">
          
          {handShakeFormError.messageError&&!handShakeForm.isMessagePristine?
          <TextField error helperText='Message should not exceed 700 characters and should have at least 10 characters.' variant='standard' fullWidth label="Enter your message" id="message" className="textArea" aria-describedby="areaText" value={handShakeForm.message} onChange={(e)=>handleFormChange(e)} autoComplete="off" />
          :
          <TextField variant='standard' fullWidth label="Enter your message" id="message" className="textArea" aria-describedby="areaText" value={handShakeForm.message} onChange={(e)=>handleFormChange(e)} autoComplete="off" InputProps={{style:{color:'#003B46'}}} />
          }
        </div><br/>
        {formError?<button type='submit' className='btn btn-danger form-control' onClick={(e)=>handleSubmit(e)} disabled>Submit</button>:<button type='submit' className='btn btn-success form-control' onClick={(e)=>handleSubmit(e)}>Submit</button>}
        {isFormSubmitted?<label className='form-text text-success'>Your Handshake sent successfully.</label>:<label></label>}
    </form>
  );
};

export default HandShakeForm;
