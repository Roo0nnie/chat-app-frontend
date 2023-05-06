import { useState } from "react";
import ApiService from "./ApiService";

function Login() {

    const [accountVerfify, setaccountVerify] = useState(false);
    const [userpassword, setuserPassword] = useState(false);
    const [userusername, setuserUsername] = useState(false);

    const onVerifyusername = (e) => {
        const username = e.target.value;
        ApiService('/students/login/' + username, null, (data)=>{
            setuserPassword(data);
        });
      }
      const onVerifypassword = (e) => {
        const password = e.target.value;
        ApiService('/students/login/' + password, null, (data)=>{
            setuserUsername(data);
        });
      }
    
    const onClickVerifyAccount = () => {
        if(setuserPassword(false) && (setuserUsername(false))) {
            setaccountVerify(false);
        } else {
            setaccountVerify(true);
        }
        
    }
      
    
      

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
                        <input type="text" class="form-control" id="floatingInput" placeholder='Username' onChange={onVerifyusername} name='username'/>
                        <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingInput" placeholder='Password' onChange={onVerifypassword} name='password'/>
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
                                <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" style={{width:"100%"}} onClick={onClickVerifyAccount}>Login</button>
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
