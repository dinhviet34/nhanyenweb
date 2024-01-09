async function downloadAddress() {
	let response = await fetch("contains/Address.txt");
		
	
	// read response stream as text
	let text_data = await response.text();

	return text_data.split('|');
}