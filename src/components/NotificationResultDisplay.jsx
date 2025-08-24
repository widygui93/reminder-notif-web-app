import Table		from 'react-bootstrap/Table'
import Pagination	from 'react-bootstrap/Pagination'

export default function NotificationResultDisplay({setActivePage, setPage, activePage, page, notificationLists}){
	return (
		<>
			<div className="table-responsive">
			  <Table striped bordered hover>
			    <thead>
			      <tr>
			        <th>No</th>
			        <th>Payment Date</th>
			        <th>Notification Date</th>
			        <th>Customer Name</th>
			        <th>Customer Phone</th>
			        <th>Customer Email</th>
			      </tr>
			    </thead>
			    <tbody>
			      {
			        notificationLists[page].data.map((data_notif, index) => {
			          return (
			            <tr key={index + '-head-col'}>
			              <td key={index + '-no-col'}>{index + 1}</td>
			              <td key={index + '-pay-date-col'}>{data_notif.payment_date}</td>
			              <td key={index + '-notif-date-col'}>{data_notif.notification_date}</td>
			              <td key={index + '-cust-name-col'}>{data_notif.customer_name}</td>
			              <td key={index + '-cust-phone-col'}>{data_notif.customer_phone}</td>
			              <td key={index + '-cust-email-col'}>{data_notif.customer_email}</td>
			            </tr>
			          )
			        })
			      }
			    </tbody>
			  </Table>
			</div>
			<Pagination>
			  {
			    notificationLists.map(notificationList => {
			      return (
			        <Pagination.Item
			          key={notificationList.index_page}
			          active={notificationList.index_page === activePage}
			          onClick={() => {
			              setPage(notificationList.index_page)
			              setActivePage(notificationList.index_page)
			          }}
			        >
			          {notificationList.index_page + 1}
			        </Pagination.Item>
			      )
			    })
			  }
			</Pagination>
		</>
	)
}