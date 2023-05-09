import 'bootstrap/dist/css/bootstrap.min.css';
import imgPhone1 from './features-side-image.png'
import imgPhone2 from './feature-side-image3.png'
import imgPhone3 from './pictureConvo.svg'
import imgPhone4 from './Ronie.jpg'
import './App.css'

function About() {
    return(
        <>
            <section className="features-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 mb-12 mb-md-0">
                                <div className="features-left">
                                    <h1 className="fw-bold text-primary" style={{fontSize:"3.5em"}}>We Offers</h1>
                                    <h2 className="fw-bold fs-1">ways to communicate</h2>
                                    <h2 className="fw-bold fs-1">through video, chat and emoji.</h2>
                                    <div className="card mt-4" style={{width:"18rem"}}> 
                                    </div>
                                    <p>Bring your conversations to life with the help of our RJchat.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="features-image">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src={imgPhone1} className="d-block w-100"></img>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={imgPhone2} className="d-block w-100"></img>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={imgPhone3} className="d-block w-100"></img>
                                        </div>
                                        
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className='deveper-background'>
                <div className='container'>
                    <div className='developer-format'>
                        <div className="title">
                            <h1>Developer || <span className='text-dark'>Owner</span></h1>
                        </div>
                        <div className='developer-image'>
                            <div className='image'>
                                <img src={imgPhone4} class="rounded-circle img-fluid shadow-1" alt="User1" />
                            </div>
                            <div className='image'>
                                <img src={imgPhone4} class="rounded-circle img-fluid shadow-1" alt="User1" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default About;