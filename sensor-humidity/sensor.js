class Test  {
	constructor(options) {
		this.value = 85;
	}
	configure(options) {}
	sample() {
		this.value-=15;
		if (this.value < 10)
			this.value = 85;
		return {temperature: this.value};
	}
}

export default Test;
