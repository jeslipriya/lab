import React, { useState } from 'react'

function Sample2() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitteddata, setSubmitteddata] = useState(null);

    const handleSubmit = () =>{
        const form = {name, email, password}
        setSubmitteddata = form;
        setName("");
        setEmail("");
        setPassword("");
    }

  return (
    <div>
      <h1>Forms</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='enter name' />
        <input type="email" value={email} placeholder='enter email' />
        <input type="password" value={password} placeholder='enter password' />


        <button type="submit">submit</button>
      </form>

      {submitteddata && (
        <>
        
        <h1>submitted data</h1>
        <p>name: {submitteddata.name}</p>
        <p>email: {submitteddata.email} </p>
        <p>password: {submitteddata.password} </p>
        
        </>
      )}
    </div>
  )
}

export default Sample2
