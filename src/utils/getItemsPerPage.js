export default function getItemsPerPage(notifications,totalPages,totalItemsPerPage){
	let pages = []
	let itemsPerPage = []
	let counter = 0;
	for(let page = 0; page < totalPages; page++){
	    for(let i = 0; i < totalItemsPerPage; i++){
	      itemsPerPage.push(notifications[counter])
	      counter++
	      if(counter == notifications.length) break; 
	    }
	    pages.push(
	      {
	        index_page: page,
	        data: itemsPerPage
	      }
	    )
	    itemsPerPage = []
	}
	return pages;
}