let restaurant = {
	name: 'ASO',
	guestCapacity: 75,
	guessCount: 0,
	checkAvailability: function (partySize) {
		let seatLeft = this.guestCapacity - this.guessCount;
		return partySize <= seatLeft;
	},
	seatParty: function (partySize) {
		this.guessCount = this.guessCount + partySize;
	},
	removeParty: function (partySize) {
		this.guessCount = this.guessCount - partySize;
	}
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
