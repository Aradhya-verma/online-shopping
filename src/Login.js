import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return (
        <div className='login'>
               <div className='login2'>
                <h1 className='sin'>Login</h1>
                <h2 className='log'>Join Us</h2>
            <div><p className='p-foot'> Subscribe Easy Tutorials YouTube Channel to Watch more imageses</p></div>

              <div>  <button className='foot-btn'>About Us</button></div>
               </div>
               

              
               <div className='login3'>
               <div className='login3-h1'> <h1>Login Here</h1></div>
              <div className='form-foot'>
               <th>
                <td>Enter your First name</td>
               </th><br/>
               <td><input type='text'></input></td><br/>
               <th>
                <td>Enter your Last name</td>
               </th><br/>
               <td><input type='text'></input></td><br/>
              
               <Link to="/home"><div><button className='foot-bt'>Log in</button></div><br/></Link>
               <Link to="/signup"><div><button className='foot-bt'>Sign Up</button></div></Link>
               </div>
               </div>
        </div>
    );
}

export default Login;
