const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = fruit.filter(function (el) {
		return el.toLowerCase().includes(str.toLowerCase());

	})
	const newResult = results.slice(0,7);
	return newResult;
}


function searchHandler(e) {
	//seting time out so function has enough time to catch input
	setTimeout(function () {
		const newList = search(input.value);
		console.log(input.value);
		showSuggestions(newList);
	},10)


	

}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	for (let el of results) {
		createSuggestions(el);
	}
	
	
}

function useSuggestion(e) {
	// TODO
}

function createSuggestions(resultEl) {
	const li = document.createElement('li');
	li.innerText = resultEl;
	suggestions.appendChild(li);
}

input.addEventListener('keydown', searchHandler);
suggestions.addEventListener('click', useSuggestion);