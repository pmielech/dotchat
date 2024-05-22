import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import JoinChatForm from "./joinChatForm";
import connectedImage from "../assets/lobby/connected.svg"
const Lobby = ({ joinChatRoom }) => {

  return <div id="lobby_screen" className="container-fluid main_container d-flex h-55">
    <div className="row w-100 py-5  h-95">
      <div className="col-lg-6 px-5 h-20 d-flex align-items-center justify-content-center" >
        <div className="allign-middle border border-4 border-primary px-5 py-5 rounded rounded-5 ">
          <JoinChatForm joinChatRoom={joinChatRoom}></JoinChatForm>
        </div>
      </div>
      <div className="col-lg-6  h-20 d-flex align-items-center justify-content-center">
        <img className="allign-middle my-5" src={connectedImage} style={{ height: '75%', width: "75%" }}>


        </img>
      </div>
    </div>

  </div>

}

export default Lobby;


