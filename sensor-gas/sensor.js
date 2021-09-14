class Test  {
	constructor(options) {
		this.value = 250;
	}
	configure(options) {}
	sample() {
		this.value += 20;
		if (this.value > 550)
			this.value = 250;
		return {ppm: this.value};
	}
}

export default Test;
