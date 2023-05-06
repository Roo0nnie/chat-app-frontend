import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import imgPhone from './pictureConvo.svg';
import ApiService from './ApiService';
import SignUp from './SignUp';
import Login from './Login';

const Home = () => {

    const [list, setList] = useState([]);
    const [count, setcount] = useState(0);

    const getUserList = () =>{
        ApiService('/usercds', null, (data)=>{
            setList(data);
        });

        ApiService('/users/count/all', null, (data)=>{
            setcount(data.count);
        });
    }

    useEffect(()=>{
        getUserList();
    },[]);

    const [UserDetails, setUserDetails] = useState({});

    const onCreateAccount = () =>{
        setUserDetails({id:0});
    }

    const onUserSaveHandler = (formData) =>{
        ApiService('/users/' + formData.id, formData, (data)=>{
            getUserList();
        }, formData.id === 0 ? "POST" : "PUT");
    }

   

    const onEditHandler = (data) =>{
        ApiService('/users/' + data.id, null, (data)=>{
            setUserDetails(data);
        });
    }



    const onStudentSaveHandler = (formData) =>{
        ApiService('/students/' + formData.id, formData, (data)=>{
            getUserList();
        }, formData.id === 0 ? "POST" : "PUT");
    }
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
                                        <button type="button" className="btn btn-primary fw-bold text-white mt-4 mx-4" onClick={onCreateAccount} data-bs-toggle="modal" data-bs-target="#signup">Sign up now!!</button>               
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
                            <h4>Sign up ({count})</h4>
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <SignUp data={UserDetails} onSaveHandler={onUserSaveHandler} />
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
                            <Login />
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