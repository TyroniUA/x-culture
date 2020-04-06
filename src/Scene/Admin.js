import React, {useCallback, useContext} from 'react';
import { Redirect} from 'react-router-dom';
import {AuthContext} from '../FireBase/Auth.js'
import firebase from '../FireBase/Firebase.js'
import '../App.scss'
let app = firebase;
const Admin = ({ history }) =>{

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          console.log(event.target.elements)
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/adminDashboard");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/adminDashboard" />;
      }
    
        return (
            <section style={{display: 'block'}} >
                <div >
                    <h2 style={{textAlign: 'center', margin: '0'}}>LOG IN <br/>AS ADMIN</h2>
                    <form onSubmit={handleLogin} className='login'>
                        <label>
                            Email
                        </label>
                        <input name="email" type="email" placeholder="Email" />
                        
                        <label>
                            Password</label>
          <input name="password" type="password" placeholder="Password" />
                        
                        <button type="submit">Log in</button>
                    </form>
                </div> 
            
           
            </section>
        )
    
}

export default Admin