import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  
    const navigation = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const verifyAccount = () => {
        fetch('http://localhost:8080/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
          .then(response => response.json())
          .then(data => {
            const jsonString = JSON.stringify(data);
            if(jsonString.includes("Invalid")) {
                alert('Invalid Account');
            } else {
                navigation('/Chat');
                
            }
            
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };

      

      
    return(
        <>
            <div className="">
            <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className='fw-bold'>Log In</h3>
                    </div>
                </div>
                <form>
                <div className="form-floating mb-3 mt-3">
                        <input type="text" class="form-control" placeholder='Username' onChange={e => setUsername(e.target.value)} name='username' value={username}/>
                        <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                        <input type="password" class="form-control" placeholder='Password' onChange={e => setPassword(e.target.value)} name='password' value={password}/>
                        <label for="floatingInput">Password</label>
                </div>

                </form>
                <div className="card-footer">
                    <div class="checkMark">
                        <input class="form-check-input check" type="checkbox"/>
                        <label class="form-check-label check fw-bold mx-2" for="remember-me">
                            Remember Me
                        </label>
                    </div>
                        <div class="row mt-3">
                            <div className="col-sm-12">
                                <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" style={{width:"100%"}} onClick={verifyAccount}>Login</button>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <label for="forgot-Pass" class="fw-bold"><span>Don't have account? <a href="#"  style={{textDecoration:"none"}}> Sign up </a></span></label> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
