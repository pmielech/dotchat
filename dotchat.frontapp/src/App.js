import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lobby from './components/lobby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/chatroom';
import Message from './models/message.js';
import getTime from './utilities/utilities.js';


function App() {
  const [conn, setConnection] = useState();
  const [messages, setMess] = useState([]);

  const joinChatRoom = async ({ username, chatname }) => {
    try {
      // start connection
      const conn = new HubConnectionBuilder()
        .withUrl('http://localhost:5010/chat')
        .configureLogging(LogLevel.Information).build();

      conn.on("JoinGroup", (username, msg) => {
        const [formatted_time, timestamp] = getTime();
        const mess = new Message(username, msg, timestamp, formatted_time);
        setMess(messages => [...messages, mess]);
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        const [formatted_time, timestamp] = getTime();
        const mess = new Message(username, msg, timestamp, formatted_time);
        setMess(messages => [...messages, mess]);
      })

      await conn.start();
      await conn.invoke("JoinGroup", { username, chatname });


      setConnection(conn);
    } catch (e) {
      console.log("Exception:", e);

    }
  }

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <div >
      <main>
        <Container>
          <Row class="px-5 my-5">
            <Col sm='12'>
              <h1 className='font-weight-bold'>Welcome to dotchat!</h1>
            </Col>
          </Row>
          {!conn
            ? <Lobby joinChatRoom={joinChatRoom} />
            : <ChatRoom messages={messages} sendMessage={sendMessage} ></ChatRoom>

          }

        </Container>
      </main>
    </div>

  );
}

export default App;
