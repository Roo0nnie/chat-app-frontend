import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import imgPhone from './pictureConvo.svg';
import ApiService from './ApiService';
import SignUp from './SignUp';
import Login from './Login';

const Home = () => {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getUserList = () =>{
        ApiService('/users', null, (data)=>{
            setList(data);
        });

        ApiService('/users/count/all', null, (data)=>{
            setCount(data.count)
        });
    }

    useEffect(()=>{
        getUserList();
    },[]);

    const [userDetails, setUserDetails] = useState({});

    const onClickaddAccount = () =>{
        setUserDetails({id:0});
    }

    const onStudentSaveHandler = (formData) =>{
        ApiService('/users/registration', formData, (data)=>{
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
                                <h1 className="fw-bold text-primary" style={{fontSize:"3.5em"}}>Connect With Us!</h1>
                                <h2 className="fw-bold fs-1">Any Time,</h2>
                                <h2 className="fw-bold fs-1">Anywhere</h2>
                                <div className="card mt-4" style={{width:"18rem"}}>
                                    
                                </div>
                                <div className="click">
                                <button className="btn btn-primary" onClick={onClickaddAccount} data-bs-toggle="modal" data-bs-target="#myPopupWin">Sign up</button>               
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
                
            <div id="myPopupWin" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <SignUp data={userDetails} onSaveHandler={onStudentSaveHandler}/>
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