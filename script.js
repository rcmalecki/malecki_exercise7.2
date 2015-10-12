function changeDiv() {
	document.getElementById('emerson').onclick = function() {
			if ( document.getElementById('emerson').className === 'style') {
				 document.getElementById('emerson').className = '';
			} else {
				document.getElementById('emerson').className = 'style';
			}
	};
}

window.onclick = function() {
		changeDiv();
}
