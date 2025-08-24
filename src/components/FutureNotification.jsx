import { useState } 				from 'react'

import NotificationResultContainer 	from './NotificationResultContainer.jsx'

import submitForm					from '../utils/submitForm.js'
import getTotalPages 				from '../utils/getTotalPages.js'
import getItemsPerPage 				from '../utils/getItemsPerPage.js'

import Form         				from 'react-bootstrap/Form'
import Row          				from 'react-bootstrap/Row'
import Col          				from 'react-bootstrap/Col'
import Button       				from 'react-bootstrap/Button'

export default function FutureNotification(){
	const today = new Date()
	today.setDate(today.getDate() + 1)
	const tomorrow = new Intl.DateTimeFormat('en-CA').format(today)

	const [startDate, setStartDate] = useState(tomorrow)
	const [page, setPage] = useState(0)
	const [activePage, setActivePage] = useState(0)
	const [notificationLists, setNotificationLists] = useState([])
	const [hasSubmitForm, setHasSubmitForm] = useState(false)
  	const totalItemsPerPage = 2

  	async function handleSubmit(event){
	    event.preventDefault()
	    event.stopPropagation()

	    try{
	      let result = await submitForm("/api/notification/future", startDate)
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
	      console.log('gagal')
	    }
  	}

 	return (
	    <div style={{ padding: 20}}>
	      <h2>Future Notification Report View</h2>
	      <Form noValidate onSubmit={handleSubmit}>
	        <Row>
	          <Form.Group as={Col} md="6" className="mb-3" controlId="startDate">
	            <Form.Label>Choose Date</Form.Label>
	            <Form.Control 
	              type="date"
	              name="start-date"
	              value={startDate}
	              onChange={(e) => setStartDate(e.target.value)}
	              min={tomorrow}
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