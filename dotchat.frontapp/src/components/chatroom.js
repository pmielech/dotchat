import { Col, Row } from "react-bootstrap";
import MessageContainter from "./messagecontainer.js"
import SendMessageForm from "./sendmessage.js";

const ChatRoom = ({ messages, sendMessage, chatname }) => <div>
  <Row className="py-5">
    <div className="overflow-auto " style={{ maxHeight: '550px' }} >
      <MessageContainter messages={messages} />
    </div>
  </Row>
  <Row className="pd-5">
    <SendMessageForm sendMessage={sendMessage} />
  </Row>
</div>


export default ChatRoom
