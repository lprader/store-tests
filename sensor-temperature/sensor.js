class Test  {
	constructor(options) {
		this.value = 70;
		this.change = 3;
	}
	configure(options) {}
	sample() {
		this.value += this.change;
		if (this.value > 85)
			this.change = -1
		else if (this.value < 70)
			this.change = 3
		return {temperature: this.value};
	}
}
export default Test;