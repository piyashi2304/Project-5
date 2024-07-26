import React, { useState,useEffect } from 'react'

function UserForm() {

    // Define state variables for the name and email inputs

    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [submittedName, setSubmittedName] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmittedName(name);
    setSubmittedEmail(email);
  };

    
  useEffect(() => {
    if (submittedName || submittedEmail) {
      console.log(`Form submitted with Name: ${submittedName} and Email: ${submittedEmail}`);
    }
  }, [submittedName, submittedEmail]);
  

 return (
   <>
   <h3>Create Account</h3><br />
   <div className='parent'>
    <div className='pic1'>
   <i class="fa-brands fa-facebook "></i>
   <h6>Sign up with facebook</h6>
   </div>
   <div className='pic1'>
   <i class="fa-brands fa-google"></i>
   <h6>Sign up with Google</h6>
   </div>
   </div>
   <h4>--OR--</h4>
   <div className='container'>
   
    
   <div className='formpage'> 
  
   <form onSubmit={handleSubmit}>
     <input  type = "text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/> <br />
    <input  type = "email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/> <br /><br />
    <button type="submit">Create Account</button>
   </form>
   

   
   {submittedName && (
        <div className='submittedInfo'>
          <h2>Submitted Information</h2>
          <p>Name: {submittedName}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
      </div>
      </div>
    
    
   
   </>
  )
}

export default UserForm