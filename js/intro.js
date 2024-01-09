async function downloadIntro() {
	let response = await fetch("contains/Introduce.txt");
		
	
	// read response stream as text
	let text_data = await response.text();

	return text_data.split('|');
}