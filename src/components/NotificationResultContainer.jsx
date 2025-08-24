import NotificationResultDisplay 	from './NotificationResultDisplay.jsx'
import NoFoundNotificationDispaly 	from './NoFoundNotificationDispaly.jsx'

export default function NotificationResultContainer({setActivePage, setPage, activePage,page, notificationLists}){
	if(notificationLists.length != 0){
		return (
			<NotificationResultDisplay 
				setActivePage={setActivePage} 
				setPage={setPage} 
				activePage={activePage} 
				page={page} 
				notificationLists={notificationLists}
			/>
		) 
	} else {
		return <NoFoundNotificationDispaly/>
	}
}