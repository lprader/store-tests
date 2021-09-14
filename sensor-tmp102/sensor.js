import TMP102 from "tmp102";

class Sensor {
	constructor() {
		this.sensor = new TMP102;
		this.sensor.configure({
			hz: 4
		});

	}
	configure(options) {}
	sample() {
		let value = this.sensor.sample().temperature;
		value = ((value & 0x00FF) << 5) | ((value & 0xFF00) >> 11);
		if (value & 0x1000) {
			value -= 1;
			value = ~value & 0x1FFF;
			value = -value;
		}
		value *= 0.0625;	// Celsius
		value *= 1.8;
		// value += 32;		// Fahrenheit
		return {temperature: Math.round(value)};
	}
	close() {

	}
}

export default Sensor;

// import SMBus from "embedded:io/smbus";
// // import Timer from "timer";

// class TMP102 {
// 	#io;

// 	constructor(options) {
// 		const io = this.#io = new SMBus({
// 			...options,
// 			data: 21,
// 			clock: 22,
// 			hz: 32768,
// 			address: 0x48
// 		});
// 		// let hz = 0b10;
// 		// io.writeWord(1, (io.readWord(1) & ~0xC000) | (hz << 14));
// 		let buffer = Int8Array.from([0x7f, 0xf8]).buffer;
// 		io.writeBlock(3, buffer);		// disable alert
// 	}
// 	configure(options) {}
// 	sample() {
// 		let value = this.#io.readWord(0);
// 		value = ((value & 0x00FF) << 5) | ((value & 0xFF00) >> 11);
// 		if (value & 0x1000) {
// 			value -= 1;
// 			value = ~value & 0x1FFF;
// 			value = -value;
// 		}
// 		value *= 0.0625;	// Celsius
// 		value *= 1.8;
// 		value += 32;		// Fahrenheit
// 		return {temperature: Math.round(value)};
// 	}
// 	close() {
// 		this.#io?.close();
// 		this.#io = undefined;
// 	}
// }

// export default TMP102;