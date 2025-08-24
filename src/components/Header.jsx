import gpsLogo 		from '../assets/gps.jpg'
import menuSideIcon from '../assets/three-bars-16.svg'

import Row          from 'react-bootstrap/Row'
import Col          from 'react-bootstrap/Col'
import Button       from 'react-bootstrap/Button'


export default function Header({handleShow}){
	return (
		<Row>
          <Col className="header">
          	<img src={gpsLogo} alt="GPS Logo"/>
          	<Button className="menu-side-btn" variant="link" onClick={handleShow}>
          		<img src={menuSideIcon} alt="menu side icon"/>
          	</Button>
          </Col>
        </Row>
	)
}