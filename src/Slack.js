import * as React from 'react';
import myName from './img/myname.jpeg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

class Slack extends React.Component {

    render(){

      const message = 'Authorization: Bearer JWT \nText: Hi! My name is Kaylee!'

      function sendMessage(){
        alert(message);
      };
    
      function checkServer(){
        const url = new URLSearchParams(`https://diva-challenge-ul4cm77qva-uc.a.run.app`);
        const token = url.get('/login');
        alert("Should be the JWT but that's coming as: " + token);
      };

      return (
        <Container fluid style={{height: '100%', backgroundColor:'#FF69B4'}}>

            <Row>
                {/* left column */}
                <Col sm={4} style={{backgroundColor:'white'}}>
                    {/* title */}
                    <Row style={{height: '25%'}}>
                        <Image fluid src={myName} alt='Kaylee Horn | khorn2002@hotmail.com'/>
                    </Row>
                    {/* special note */}
                    <Row style={{height: '75%', paddingTop: '20%', textAlign: 'center'}}>
                      <p>
                        While I could not get this project to work, I do have a couple other examples of where I connected to an API available on my
                        <a href="https://github.com/kaylee-horn/Food-For-Fuel-API.git"> GitHub</a>
                        .
                      </p>
                    </Row>
                </Col>

                {/* right column */}
                <Col sm={7} style={{height: '100%', paddingTop:'2%',paddingBottom:'2%'}}>
                    <Row style={{ height: '100%'}}>
                        <Col sm='auto' lg={8}>
                          {/* A button to check the status of the server. */}
                            <Row style={{ height:'18%', paddingBottom:'10%'}}>
                                <div id='check'>
                                  <Button onClick={checkServer}  style={{backgroundColor:'#002D62', outline:'none'}}> Check Server </Button>
                                </div>
                            </Row>

                            {/* A text field that contains a message. */}
                            <Row style={{ height:'50%', paddingTop:'4%'}}>
                              <Col sm='auto'>
                                <Form>
                                  <Form.Group controlId="messageArea">
                                    <Form.Control placeholder='Type your message here!' rows={3} />
                                  </Form.Group>
                                </Form>
                              </Col>

                              {/* A button to send a message to our engineering team, using the text from the above text field. */}
                              <Col sm='auto'>
                                <div id='send'>
                                  <Button onClick={sendMessage} style={{backgroundColor:'#002D62', outline:'none'}}> Send </Button>
                                </div>
                              </Col>
                      
                            </Row>

                            {/* An area to display the response status from the last action. */}
                            <Row style={{ height: '18%'}}>
                              <div id='recieve'>
                              <Form.Control plaintext readOnly defaultValue="Responses will show here." />
                              </div>
                            </Row>
                        </Col>

                    </Row>

                    <Row style={{height:'10%',paddingTop:'3%'}}>
            {/* A special note in the footer*/}
            <p> 
              
            </p>
          </Row>
                </Col>
            </Row>
          
        </Container>

      )
    }
  }

export default Slack;