import 'bootstrap/dist/css/bootstrap.min.css';
import imgPhone1 from './features-side-image.png'
import imgPhone2 from './feature-side-image3.png'
import './App.css'

function Features() {
    return(
        <>
            <section className="features-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 mb-12 mb-md-0">
                                <div className="features-left">
                                    <h1 className="fw-bold text-primary" style={{fontSize:"3.5em"}}>More Ways</h1>
                                    <h2 className="fw-bold fs-1">to stay</h2>
                                    <h2 className="fw-bold fs-1">connected</h2>
                                    <div className="card mt-4" style={{width:"18rem"}}> 
                                    </div>
                                    <p>RJchat has everything you need to feel closer to your favourite people.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="features-image">
                                <img src={imgPhone1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="features-background-another">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 mb-12 mb-md-0">
                            <div className="features-image">
                                    <img src={imgPhone2} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="features-left">
                                    <h1 className="fw-bold text-white" style={{fontSize:"3.5em"}}>Express Your</h1>
                                    <h2 className="fw-bold fs-1">toughts and</h2>
                                    <h2 className="fw-bold fs-1">enjoy</h2>
                                    <div className="card mt-4" style={{width:"18rem"}}> 
                                    </div>
                                    <p className='text-white'>Take everything to get to know each other.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Features;