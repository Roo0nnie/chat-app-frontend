import './App.css'
import { Link } from "react-router-dom";

const menus = [{label:"Home", path:'/'},
                {label:"Features", path:'/Features'},
                {label:"About", path:'/About'},
                {label:"Contact", path:'/Contact'}]

function Header({menuList}){
    return (
        <>
            <div className="Header">
                <div className='container'>
                    <div className='navigation-top d-flex justify-content-between'>
                        <div className="logo mt-3">
                            <a href="#"><span className="fw-bold text-dark fs-2">RJ</span><span className="fs-4 fw-bold text-dark">chat</span></a>
                        </div>
                        <nav>
                            <ul className="nav-link">
                                {menus.map((item)=><li>
                                    <Link to={item.path}>{item.label}</Link>
                                </li>)}
                                <li><button type='button' className='btn bg-primary btn-login text-white' data-bs-toggle="modal" data-bs-target="#login">Login</button></li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;