import { Col, Row } from "react-bootstrap";
import MessageContainter from "./messagecontainer.js"
import SendMessageForm from "./sendmessage.js";

const ChatRoom = ({ messages, sendMessage }) => {

  // #TODO: detect user scroll
  // const detectUserScroll ( () => {

  // });

  return <div className="container-fluid d-flex h-55 ">
    <div className="col">
      <Row className="py-5" onScroll={e => console.log('onScroll')}>
        <div className="overflow-auto " style={{ maxHeight: '550px' }} >
          <MessageContainter messages={messages} />
        </div>
      </Row>
      <Row className="pd-5">
        <SendMessageForm sendMessage={sendMessage} />
      </Row>

    </div>
  </div>

}

export default ChatRoom
