function findLinks(sitesJSON) {
	let modalContent = [];

	for (oneColumn in sitesJSON) {
		for (fav of sitesJSON[oneColumn].content) {
			if (typeof fav.link == 'object') {
				modalContent.push(fav);

				for (link of fav.link) {
					if (typeof link.link == 'object') {
						modalContent.push(link);
					}
				}
			}
		}
	}

	return modalContent;
}

const templateBox = Handlebars.compile(
	document.getElementById('boxAll').innerHTML
);
document.getElementById('boxAll').innerHTML = templateBox({
	sitesJSON: sitesJSON,
});

const templateModal = Handlebars.compile(
	document.getElementById('modalAll').innerHTML
);
document.getElementById('modalAll').innerHTML = templateModal({
	content: findLinks(sitesJSON),
});

var toggleBol = true;

function toggleTheme() {
	var elements = document.getElementsByClassName('toggleTheme');

	toggleBol = !toggleBol;

	const toggleValues = toggleBol ? ['dark', 'light'] : ['light', 'dark'];

	for (element of elements) {
		element.classList.add(toggleValues[0]);
		element.classList.remove(toggleValues[1]);
	}
}

let dateNow = new Date()
dateNow = dateNow.toString()

document.getElementById('datetimeSpan').innerHTML = dateNow.substr(16, 2) + 'h' + dateNow.substr(19, 2) + ' ' + dateNow.substr(8, 2) + '/' + dateNow.substr(4, 3)

setInterval(() => {
	let dateNow = new Date()
	dateNow = dateNow.toString()

	document.getElementById('datetimeSpan').innerHTML = dateNow.substr(16, 2) + 'h' + dateNow.substr(19, 2) + ' ' + dateNow.substr(8, 2) + '/' + dateNow.substr(4, 3)

}, 30000);
