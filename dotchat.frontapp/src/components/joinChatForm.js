import { Button, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';

const JoinChatForm = ({ joinChatRoom }) => {

  const [username, setUsername] = useState();
  const [chatname, setChatname] = useState();
  return <Form onSubmit={e => {
    e.preventDefault();
    joinChatRoom({ username, chatname });
  }}>
    <Row class="" >
      <Col sm={12} className="bg-green">
        <Form.Group>
          <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <Form.Control type="text" placeholder="Chatname" onChange={e => setChatname(e.target.value)} />
        </Form.Group>


      </Col>
      <Col sm={12}>
        <hr />
        <Button variant="success" type="submit">Join the Chat   </Button>
      </Col>
    </Row>

  </Form>

}

export default JoinChatForm;





