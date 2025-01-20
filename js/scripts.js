function findLinks(sitesJSON) {
	let modalContent = [];

	for (oneColumn in sitesJSON) {
		for (fav of sitesJSON[oneColumn].content) {
			if (typeof fav.link == 'object') {
				fav.parentNick = fav.nick;
				fav.parentName = "Back";
				modalContent.push(fav);

				for (link of fav.link) {
					if (typeof link.link == 'object') {
						link.parentNick = fav.nick;
						link.parentName = fav.name;
						modalContent.push(link);

						for (link2 of link.link) {
							if (typeof link2.link == 'object') {
								link2.parentNick = link.nick;
								link2.parentName = link.name;
								modalContent.push(link2);
							}
						}
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


setTime()

setInterval(setTime, 60000);

function setTime() {
	const d = new Date();	
	document.getElementById('time').innerHTML = adjust_num(d.getHours()) + 'h' + adjust_num(d.getMinutes()) + ' <span class="font-merri">|</span> ' + adjust_num(d.getDate()) + '<span class="font-merri">/</span>' + adjust_num(d.getMonth() + 1)
}

function adjust_num(num){
	return num < 10 ? '0' + num : num;
}