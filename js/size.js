async function downloadSize() {
	let response = await fetch("./contains/Size.txt");
		
	
	// read response stream as text
	let text_data = await response.text();
   
	return text_data.split('|');
}