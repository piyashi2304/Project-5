import React, { useState,useEffect } from 'react'

function UserForm() {

    // Define state variables for the name and email inputs

    const [ name , setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [submittedName, setSubmittedName] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');

     // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the submitted name and email states
    setSubmittedName(name);
    setSubmittedEmail(email);
  };

    // Effect to log when the form is submitted
  useEffect(() => {
    if (submittedName || submittedEmail) {
      console.log(`Form submitted with Name: ${submittedName} and Email: ${submittedEmail}`);
    }
  }, [submittedName, submittedEmail]);
  

 return (
   <>
   <div className='container'>
   <div className='formpage'> 
   <form onSubmit={handleSubmit}>
    <label> Name: <input  type = "text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/></label> <br />
    <label> Email: <input  type = "email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/></label>
    <button type="submit">Submit</button>
   </form>
   

   {/* Display the submitted name and email */}
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