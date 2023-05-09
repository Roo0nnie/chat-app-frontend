import { useState } from "react";

function SignUp() {

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onClickRegister = () => {
    fetch('http://localhost:8080/users/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastname,
        firstname,
        email,
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log( 'error');
      });
  };

    return (
    <>
        <div>
                   
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" placeholder='Firstname' onChange={e => setFirstname(e.target.value)} name='firstname' value={firstname}/>
                            <label for="floatingInput">Firstname</label>
                        </div>            
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" placeholder='Lastname' onChange={e => setLastname(e.target.value)} name='lastname' value={lastname}/>
                            <label for="floatingInput">Lastname</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" placeholder='Username' onChange={e => setUsername(e.target.value)} name='username' value={username}/>
                            <label for="floatingInput">Username</label>
                        </div>                    
                        <div className="form-floating mb-3 mt-3">
                            <input type="email" class="form-control" placeholder='Email' onChange={e => setEmail(e.target.value)} name='email' value={email}/>
                            <label for="floatingInput">Email</label>
                        </div>                
                        <div className="form-floating mb-3 mt-3">
                            <input type="password" class="form-control" placeholder='Password' onChange={e => setPassword(e.target.value)} name='password' value={password}/>
                            <label for="floatingInput">Password</label>
                        </div>
               
                <div className="card-footer">
                    <div class="checkMark">
                        <input class="form-check-input check" type="checkbox"/>
                        <label class="form-check-label check fw-bold mx-2" for="termAndCondition">
                            I Agree to the <span><a href="#" style={{textDecoration:"none"}}>term</a></span> & <span><a href="#" style={{textDecoration:"none"}}>condition</a></span>
                        </label>
                    </div>
                    <div class="row mt-3">
                        <div className="col-sm-12">
                            <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" onClick={onClickRegister} style={{width:"100%"}}>Create Account</button>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                            <label for="forgot-Pass" class="fw-bold"><span>Don't have account? <a href="#"  style={{textDecoration:"none"}}> Sign up </a></span></label> 
                    </div>
                </div>
        </div>
    </>
    );
}

export default SignUp;