import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Chat() {
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


    return(
        <>
            <div classnamenameNane="chat" style={{paddingTop:"6em"}}>
                <div classname="container">
                <div classname="row clearfix">
                    <div classnamenameNane="col-lg-12">
                        <div classname="card chat-app">
                            <div id="plist" classname="people-list">
                                <div classname="input-group">
                                    <div classname="input-group-prepend">
                                        <span classname="input-group-text"><i classname="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" classname="form-control" placeholder="Search..."/>
                                </div>
                                <ul classname="list-unstyled chat-list mt-2 mb-0">
                                    <li classname="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Vincent Porter</div>
                                            <div classname="status"> <i classname="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                                        </div>
                                    </li>
                                    <li classname="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Aiden Chavez</div>
                                            <div classname="status"> <i classname="fa fa-circle online"></i> online </div>
                                        </div>
                                    </li>
                                    <li classname="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Mike Thomas</div>
                                            <div classname="status"> <i classname="fa fa-circle online"></i> online </div>
                                        </div>
                                    </li>                                    
                                    <li classname="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Christian Kelly</div>
                                            <div classname="status"> <i classname="fa fa-circle offline"></i> left 10 hours ago </div>
                                        </div>
                                    </li>
                                    <li classname="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Monica Ward</div>
                                            <div classname="status"> <i classname="fa fa-circle online"></i> online </div>
                                        </div>
                                    </li>
                                    <li classname="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                        <div classname="about">
                                            <div classname="name">Dean Henry</div>
                                            <div classname="status"> <i classname="fa fa-circle offline"></i> offline since Oct 28 </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div classname="chat">
                                <div classname="chat-header clearfix">
                                    <div classname="row">
                                        <div classname="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                            </a>
                                            <div classname="chat-about">
                                                <h6 classname="m-b-0">Aiden Chavez</h6>
                                                <small>Last seen: 2 hours ago</small>
                                            </div>
                                        </div>
                                        <div classname="col-lg-6 hidden-sm text-right">
                                            <a href="javascript:void(0);" classname="btn btn-outline-secondary"><i classname="fa fa-camera"></i></a>
                                            <a href="javascript:void(0);" classname="btn btn-outline-primary"><i classname="fa fa-image"></i></a>
                                            <a href="javascript:void(0);" classname="btn btn-outline-info"><i classname="fa fa-cogs"></i></a>
                                            <a href="javascript:void(0);" classname="btn btn-outline-warning"><i classname="fa fa-question"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div classname="chat-history">
                                    <ul classname="m-b-0">
                                        <li classname="clearfix">
                                            <div classname="message-data text-right">
                                                <span classname="message-data-time">10:10 AM, Today</span>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                            </div>
                                            <div classname="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                        </li>
                                        <li classname="clearfix">
                                            <div classname="message-data">
                                                <span classname="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div classname="message my-message">Are we meeting today?</div>                                    
                                        </li>                               
                                        <li classname="clearfix">
                                            <div classname="message-data">
                                                <span classname="message-data-time">10:15 AM, Today</span>
                                            </div>
                                            <div classname="message my-message">Project has been already finished and I have results to show you.</div>
                                        </li>
                                    </ul>
                                </div>
                                <div classname="chat-message clearfix">
                                    <div classname="input-group mb-0">
                                        <div classname="input-group-prepend">
                                            <span classname="input-group-text"><i classname="fa fa-send"></i></span>
                                        </div>
                                        <input type="text" classname="form-control" placeholder="Enter text here..."/>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Chat;