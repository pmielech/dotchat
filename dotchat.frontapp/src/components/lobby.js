import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import {joinChatRoom} from "../App.js"

const Lobby = ({ joinChatRoom }) => {

    const[username, setUsername] = useState();
    const[chatname, setChatname] = useState();
    return <Form onSubmit={ e => {
        e.preventDefault();
        joinChatRoom({username, chatname});
    }}>
        <Row class="px-5" >
            <Col sm={12}>
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

export default Lobby;


