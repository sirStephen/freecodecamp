const notes = [{
	title: 'My next trip.',
	body: 'I would like to go to Spain.'
}, {
	title: 'Habbits to work on.',
	body: 'Exercise. Eating a bit better.'
}, {
	title: 'Office modification',
	body: 'Get a new seat'
}];

const sortNotes = (notes) => {
	notes.sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1
		} else if (b.title.toLowerCase() < a.title.toLowerCase()) {
			return 1
		} else {
			return 0
		}
	})
}

const findNotes = (notes, searchText) => {
	return notes.filter((note, index) => {
		const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
		const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
		return isTitleMatch || isBodyMatch
	})
}

// const searchNotes = findNotes(notes, 'eating')
// console.log(searchNotes);

sortNotes(notes);
console.log(notes);

