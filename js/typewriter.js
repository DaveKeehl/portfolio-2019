const speed = 150;
const pause = 1500;

function waitRepeatAndStopArgs(args) {
	const others = args.splice(3);
	waitRepeatAndStop(args[0], args[1], args[2], others)
}

function waitRepeatAndStop(fn, cond, cb, ...cbArgs) {
	setTimeout(() => {
		let timer = setInterval(() => {
			if (cond()) {
				fn()
			} else {
				timer = clearInterval(timer);
				cb && cb(cbArgs);
			}
		}, speed);
	}, pause);
}

function mainInit() {
	const mainText = "I love";
	const mainH1 = document.createElement("h1");
	let i = 0;
	document.getElementById("typewriter").appendChild(mainH1);

	waitRepeatAndStop(() => {
		mainH1.innerText += mainText.charAt(i);
		i++;
	}, () => i < mainText.length, otherInit);
}

function otherInit() {
	const otherTexts = [
		"designing interfaces",
		"creating websites",
		"making documents",
		"working with video"
	];

	const otherH1 = document.createElement("h1");
	document.getElementById("typewriter").appendChild(otherH1);
	otherTypewrite(otherH1, otherTexts);
}

function otherTypewriteArgs(args) {
	const flatted = args.flat();
	otherTypewrite(flatted[0], flatted[1], flatted[2])
}

function otherTypewrite(dom, texts, index = 0) {
	let i = 0;
	const text = texts[index];

	waitRepeatAndStop(() => {
		dom.innerText += text.charAt(i);
		i++
	}, () => i < text.length, waitRepeatAndStopArgs, () => {
		dom.innerText = dom.innerText.slice(0, -1);
		i--;
	}, () => i > 0, otherTypewriteArgs, dom, texts, index + 1 < texts.length ? index + 1 : 0)
}
