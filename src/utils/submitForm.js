export default async function submitForm(endPoint, startDate, endDate="2030-12-31"){
	const url = `http://localhost:8080${endPoint}`
	try {
		const response = await fetch(url, {
		  method: 'POST',
		  headers: {
		    "Content-Type": "application/json"
		  },
		  body: JSON.stringify({startDate, endDate})
		})

		if(!response.ok){
	  		throw new Error(`Response status: ${response.status}`);
		}

		const result = await response.json();
		return result
	} catch(error) {
		return error.message
	}
}