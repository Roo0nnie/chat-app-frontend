import { useEffect, useState } from "react";

function SignUp({data, onSaveHandler}){

    const [userData, setUserData] = useState(data);

    const onChangeHandler = (e) =>{
        let fieldName = e.target.name;
        let newData = {...userData, [fieldName]: e.target.value};
        setUserData(newData);
    }

    useEffect(()=>{
        setUserData(data);
    },[data]);

    const onClickSaveHandler = () => {
        onSaveHandler(userData);
    }

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className='fw-bold'>Sign Up</h3>
                </div>
            </div>
            <form>
            <input type="hidden" name="id" value={userData.id}/>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder='FirstName' name='firstname' value={userData.firstName} onChange={onChangeHandler}/>
                    <label for="floatingInput">FirstName</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder='Lastname' name='lastname' value={userData.lastName} onChange={onChangeHandler}/>
                    <label for="floatingInput">LastName</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" placeholder='Username' name='username' value={userData.username} onChange={onChangeHandler}/>
                    <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="email" class="form-control" placeholder='Email' name='email' value={userData.email} onChange={onChangeHandler}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                    <input type="password" class="form-control" placeholder='Password' name='password' value={userData.password} onChange={onChangeHandler}/>
                    <label for="floatingInput">Password</label>
                </div>
            </form>
            <div className="card-footer">
                    <div class="checkMark">
                        <input class="form-check-input check" type="checkbox"/>
                        <label class="form-check-label check fw-bold mx-2" for="remember-me">
                            Agree to the <a href="#"  style={{textDecoration:"none"}}> term </a> and <a href="#"  style={{textDecoration:"none"}}> condition. </a>
                        </label>
                    </div>
                        <div class="row mt-3">
                            <div className="col-sm-12">
                                <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" style={{width:"100%"}} onClick={onClickSaveHandler}>Login</button>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <label for="forgot-Pass" class="fw-bold"><span>Already have account?<a href="#"  style={{textDecoration:"none"}}> Login </a></span></label> 
                    </div>
                </div>
            </div> 
         
    </>
    );
}

export default SignUp;