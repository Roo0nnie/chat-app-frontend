import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Chat.css'

function Chat() {
    document.getElementById('loginAccount').innerText = "Logout";

    return(
        <>
            <div classNane="chat" style={{paddingTop:"6em"}}>
                <div className='container'>
                    <h1>Hello Chat</h1>
                    <div className='left-side-chat'>
                        <h2>Chats</h2>
                    </div>
                    <div className='right-side-chat'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chat;