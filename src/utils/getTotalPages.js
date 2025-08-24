export default function getTotalPages(totalNumberNotifications, totalItemsPerPage){
	if((totalNumberNotifications % totalItemsPerPage) == 0){
		return totalNumberNotifications / totalItemsPerPage
	} else {
		return Math.floor((totalNumberNotifications / totalItemsPerPage) + 1)
	}
}