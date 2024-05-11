
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const MessageContainter = ({ messages }) => {
  return <div>
    {
      messages.map((single_msg, index) =>
        <ListGroup>
          <ListGroupItem key={index}>
            <div className='d-flex flex-column '>

              <div class="d-flex align-items-start justify-content-start ">
                <div className='py-1 fw-bold' >{single_msg.user}</div>
                <div className='py-1 mx-2 opacity-25 fw-normal '>{single_msg.formattedTime}</div>
              </div>
              <div className='fw-medium fs-5 opacity-65' >{single_msg.msg}</div>
            </div>
          </ListGroupItem>
        </ListGroup>
      )


    }
  </div>
}

export default MessageContainter
