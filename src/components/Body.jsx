import { Routes, Route, Link } 	from 'react-router'

import Row          			from 'react-bootstrap/Row'
import Col          			from 'react-bootstrap/Col'
import Dropdown     			from 'react-bootstrap/Dropdown'
import ListGroup    			from 'react-bootstrap/ListGroup'
import Button       			from 'react-bootstrap/Button'
import Accordion    			from 'react-bootstrap/Accordion'
import Offcanvas 				from 'react-bootstrap/Offcanvas';

import homeIcon 				from '../assets/home-16.svg'
import notifIcon 				from '../assets/inbox-16.svg'
import gpsLogo 					from '../assets/gps.jpg'

import Home 					from './Home.jsx'
import NotificationReport 		from './NotificationReport.jsx'
import FutureNotification 		from './FutureNotification.jsx'

export default function Body({show, handleClose}){
	return (
        <Row>
		      <Offcanvas className="offcanvas-menu" show={show} onHide={handleClose} responsive="lg">
		        <Offcanvas.Header closeButton style={{'background-color': '#5ACFA3', 'padding-left': '0px', 'padding-top': '0px', 'padding-bottom': '0px'}}>
		          <Offcanvas.Title>
		          	<img src={gpsLogo} alt="GPS Logo"/>
		          </Offcanvas.Title>
		        </Offcanvas.Header>
		        <Offcanvas.Body style={{'padding': '0px'}}>
		            <ListGroup variant="flush">
		              <ListGroup.Item action className="listgroup-item">
		                <Button variant="link" style={{ 'padding': '0px', 'text-decoration': 'none', 'color': 'inherit'}} onClick={handleClose}>
		                  <Link className="link-home" to="/" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>
		                    <img src={homeIcon} alt="home icon"/>
		                    <span className="home-menu">Home</span>
		                  </Link> 
		                </Button>               
		              </ListGroup.Item>
		              <ListGroup.Item action className="listgroup-item">
		                <Dropdown className="dropdown-notif" drop="down">
		                  <Dropdown.Toggle id="dropdown-basic" variant="link" style={{ 'padding': '0px', 'text-decoration': 'none', 'color': 'inherit'}}>
		                    <img src={notifIcon} alt="notif icon"/>
		                    <span className="notif-menu">Notification</span>
		                  </Dropdown.Toggle>
		            
		                  <Dropdown.Menu className="dropdown-menu" style={{ 'padding': '0px' }}>
		                    <Dropdown.Item onClick={handleClose}>
		                      <Link to="/notification-report" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>Notification Report</Link>
		                    </Dropdown.Item>
		                    <Dropdown.Item onClick={handleClose}>
		                      <Link to="/notification-future" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>Future Notification</Link>
		                    </Dropdown.Item>
		                  </Dropdown.Menu>
		                </Dropdown>
		              </ListGroup.Item>
		            </ListGroup>
		        </Offcanvas.Body>
		      </Offcanvas>
          <Col className="side-menu" xs={2} sm={3}>
            <ListGroup variant="flush">
              <ListGroup.Item action className="listgroup-item">
                <Button variant="link" style={{ 'padding': '0px', 'width': '100%', 'text-decoration': 'none', 'color': 'inherit'}}>
                  <Link className="link-home" to="/" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>
                    <img src={homeIcon} alt="home icon"/>
                    <span className="home-menu">Home</span>
                  </Link> 
                </Button>               
              </ListGroup.Item>
              <ListGroup.Item action className="listgroup-item">
                <Accordion flush className="accordion-notif">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img src={notifIcon} alt="notif icon"/>
                      <span className="notif-menu">Notification</span>
                    </Accordion.Header>
                    <Accordion.Body style={{'padding': '0px'}}>
                      <ListGroup variant="flush">
                        <ListGroup.Item action style={{ 'padding': '15px 0px 15px 45px'}}>
                          <Link to="/notification-report" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>Notification Report</Link>
                        </ListGroup.Item>
                        <ListGroup.Item action style={{'padding': '15px 0px 15px 45px'}}>
                          <Link to="/notification-future" style={{ 'text-decoration': 'none', 'color': 'inherit'}}>Future Notification</Link>
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="main-content">
            <Routes>
              <Route index path="/" element={<Home/>} />
              <Route path="/notification-report" element={<NotificationReport/>} />
              <Route path="/notification-future" element={<FutureNotification/>} />
            </Routes>
          </Col>
        </Row>
	)
}