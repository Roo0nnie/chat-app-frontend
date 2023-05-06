import { useEffect, useState } from "react";

function SignUp({data, onSaveHandler}){

    useEffect(()=>{
        setuserData(data);
    },[data]);

    const [userData, setuserData] = useState(data);

    const onChangeHandler = (e) =>{
        let fieldName = e.target.name;
        let newData = {...userData, [fieldName]: e.target.value};
        setuserData(newData);
    }

    const onClickSaveHandler = () => {
        onSaveHandler(userData);
    }

    return (
    <>
        <div className="">
                    <input type="hidden" name="id" value={userData.id}/>
                   
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" value={userData.firstname} id="floatingInput" placeholder='Firstname' name='firstname' onChange={onChangeHandler}/>
                            <label for="floatingInput">Firstname</label>
                        </div>
                   
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" value={userData.lastname} id="floatingInput" placeholder='Lastname' name='lastname' onChange={onChangeHandler}/>
                            <label for="floatingInput">Lastname</label>
                        </div>
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" value={userData.username} id="floatingInput" placeholder='Username' name='username' onChange={onChangeHandler}/>
                            <label for="floatingInput">Username</label>
                        </div>                    
                        <div className="form-floating mb-3 mt-3">
                            <input type="email" class="form-control" value={userData.email} id="floatingInput" placeholder='Email' name='email' onChange={onChangeHandler}/>
                            <label for="floatingInput">Email</label>
                        </div>                
                        <div className="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" value={userData.password} id="floatingInput" name='password' placeholder='Password' onChange={onChangeHandler}/>
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
                            <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" onClick={onClickSaveHandler} style={{width:"100%"}}>Create Account</button>
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