async function downloadProduces() {
	let response = await fetch("contains/Produces.txt");
		
	
	// read response stream as text
	let text_data = await response.text();

	return text_data.split('|');
}