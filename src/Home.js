import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import imgPhone from './pictureConvo.svg';
import Registration from './Registration';

const Home = () => {
    return (
        <>
                <section className="background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 mb-12 mb-md-0">
                                <div className="left">
                                    <h1 className="fw-bold fs-1 text-primary">Connect With Us!</h1>
                                    <h2 className="fw-bold fs-3">Any Time,</h2>
                                    <h2 className="fw-bold fs-3">Anywhere</h2>
                                    <div className="card mt-4" style={{width:"18rem"}}>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">RJchat</h5>
                                            <p className="card-text">
                                                Access a fast, convenient and collaborated communication with each other.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="click">
                                        <button type="button" className="btn bg-primary fw-bold text-white mt-4 mx-4" data-bs-toggle="modal" data-bs-target="#signup">Sign up now!!</button>
                                                          
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="right">
                                <img src={imgPhone} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div id="signup" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h3 className='fw-bold'>Sign Up</h3>
                                </div>
                            </div>
                            <form>
                            <div className="form-floating mb-3 mt-3">
                                    <input type="text"  class="form-control" id="floatingInput" placeholder='Firstname'/>
                                    <label for="floatingInput">Firstname</label>
                               </div>
                               <div className="form-floating mb-3 mt-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder='Lastname'/>
                                    <label for="floatingInput">Lastname</label>
                               </div>
                               <div className="form-floating mb-3 mt-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder='Username'/>
                                    <label for="floatingInput">Username</label>
                               </div>
                               <div className="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingInput" placeholder='Password'/>
                                    <label for="floatingInput">Password</label>
                               </div>
                               <div className="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingInput" placeholder='Confirm Password'/>
                                    <label for="floatingInput">Confirm Password</label>
                               </div>
                               <div class="checkMark">
                                    <input class="form-check-input check" type="checkbox"/>
                                    <label class="form-check-label check fw-bold mx-2" for="remember-me">
                                        Agree to the <span><a href="#" style={{textDecoration:"none"}}>term</a></span> and <span><a href="#"  style={{textDecoration:"none"}}> condition</a></span>
                                    </label>
                                </div>
                                    <div class="row mt-3">
                                        <div className="col-sm-12">
                                            <button className="btn bg-primary text-white fw-bold mt-3" style={{width:"100%"}} onClick={<Registration />}>Create Account</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <label for="forgot-Pass" class="fw-bold">Don't have a account?<span><a href="#"  style={{textDecoration:"none"}}> Sign up</a></span></label> 
                        </div>
                    </div>
                </div>
                </div>

                <div id="login" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h3 className='fw-bold'>Log In</h3>
                                </div>
                            </div>
                            <form>
                            <div className="form-floating mb-3 mt-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder='Username'/>
                                    <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingInput" placeholder='Password'/>
                                    <label for="floatingInput">Password</label>
                            </div>
                            <div class="checkMark">
                                    <input class="form-check-input check" type="checkbox"/>
                                    <label class="form-check-label check fw-bold mx-2" for="remember-me">
                                        Remember Me
                                    </label>
                                </div>
                                    <div class="row mt-3">
                                        <div className="col-sm-12">
                                            <button className="btn bg-primary text-white fw-bold mt-3" data-bs-dismiss="modal" style={{width:"100%"}}>Login</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <label for="forgot-Pass" class="fw-bold"><span><a href="#"  style={{textDecoration:"none"}}> Forgot </a></span> your password?</label> 
                        </div>
                    </div>
                </div>
                </div>    
        </>
    )
}
export default Home;