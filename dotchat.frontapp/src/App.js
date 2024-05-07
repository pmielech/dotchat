import { Col, Container, Row } from 'react-bootstrap';
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lobby from './components/lobby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/chatroom';

function App() {
  const[conn, setConnection] = useState();
  const[messages, setMess] = useState([]);


  const joinChatRoom = async ({username, chatname}) => {
    try {
      // start connection
      // console.log("chatname: ", chatname)
      const conn = new HubConnectionBuilder()
                .withUrl('http://localhost:5010/chat')
                .configureLogging(LogLevel.Information).build();

      conn.on("JoinGroup", (username, msg) => {
        console.log("msg: ", msg)
       
        setMess(messages => [...messages, {username, msg}]);
      });
      // console.log("append message")
      
      conn.on("ReceiveSpecificMessage", (username, msg) => {
        //appending the mess
          console.log(`${username}: ${msg}`);

          setMess(messages => [...messages, {username, msg}]);
      })

      await conn.start();
      // console.log(chatname)
      await conn.invoke("JoinGroup", {username, chatname});


      setConnection(conn);
    } catch(e){
      console.log("Exception:", e);

    }
  }

  return (
    <div >
      <main>
        <Container>
          <Row class="px-5 my-5">
            <Col sm='12'>
              <h1 className='font-weight-bold'>Welcome to dotchat!</h1>
             </Col>
          </Row>
          { !conn
            ? <Lobby joinChatRoom={joinChatRoom}/>
            : <ChatRoom messages={messages}></ChatRoom>

          }
          
        </Container>

      </main>
    </div>
  );
}

export default App;
