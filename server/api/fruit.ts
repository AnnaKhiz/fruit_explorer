import { defineEventHandler, readBody, setHeader } from 'h3';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Можно добавить дополнительные заголовки, если требуется
	setHeader(event, 'Access-Control-Allow-Origin', '*');

	const response = await fetch('https://www.fruityvice.com/api/fruit/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const jsonResponse = await response.json();

	return jsonResponse;
});
