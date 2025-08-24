import { useState } 				from 'react'

import NotificationResultContainer 	from './NotificationResultContainer.jsx'

import submitForm					from '../utils/submitForm.js'
import getTotalPages 				from '../utils/getTotalPages.js'
import getItemsPerPage 				from '../utils/getItemsPerPage.js'

import Form         				from 'react-bootstrap/Form'
import Row          				from 'react-bootstrap/Row'
import Col          				from 'react-bootstrap/Col'
import Button       				from 'react-bootstrap/Button'

export default function NotificationReport(){
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [page, setPage] = useState(0)
	const [activePage, setActivePage] = useState(0)
	const [notificationLists, setNotificationLists] = useState([])
	const [hasSubmitForm, setHasSubmitForm] = useState(false)
  	const totalItemsPerPage = 2

  	async function handleSubmit(event){
	    event.preventDefault()
	    event.stopPropagation()

	    try{
	      let result = await submitForm("/api/notification/report",startDate, endDate)
	      if(result.length != 0){
			const totalPages = getTotalPages(result.length,totalItemsPerPage)
	      	const itemsPerPage = getItemsPerPage(result,totalPages,totalItemsPerPage )
	      	setNotificationLists(itemsPerPage)
	      } else {
	      	setNotificationLists([])
	      }
	      setHasSubmitForm(true)
	      console.log('sukses')
	    } catch(err) {
	      console.log(err)
	      console.log('gagal')
	    }
  	}

 	return (
	    <div style={{ padding: 20}}>
	      <h2>Notification Report View</h2>
	      <Form noValidate onSubmit={handleSubmit}>
	        <Row>
	          <Form.Group as={Col} md="6" className="mb-3" controlId="startDate">
	            <Form.Label>Start Date</Form.Label>
	            <Form.Control 
	              type="date"
	              name="start-date"
	              value={startDate}
	              onChange={(e) => setStartDate(e.target.value)}
	              min="2018-01-01"
	              max="2030-12-31">
	            </Form.Control>
	          </Form.Group>

	          <Form.Group as={Col} md="6" className="mb-3" controlId="endDate">
	            <Form.Label>End Date</Form.Label>
	            <Form.Control 
	              type="date"
	              name="end-date"
	              value={endDate}
	              onChange={(e) => setEndDate(e.target.value)}
	              min={startDate}
	              max="2030-12-31">
	            </Form.Control>
	          </Form.Group>
	        </Row>
	        <Button 
	          variant="outline-secondary"
	          type="submit">
	            Submit
	        </Button>
	      </Form>
	      {
	      	hasSubmitForm == true && (
	      	<NotificationResultContainer 
	  			activePage={activePage} 
	  			page={page} 
	  			notificationLists={notificationLists}
	  			setPage={setPage}
	  			setActivePage={setActivePage}
	      	/>
	      	)
	      }
	    </div>
	)
}