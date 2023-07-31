export const baseUrl = 'http://localhost:5050/api';

export const postRequest = async (url, body) => {
	const response = await fetch(`${baseUrl}${url}`, {
		method: 'POST',
		headers: {
			"Content-Type": 'application/json',
		},
		body: JSON.stringify(body)
	});

	console.log(response);

	const data = await response.json();

	if(!response.ok){
		return {
			error: true,
			message: data.message
		}
	}

	return data;
};