import React from 'react';

function Signup(){
    return (
        <div>
             <div className='login'>
               <div className='login2'>
                <h1 className='sin'>SignUp</h1>
                <h2 className='log'>Join Us</h2>
            <div><p className='p-foot'> Subscribe Easy Tutorials YouTube Channel to Watch more imageses</p></div>

              <div>  <button className='foot-btn'>About Us</button></div>
               </div>
               

              
               <div className='login3'>
               <div className='login3-h1'> <h1>Signup Here's</h1></div>
              <div className='form-foot'>
               <th>
                <td>Enter your Email'id </td>
               </th><br/>
               <td><input type='email'></input></td><br/>
               <th>
                <td>Enter your Password</td>
               </th><br/>
               <td><input type='text'></input></td><br/>
              
               <div><button className='foot-bt'>Register</button></div>
               </div>
               </div>
        </div>
        </div>
    );
}

export default Signup;
