import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const history=useNavigate();


        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('')

        async function submit(e){
            e.preventDefault();

            try{
                await axios.post("http://localhost:8000/signup",{
                    email,password
                })
                .then(res=>{
                    if(res.data="exist"){
                        alert("Sucessfully registered!")

                    }
                    else if(res.data="notexist"){
                        history("/home", {state:{id:email}})
                    }
                })
                .catch(e=>{
                    alert("wrong details")
                    console.log(e);
                })
 

            }
            catch(e){
                console.log(e);

            }
        }

        const appContainerStyle = {
          textAlign: 'center',
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(50deg, #1b6d22, #24993d 48%, #40a82b)',
        };
        
        const authFormContainerStyle = {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          border: '1px solid white',
          borderRadius: '10px',
          margin: '0.5rem',
        };
        
        const labelStyle = {
          textAlign: 'left',
          padding: '0.5rem 0',
        };
        
        const inputStyle = {
          margin: '0.5rem 0',
          padding: '0.5rem',
          border: 'none',
          borderRadius: '10px',
        };
        
        const buttonStyle = {
          border: 'none',
          backgroundColor: 'aliceblue',
          padding: '1rem',
          borderRadius: '20px',
          cursor: 'pointer',
          color: '#103618',
          marginTop: '0.5rem',
        };
        
        const linkButtonStyle = {
          background: 'none',
          color: 'whitesmoke',
          textDecoration: 'underline',
          marginTop: '1rem',
        };
        
        return (
          <div className="login" style={appContainerStyle}>
            
        
            
            <form action="POST" style={authFormContainerStyle}>
            <h1>Signup</h1>
            <label style={labelStyle}>Full Name</label>
              <input
                type="fullname"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Fullname"
                name=""
                id=""
                style={inputStyle}
              />
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                name=""
                id=""
                style={inputStyle}
              />
        
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                name=""
                id=""
                style={inputStyle}
              />
        
              <input type="submit" onClick={submit} style={buttonStyle} />
              <br />
            <p>OR</p>
            <br />
        
              <Link to="/" style={linkButtonStyle}>Login Page</Link>
            </form>
        
            
    </div>
 );        
}
export default Login