
let quarterNote = document.getElementById("quarterNote");
let eigthNote = document.getElementById("eigthNote");
let sixteenthNote = document.getElementById("sixteenthNote");
let thirtySecondNote = document.getElementById("thirtySecondNote");
let noteRepeatButtons = document.getElementsByClassName("noteRepeatDivision");

let tempoArr = [];

// document.getElementById("set-noteDivision").value = 8;

// let tempoVal = document.getElementById("set-noteDivision").value;
let tempoVal = 8;
let z;



function setNoteDivision() {

	if (noteRepeatSwitcher === "on") {

		switch (this.id) {
			case 'quarterNote':
				quarterNote.style.background = "background";
				eigthNote.style.background = "black";
				sixteenthNote.style.background = "black";
				thirtySecondNote.style.background = "black";
				tempoVal = 4
				tempoArr

				break;
			case 'eigthNote':
				quarterNote.style.background = "black";
				eigthNote.style.background = "background";
				sixteenthNote.style.background = "black";
				thirtySecondNote.style.background = "black";;
				tempoVal = 8;
				break;
			case 'sixteenthNote':
				quarterNote.style.background = "black";
				eigthNote.style.background = "black";
				sixteenthNote.style.background = "background";
				thirtySecondNote.style.background = "black";
				tempoVal = 16;
				break;
			case 'thirtySecondNote':
				quarterNote.style.background = "black";
				eigthNote.style.background = "black";
				sixteenthNote.style.background = "black";
				thirtySecondNote.style.background = "background";
				tempoVal = 32;
				break;
		}

	}
}



for (var i = 0; i < noteRepeatButtons.length; i++) {
	noteRepeatButtons[i].addEventListener("click", setNoteDivision)
}

let soundObject = {
	pad1: { sound: "justBlazeBtz/JustBlaze-989kick.wav", key: 49 },
	pad2: { sound: "justBlazeBtz/JustBlaze-blueprintKick10.wav", key: 50 },
	pad3: { sound: "justBlazeBtz/JustBlaze-CFIRM.wav", key: 51 },
	pad4: { sound: "justBlazeBtz/JustBlaze-dlz19.wav", key: 52 },
	pad5: { sound: "justBlazeBtz/JustBlaze-dlz28.wav", key: 81 },
	pad6: { sound: "justBlazeBtz/JustBlaze-fullKick.wav", key: 87 },
	pad7: { sound: "justBlazeBtz/JustBlaze-hat3.wav", key: 69 },
	pad8: { sound: "justBlazeBtz/JustBlaze-hat6.wav", key: 82 },
	pad9: { sound: "justBlazeBtz/JustBlaze-hatkick4.wav", key: 65 },
	pad10: { sound: "justBlazeBtz/JustBlaze-loosenar.wav", key: 83 },
	pad11: { sound: "justBlazeBtz/JustBlaze-openHat2.wav", key: 68 },
	pad12: { sound: "justBlazeBtz/JustBlaze-rim1.wav", key: 70 },
	pad13: { sound: "justBlazeBtz/JustBlaze-sound10.wav", key: 90 },
	pad14: { sound: "justBlazeBtz/JustBlaze-tambsnare.wav", key: 88 },
	pad15: { sound: "justBlazeBtz/JustBlaze-Trin_Snare.wav", key: 67 },
	pad16: { sound: "justBlazeBtz/JustBlaze-verbSnapRim.wav", key: 86 }
};

let kit1 = {
	pad1: { sound: "drumSamplesFolder/MetroHat1.wav", key: 49 },
	pad2: { sound: "drumSamplesFolder/rimshot1-modify.wav", key: 50 },
	pad3: { sound: "drumSamplesFolder/808-3.wav", key: 51 },
	pad4: { sound: "drumSamplesFolder/808-4-modify.wav", key: 52 },
	pad5: { sound: "drumSamplesFolder/808-5.wav", key: 81 },
	pad6: { sound: "drumSamplesFolder/clap1-modify.wav", key: 87 },
	pad7: { sound: "drumSamplesFolder/clap2-modify.wav", key: 69 },
	pad8: { sound: "drumSamplesFolder/clap3-modify.wav", key: 82 },
	pad9: { sound: "drumSamplesFolder/clap4-modify.wav", key: 65 },
	pad10: { sound: "drumSamplesFolder/crash1-modify.wav", key: 83 },
	pad11: { sound: "drumSamplesFolder/hat1-modify.wav", key: 68 },
	pad12: { sound: "drumSamplesFolder/hat2-modify.wav", key: 70 },
	pad13: { sound: "drumSamplesFolder/hat3-modify.wav", key: 90 },
	pad14: { sound: "drumSamplesFolder/hat4-modify.wav", key: 88 },
	pad15: { sound: "drumSamplesFolder/kick1.wav", key: 67 },
	pad16: { sound: "drumSamplesFolder/kick2.wav", key: 86 }
};





let kit2 = {
	pad1: { sound: "justBlazeBtz/JustBlaze-989kick.wav", key: 49 },
	pad2: { sound: "justBlazeBtz/JustBlaze-blueprintKick10.wav", key: 50 },
	pad3: { sound: "justBlazeBtz/JustBlaze-CFIRM.wav", key: 51 },
	pad4: { sound: "justBlazeBtz/JustBlaze-dlz19.wav", key: 52 },
	pad5: { sound: "justBlazeBtz/JustBlaze-dlz28.wav", key: 81 },
	pad6: { sound: "justBlazeBtz/JustBlaze-fullKick.wav", key: 87 },
	pad7: { sound: "justBlazeBtz/JustBlaze-hat3.wav", key: 69 },
	pad8: { sound: "justBlazeBtz/JustBlaze-hat6.wav", key: 82 },
	pad9: { sound: "justBlazeBtz/JustBlaze-hatkick4.wav", key: 65 },
	pad10: { sound: "justBlazeBtz/JustBlaze-loosenar.wav", key: 83 },
	pad11: { sound: "justBlazeBtz/JustBlaze-openHat2.wav", key: 68 },
	pad12: { sound: "justBlazeBtz/JustBlaze-rim1.wav", key: 70 },
	pad13: { sound: "justBlazeBtz/JustBlaze-sound10.wav", key: 90 },
	pad14: { sound: "justBlazeBtz/JustBlaze-tambsnare.wav", key: 88 },
	pad15: { sound: "justBlazeBtz/JustBlaze-Trin_Snare.wav", key: 67 },
	pad16: { sound: "justBlazeBtz/JustBlaze-verbSnapRim.wav", key: 86 }
};

let kit2Sounds = {
	pad1: "drumSamplesFolder/triangle1.wav",
	pad2: "drumSamplesFolder/rimshot1.wav",
	pad3: "drumSamplesFolder/808-3.wav",
	pad4: "drumSamplesFolder/808-4.wav",
	pad5: "drumSamplesFolder/808-5.wav",
	pad6: "drumSamplesFolder/clap1.wav",
	pad7: "drumSamplesFolder/clap2.wav",
	pad8: "drumSamplesFolder/clap3.wav",
	pad9: "drumSamplesFolder/clap4.wav",
	pad10: "drumSamplesFolder/crash1.wav",
	pad11: "drumSamplesFolder/hat1.wav",
	pad12: "drumSamplesFolder/hat2.wav",
	pad13: "drumSamplesFolder/hat3.wav",
	pad14: "drumSamplesFolder/hat4.wav",
	pad15: "drumSamplesFolder/kick1.wav",
	pad16: "drumSamplesFolder/kick2.wav"
};



let snareJordanKit = {
	pad1: { sound: "boi-1daBTZ/boi1da - Ahh.wav", key: 49 },
	pad2: { sound: "boi-1daBTZ/boi1da - AuntyKick2.wav", key: 50 },
	pad3: { sound: "boi-1daBTZ/boi1da - batmanSnare.wav", key: 51 },
	pad4: { sound: "boi-1daBTZ/boi1da - beautifulHat.wav", key: 52 },
	pad5: { sound: "boi-1daBTZ/boi1da - clap.wav", key: 81 },
	pad6: { sound: "boi-1daBTZ/boi1da - hat3.wav", key: 87 },
	pad7: { sound: "boi-1daBTZ/boi1da - Ho.wav", key: 69 },
	pad8: { sound: "boi-1daBTZ/boi1da - NightDuoKick.wav", key: 82 },
	pad9: { sound: "boi-1daBTZ/boi1da - NightKcik.wav", key: 65 },
	pad10: { sound: "boi-1daBTZ/boi1da - openHat.wav", key: 83 },
	pad11: { sound: "boi-1daBTZ/boi1da - quadSnare.wav", key: 68 },
	pad12: { sound: "boi-1daBTZ/boi1da - shaker.wav", key: 70 },
	pad13: { sound: "boi-1daBTZ/boi1da - snare.wav", key: 90 },
	pad14: { sound: "boi-1daBTZ/boi1da - tink.wav", key: 88 },
	pad15: { sound: "boi-1daBTZ/boi1da - trioSnare.wav", key: 67 },
	pad16: { sound: "boi-1daBTZ/boi1da - Yeah.wav", key: 86 }
};

// let allKits = [kit1, kit2, snareJordanKit];
let allKits = [[kit2, "Just Blaze", "https://www.youtube.com/embed/wQ7rkIppxPM", "https://soundcloud.com/just-blaze"], [kit1, "Metro Boomin", "https://www.youtube.com/embed/4xiAW532xS0", "https://soundcloud.com/metroboomin"], [snareJordanKit, "Boi-1DA", "https://www.youtube.com/embed/Z9Fv3_1kgRY", "https://soundcloud.com/boi1damusic"]];
let producerName = document.getElementById("topSectionMiddle");
let vidSource = document.getElementById("youtubeVid")
let soundcloudLink = document.getElementById("soundcloudIcon")
let changeKitCounter = 0;

function changeKits() {
	if (changeKitCounter === 0) {
		changeKitCounter++
		soundObject = allKits[changeKitCounter][0];
		producerName.innerText = allKits[changeKitCounter][1]
		youtubeVid.src = allKits[changeKitCounter][2]
		soundcloudLink.href = allKits[changeKitCounter][3]
	}
	else {
		changeKitCounter++;
		if (changeKitCounter === allKits.length) {
			changeKitCounter = 0;
		}
		soundObject = allKits[changeKitCounter][0];
		producerName.innerText = allKits[changeKitCounter][1]
		youtubeVid.src = allKits[changeKitCounter][2]
		soundcloudLink.href = allKits[changeKitCounter][3]
	}

}

function previousKits() {
	if (changeKitCounter === 0) {
		changeKitCounter = allKits.length - 1
		soundObject = allKits[changeKitCounter][0];
		producerName.innerText = allKits[changeKitCounter][1]
		youtubeVid.src = allKits[changeKitCounter][2]
		soundcloudLink.href = allKits[changeKitCounter][3]
	} else {

		changeKitCounter--
		soundObject = allKits[changeKitCounter][0];
		producerName.innerText = allKits[changeKitCounter][1]
		youtubeVid.src = allKits[changeKitCounter][2]
		soundcloudLink.href = allKits[changeKitCounter][3]
	}

	if (changeKitCounter === allKits.length) {
		changeKitCounter--
	}
}

previousKit = document.getElementById("previousKit");
changeKit = document.getElementById("changeKit");

changeKit.addEventListener("click", function (event) {
	changeKits();
});

previousKit.addEventListener("click", function (event) {
	previousKits();
});

let mappedPad = "";
let mappedKey = "";
let keyAssign = document.getElementById("keyAssign");
let beatRepeatBtn = document.getElementById("beatRepeat");
let switcher = "off";
let noteRepeatSwitcher = "off";
let hiddenButton = document.getElementsByClassName("hiddenButton");
var pads = document.getElementsByClassName("pads");

keyAssign.addEventListener("click", keyToggle);

let tempoForm = document.getElementById("set-tempo");

tempoForm.onkeypress = function (e) {
	var key = e.charCode || e.keyCode || 0;
	if (key == 13) {
		e.preventDefault();
	}
}

function displayKeyMappings() {
	hiddenButton[0].innerText = String.fromCharCode(soundObject.pad1.key)
	hiddenButton[1].innerText = String.fromCharCode(soundObject.pad2.key)
	hiddenButton[2].innerText = String.fromCharCode(soundObject.pad3.key)
	hiddenButton[3].innerText = String.fromCharCode(soundObject.pad4.key)
	hiddenButton[4].innerText = String.fromCharCode(soundObject.pad5.key)
	hiddenButton[5].innerText = String.fromCharCode(soundObject.pad6.key)
	hiddenButton[6].innerText = String.fromCharCode(soundObject.pad7.key)
	hiddenButton[7].innerText = String.fromCharCode(soundObject.pad8.key)
	hiddenButton[8].innerText = String.fromCharCode(soundObject.pad9.key)
	hiddenButton[9].innerText = String.fromCharCode(soundObject.pad10.key)
	hiddenButton[10].innerText = String.fromCharCode(soundObject.pad11.key)
	hiddenButton[11].innerText = String.fromCharCode(soundObject.pad12.key)
	hiddenButton[12].innerText = String.fromCharCode(soundObject.pad13.key)
	hiddenButton[13].innerText = String.fromCharCode(soundObject.pad14.key)
	hiddenButton[14].innerText = String.fromCharCode(soundObject.pad15.key)
	hiddenButton[15].innerText = String.fromCharCode(soundObject.pad16.key)
}
displayKeyMappings();
function keyBind() {
	if ((switcher === "on")) {
		let mapKeyCounter = 0;
		let mappedPad = this.id;
		window.addEventListener("keydown", function (event) {
			event.preventDefault;
			if (mapKeyCounter < 1) {
				mappedKey = event.keyCode;
				soundObject[mappedPad].key = mappedKey;
				mapKeyCounter++;
			}
			displayKeyMappings()
		})
	}
};

function beatRepeatToggle() {
	if (noteRepeatSwitcher === "on") {
		beatRepeatBtn.style.backgroundColor = "inherit";
		beatRepeatBtn.innerText = "Beat Repeat Off";
		beatRepeatBtn.style.color = "white";
		noteRepeatSwitcher = "off";

		quarterNote.style.background = "inherit";
		eigthNote.style.background = "inherit";
		sixteenthNote.style.background = "inherit";
		thirtySecondNote.style.background = "inherit";;
		tempoVal = 8;

		if (counterObj.newPadCounter1 > 0) {
			for (let i = 0; i <= counterObj.newPadCounter1; i++) {
				bufferNode1.stop(context.currentTime);
				console.log("nfrijnfr")
			}
			counterObj.newPadCounter1 = 0;
		}
		if (counterObj.newPadCounter2 > 0) {
			bufferNode2.stop(context.currentTime);
			counterObj.newPadCounter2 = 0;
		}
		if (counterObj.newPadCounter3 > 0) {
			bufferNode3.stop(context.currentTime);
			counterObj.newPadCounter3 = 0;
		}
		if (counterObj.newPadCounter4 > 0) {
			bufferNode4.stop(context.currentTime);
			counterObj.newPadCounter4 = 0;
		}
		if (counterObj.newPadCounter5 > 0) {
			bufferNode5.stop(context.currentTime);
			counterObj.newPadCounter5 = 0;
		}
		if (counterObj.newPadCounter6 > 0) {
			bufferNode6.stop(context.currentTime);
			counterObj.newPadCounter6 = 0;
		}
		if (counterObj.newPadCounter7 > 0) {
			bufferNode7.stop(context.currentTime);
			counterObj.newPadCounter7 = 0;
		}
		if (counterObj.newPadCounter8 > 0) {
			bufferNode8.stop(context.currentTime);
			counterObj.newPadCounter8 = 0;
		}
		if (counterObj.newPadCounter9 > 0) {
			bufferNode9.stop(context.currentTime);
			counterObj.newPadCounter9 = 0;
		}
		if (counterObj.newPadCounter10 > 0) {
			bufferNode10.stop(context.currentTime);
			counterObj.newPadCounter10 = 0;
		}
		if (counterObj.newPadCounter11 > 0) {
			bufferNode11.stop(context.currentTime);
			counterObj.newPadCounter11 = 0;
		}
		if (counterObj.newPadCounter12 > 0) {
			bufferNode12.stop(context.currentTime);
			counterObj.newPadCounter12 = 0;
		}
		if (counterObj.newPadCounter13 > 0) {
			bufferNode13.stop(context.currentTime);
			counterObj.newPadCounter13 = 0;
		}
		if (counterObj.newPadCounter14 > 0) {
			bufferNode14.stop(context.currentTime);
			counterObj.newPadCounter14 = 0;
		}
		if (counterObj.newPadCounter15 > 0) {
			bufferNode15.stop(context.currentTime);
			counterObj.newPadCounter15 = 0;
		}
		if (counterObj.newPadCounter16 > 0) {
			bufferNode16.stop(context.currentTime);
			counterObj.newPadCounter16 = 0;
		}

	} else {
		beatRepeatBtn.style.backgroundColor = "yellow";
		beatRepeatBtn.innerText = "Beat Repeat On";
		beatRepeatBtn.style.color = "black";
		noteRepeatSwitcher = "on";

		quarterNote.style.background = "black";
		eigthNote.style.background = "background";
		sixteenthNote.style.background = "black";
		thirtySecondNote.style.background = "black";;
		tempoVal = 8;
	}
}

beatRepeatBtn.addEventListener("click", beatRepeatToggle);

function keyToggle() {
	if (switcher === "on") {
		keyAssign.style.backgroundColor = "inherit";
		document.getElementById('KeyAssignOfforOnText').innerText = "Off";
		keyAssign.style.color = "white";

		for (let x = 0; x < hiddenButton.length; x++) {

			hiddenButton[x].style.display = "none"
		}
		switcher = "off";
	} else {
		keyAssign.style.backgroundColor = "yellow";
		document.getElementById('KeyAssignOfforOnText').innerText = "On";
		keyAssign.style.color = "black";
		for (let x = 0; x < hiddenButton.length; x++) {
			hiddenButton[x].style.display = "inline"
		}

		for (var i = 0; i < pads.length; i++) {
			pads[i].addEventListener("click", keyBind)
		}
		switcher = "on";
	}
}

function addBackground(padNumber) {
	if (switcher === "off") {
		window[padNumber].classList.add("backgroundBlack")
	}
}

function removeBackground(padNumber) {
	if (switcher === "off") {
		window[padNumber].classList.remove("backgroundBlack")
	}
}

function removeBackgroundPreviousKit() {

	previousKit.classList.remove("backgroundBlack")

}

function addBackgroundPreviousKit() {

	previousKit.classList.add("backgroundBlack");

	setTimeout(removeBackgroundPreviousKit, 3);

}

function removeBackgroundNextKit() {

	changeKit.classList.remove("backgroundBlack")

}

function addBackgroundNextKit() {

	changeKit.classList.add("backgroundBlack");

	setTimeout(removeBackgroundNextKit, 3);

}

previousKit.addEventListener("click", addBackgroundPreviousKit);
changeKit.addEventListener("click", addBackgroundNextKit);



// function addBackgroundChangeKit(padNumber) {
// 	if (switcher === "off") {
// 		window[padNumber].classList.add("backgroundBlack")
// 	}
// }

// function removeBackground(padNumber) {
// 	if (switcher === "off") {
// 		window[padNumber].classList.remove("backgroundBlack")
// 	}
// }



function repeatPadEqualsZero(padNumber) {
	window['repeatPad' + padNumber] = 0
}

for (var i = 1; i <= 16; i++) {
	window['repeatPad' + i] = 0;
}

let counterObj = {
};

for (var i = 1; i <= 16; i++) {
	counterObj['newPadCounter' + i] = 0;
}
let counter;

var context = new window.AudioContext;

document.addEventListener("DOMContentLoaded", function () {
	console.log("DOMContentLoaded")

	var gainNode = context.createGain();
	function beatRepeat() {
		tempo2 = document.getElementById("set-tempo").value;
		noteDivision2 = tempoVal;
		let interval = 1 / ((tempo2 / 60) * noteDivision2 / 4)
		return interval
	}

	function playSound1(nameBufferNode, soundFile, interval) {



		window[nameBufferNode] = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundFile, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					window[nameBufferNode].buffer = buffer;
					window[nameBufferNode].connect(gainNode);

					if (noteRepeatSwitcher === "on") {
						window[nameBufferNode].loop = true;
						window[nameBufferNode].loopEnd = interval;
					}

					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(1, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		window[nameBufferNode].start()
	};

	function stopSound1(nameBufferNode) {
		window[nameBufferNode].stop(context.currentTime);
	};

	function clicker() {
		console.log("clicked!")
	};

	// for(let i=1; i<17; i++) {
	// 	// gainNode.gain.setValueAtTime(0, context.currentTime);
	// 	// document.getElementById(`pad${i}`).addEventListener('click', clickPad(`bufferNode${i}`, soundObject[`pad${i}`].sound, `pad${i}`));
	// 	console.log(bufferNode1)
	// }

	for (let i = 1; i < 17; i++) {
		document.getElementById(`pad${i}`).addEventListener('mousedown', function () { playAndStop1(`bufferNode${i}`, soundObject[`pad${i}`].sound, `pad${i}`) }, true);
	}

	for (let i = 1; i < 17; i++) {
		document.getElementById(`pad${i}`).addEventListener('mouseup', function () {
			if (this.id === 'pad1') {
				bufferNode1.stop(context.currentTime);
			}
			if (this.id === 'pad2') {
				bufferNode2.stop(context.currentTime);
			}
			if (this.id === 'pad3') {
				bufferNode3.stop(context.currentTime);
			}
			if (this.id === 'pad4') {
				bufferNode4.stop(context.currentTime);
			}
			if (this.id === 'pad5') {
				bufferNode5.stop(context.currentTime);
			}
			if (this.id === 'pad6') {
				bufferNode6.stop(context.currentTime);
			}
			if (this.id === 'pad7') {
				bufferNode7.stop(context.currentTime);
			}
			if (this.id === 'pad8') {
				bufferNode8.stop(context.currentTime);
			}
			if (this.id === 'pad9') {
				bufferNode9.stop(context.currentTime);
			}
			if (this.id === 'pad10') {
				bufferNode10.stop(context.currentTime);
			}
			if (this.id === 'pad11') {
				bufferNode11.stop(context.currentTime);
			}
			if (this.id === 'pad12') {
				bufferNode12.stop(context.currentTime);
			}
			if (this.id === 'pad13') {
				bufferNode13.stop(context.currentTime);
			}
			if (this.id === 'pad14') {
				bufferNode14.stop(context.currentTime);
			}
			if (this.id === 'pad15') {
				bufferNode15.stop(context.currentTime);
			}
			if (this.id === 'pad16') {
				bufferNode16.stop(context.currentTime);
			}

		})
	}

	// function clickedPad() {
	// 	playAndStop1(`bufferNode${i}`, soundObject[`pad${i}`].sound, `pad${i}`)
	// }

	// for(let i=1; i<17; i++) {
	// 	document.getElementById(`pad${i}`).addEventListener('click', clickedPad, true)
	// }

	// for(let i=1; i<17; i++) {
	// 	document.getElementById(`pad${i}`).removeEventListener('click', clickedPad, true)
	// }







	let setTempo = document.getElementById("set-tempo");

	function keyzDown(event) {

		event.preventDefault();

		if (event.keyCode != 8) {
			if ((event.keyCode === soundObject.pad1.key) && (repeatPad1 < 1) && switcher === "off") {
				playAndStop1('bufferNode1', soundObject.pad1.sound, 'pad1')
				repeatPad1++
			}
			if (event.keyCode === soundObject.pad2.key && (repeatPad2 < 1) && switcher === "off") {
				playAndStop1('bufferNode2', soundObject.pad2.sound, 'pad2')
				repeatPad2++
			}
			if (event.keyCode === soundObject.pad3.key && (repeatPad3 < 1) && switcher === "off") {
				playAndStop1('bufferNode3', soundObject.pad3.sound, 'pad3')
				repeatPad3++
			}
			if (event.keyCode === soundObject.pad4.key && (repeatPad4 < 1) && switcher === "off") {
				playAndStop1('bufferNode4', soundObject.pad4.sound, 'pad4')
				repeatPad4++
			}
			if (event.keyCode === soundObject.pad5.key && (repeatPad5 < 1) && switcher === "off") {
				playAndStop1('bufferNode5', soundObject.pad5.sound, 'pad5')
				repeatPad5++
			}
			if (event.keyCode === soundObject.pad6.key && (repeatPad6 < 1) && switcher === "off") {
				playAndStop1('bufferNode6', soundObject.pad6.sound, 'pad6')
				repeatPad6++
			}
			if (event.keyCode === soundObject.pad7.key && (repeatPad7 < 1) && switcher === "off") {
				playAndStop1('bufferNode7', soundObject.pad7.sound, 'pad7')
				repeatPad7++
			}
			if (event.keyCode === soundObject.pad8.key && (repeatPad8 < 1) && switcher === "off") {
				playAndStop1('bufferNode8', soundObject.pad8.sound, 'pad8')
				repeatPad8++
			}
			if (event.keyCode === soundObject.pad9.key && (repeatPad9 < 1) && switcher === "off") {
				playAndStop1('bufferNode9', soundObject.pad9.sound, 'pad9')
				repeatPad9++
			}
			if (event.keyCode === soundObject.pad10.key && (repeatPad10 < 1) && switcher === "off") {
				playAndStop1('bufferNode10', soundObject.pad10.sound, 'pad10')
				repeatPad10++
			}
			if (event.keyCode === soundObject.pad11.key && (repeatPad11 < 1) && switcher === "off") {
				playAndStop1('bufferNode11', soundObject.pad11.sound, 'pad11')
				repeatPad11++
			}
			if (event.keyCode === soundObject.pad12.key && (repeatPad12 < 1) && switcher === "off") {
				playAndStop1('bufferNode12', soundObject.pad12.sound, 'pad12')
				repeatPad12++
			}
			if (event.keyCode === soundObject.pad13.key && (repeatPad13 < 1) && switcher === "off") {
				playAndStop1('bufferNode13', soundObject.pad13.sound, 'pad13')
				repeatPad13++
			}
			if (event.keyCode === soundObject.pad14.key && (repeatPad14 < 1) && switcher === "off") {
				playAndStop1('bufferNode14', soundObject.pad14.sound, 'pad14')
				repeatPad14++
			}
			if (event.keyCode === soundObject.pad15.key && (repeatPad15 < 1) && switcher === "off") {
				playAndStop1('bufferNode15', soundObject.pad15.sound, 'pad15')
				repeatPad15++
			}
			if (event.keyCode === soundObject.pad16.key && (repeatPad16 < 1) && switcher === "off") {
				playAndStop1('bufferNode16', soundObject.pad16.sound, 'pad16')
				repeatPad16++
			}

		}
	}

	window.addEventListener("keydown", keyzDown);

	window.addEventListener("keyup", function (event) {
		event.preventDefault();
		if (event.keyCode === soundObject.pad1.key && (switcher === "off")) {
			repeatPadEqualsZero(1);

			if (noteRepeatSwitcher === "on") {
				bufferNode1.stop(context.currentTime);
			}
		}

		if (event.keyCode === soundObject.pad2.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode2.stop(context.currentTime);
			}
			repeatPadEqualsZero(2);
		}
		if (event.keyCode === soundObject.pad3.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode3.stop(context.currentTime);
			}
			repeatPadEqualsZero(3);
		}

		if (event.keyCode === soundObject.pad4.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode4.stop(context.currentTime);
			}
			repeatPadEqualsZero(4);
		}
		if (event.keyCode === soundObject.pad5.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode5.stop(context.currentTime);
			}
			repeatPadEqualsZero(5);
		}

		if (event.keyCode === soundObject.pad6.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode6.stop(context.currentTime);
			}
			repeatPadEqualsZero(6);
		}
		if (event.keyCode === soundObject.pad7.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode7.stop(context.currentTime);
			}
			repeatPadEqualsZero(7);
		}

		if (event.keyCode === soundObject.pad8.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode8.stop(context.currentTime);
			}
			repeatPadEqualsZero(8);
		}
		if (event.keyCode === soundObject.pad9.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode9.stop(context.currentTime);
			}
			repeatPadEqualsZero(9);
		}

		if (event.keyCode === soundObject.pad10.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode10.stop(context.currentTime);
			}
			repeatPadEqualsZero(10);
		}
		if (event.keyCode === soundObject.pad11.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode11.stop(context.currentTime);
			}
			repeatPadEqualsZero(11);
		}

		if (event.keyCode === soundObject.pad12.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode12.stop(context.currentTime);
			}
			repeatPadEqualsZero(12);
		}
		if (event.keyCode === soundObject.pad13.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode13.stop(context.currentTime);
			}
			repeatPadEqualsZero(13);
		}

		if (event.keyCode === soundObject.pad14.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode14.stop(context.currentTime);
			}
			repeatPadEqualsZero(14);
		}
		if (event.keyCode === soundObject.pad15.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode15.stop(context.currentTime);
			}
			repeatPadEqualsZero(15);
		}

		if (event.keyCode === soundObject.pad16.key && (switcher === "off")) {
			if (noteRepeatSwitcher === "on") {
				bufferNode16.stop(context.currentTime);
			}
			repeatPadEqualsZero(16);
		}
	})

	setTempo.addEventListener("focus", function (event) {
		window.removeEventListener("keydown", keyzDown);
	});
	setTempo.addEventListener("blur", function (event) {
		window.addEventListener("keydown", keyzDown);
	});

	function playAndStop1(bufferNodeName, soundFile, pad) {
		let interval = beatRepeat();

		if (switcher === "off") {
			if (bufferNodeName === 'bufferNode1') {
				counter = counterObj.newPadCounter1
				counterObj.newPadCounter1 = counterObj.newPadCounter1 + 1
			}
			if (bufferNodeName === 'bufferNode2') {
				counter = counterObj.newPadCounter2
				counterObj.newPadCounter2 = counterObj.newPadCounter2 + 1
			}
			if (bufferNodeName === 'bufferNode3') {
				counter = counterObj.newPadCounter3
				counterObj.newPadCounter3 = counterObj.newPadCounter3 + 1
			}
			if (bufferNodeName === 'bufferNode4') {
				counter = counterObj.newPadCounter4
				counterObj.newPadCounter4 = counterObj.newPadCounter4 + 1
			}
			if (bufferNodeName === 'bufferNode5') {
				counter = counterObj.newPadCounter5
				counterObj.newPadCounter5 = counterObj.newPadCounter5 + 1
			}
			if (bufferNodeName === 'bufferNode6') {
				counter = counterObj.newPadCounter6
				counterObj.newPadCounter6 = counterObj.newPadCounter6 + 1
			}
			if (bufferNodeName === 'bufferNode7') {
				counter = counterObj.newPadCounter7
				counterObj.newPadCounter7 = counterObj.newPadCounter7 + 1
			}
			if (bufferNodeName === 'bufferNode8') {
				counter = counterObj.newPadCounter8
				counterObj.newPadCounter8 = counterObj.newPadCounter8 + 1
			}
			if (bufferNodeName === 'bufferNode9') {
				counter = counterObj.newPadCounter9
				counterObj.newPadCounter9 = counterObj.newPadCounter9 + 1
			}
			if (bufferNodeName === 'bufferNode10') {
				counter = counterObj.newPadCounter10
				counterObj.newPadCounter10 = counterObj.newPadCounter10 + 1

			}
			if (bufferNodeName === 'bufferNode11') {
				counter = counterObj.newPadCounter11
				counterObj.newPadCounter11 = counterObj.newPadCounter11 + 1
			}
			if (bufferNodeName === 'bufferNode12') {
				counter = counterObj.newPadCounter12
				counterObj.newPadCounter12 = counterObj.newPadCounter12 + 1

			}
			if (bufferNodeName === 'bufferNode13') {
				counter = counterObj.newPadCounter13
				counterObj.newPadCounter13 = counterObj.newPadCounter13 + 1
			}
			if (bufferNodeName === 'bufferNode14') {
				counter = counterObj.newPadCounter14
				counterObj.newPadCounter14 = counterObj.newPadCounter14 + 1
			}
			if (bufferNodeName === 'bufferNode15') {
				counter = counterObj.newPadCounter15
				counterObj.newPadCounter15 = counterObj.newPadCounter15 + 1

			}
			if (bufferNodeName === 'bufferNode16') {
				counter = counterObj.newPadCounter16
				counterObj.newPadCounter16 = counterObj.newPadCounter16 + 1
			}



			if (counter === 0 || noteRepeatSwitcher === "on") {

				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
			else {
				stopSound1(bufferNodeName);
				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
		}
	};

});

var midi, data;
if (navigator.requestMIDIAccess) {
	navigator.requestMIDIAccess({
		sysex: false
	}).then(onMIDISuccess, onMIDIFailure);
} else {
	console.warn("No MIDI support in your browser");
}
function onMIDISuccess(midiData) {
	console.log(midiData);
	midi = midiData;
	var allInputs = midi.inputs.values();
	for (var input = allInputs.next(); input && !input.done; input = allInputs.next()) {
		input.value.onmidimessage = onMIDImessage;
	}
}
function onMIDIFailure() {
	console.warn("Not finding a MIDI controller");
}

var context = new window.AudioContext;

function onMIDImessage(messageData) {
	var gainNode = context.createGain();
	function beatRepeat() {
		tempo2 = document.getElementById("set-tempo").value;
		noteDivision2 = tempoVal;
		let interval = 1 / ((tempo2 / 60) * noteDivision2 / 4)
		return interval
	}

	function playSound1(nameBufferNode, soundFile, interval) {
		window[nameBufferNode] = context.createBufferSource();
		var request = new XMLHttpRequest();
		request.open('GET', soundFile, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					window[nameBufferNode].buffer = buffer;
					window[nameBufferNode].connect(gainNode);

					if (noteRepeatSwitcher === "on") {
						window[nameBufferNode].loop = true;
						window[nameBufferNode].loopEnd = interval;
					}

					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(note.velocity / 127, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		window[nameBufferNode].start()
	};

	function stopSound1(nameBufferNode, delay) {
		window[nameBufferNode].stop(context.currentTime + delay);
	};

	function playAndStop1(bufferNodeName, soundFile, pad, delay) {
		let interval = beatRepeat();

		if (switcher === "off") {
			if (bufferNodeName === 'bufferNode1') {
				counter = counterObj.newPadCounter1
				counterObj.newPadCounter1 = counterObj.newPadCounter1 + 1
			}
			if (bufferNodeName === 'bufferNode2') {
				counter = counterObj.newPadCounter2
				counterObj.newPadCounter2 = counterObj.newPadCounter2 + 1
			}
			if (bufferNodeName === 'bufferNode3') {
				counter = counterObj.newPadCounter3
				counterObj.newPadCounter3 = counterObj.newPadCounter3 + 1
			}
			if (bufferNodeName === 'bufferNode4') {
				counter = counterObj.newPadCounter4
				counterObj.newPadCounter4 = counterObj.newPadCounter4 + 1
			}
			if (bufferNodeName === 'bufferNode5') {
				counter = counterObj.newPadCounter5
				counterObj.newPadCounter5 = counterObj.newPadCounter5 + 1
			}
			if (bufferNodeName === 'bufferNode6') {
				counter = counterObj.newPadCounter6
				counterObj.newPadCounter6 = counterObj.newPadCounter6 + 1
			}
			if (bufferNodeName === 'bufferNode7') {
				counter = counterObj.newPadCounter7
				counterObj.newPadCounter7 = counterObj.newPadCounter7 + 1
			}
			if (bufferNodeName === 'bufferNode8') {
				counter = counterObj.newPadCounter8
				counterObj.newPadCounter8 = counterObj.newPadCounter8 + 1
			}
			if (bufferNodeName === 'bufferNode9') {
				counter = counterObj.newPadCounter9
				counterObj.newPadCounter9 = counterObj.newPadCounter9 + 1
			}
			if (bufferNodeName === 'bufferNode10') {
				counter = counterObj.newPadCounter10
				counterObj.newPadCounter10 = counterObj.newPadCounter10 + 1

			}
			if (bufferNodeName === 'bufferNode11') {
				counter = counterObj.newPadCounter11
				counterObj.newPadCounter11 = counterObj.newPadCounter11 + 1
			}
			if (bufferNodeName === 'bufferNode12') {
				counter = counterObj.newPadCounter12
				counterObj.newPadCounter12 = counterObj.newPadCounter12 + 1

			}
			if (bufferNodeName === 'bufferNode13') {
				counter = counterObj.newPadCounter13
				counterObj.newPadCounter13 = counterObj.newPadCounter13 + 1
			}
			if (bufferNodeName === 'bufferNode14') {
				counter = counterObj.newPadCounter14
				counterObj.newPadCounter14 = counterObj.newPadCounter14 + 1
			}
			if (bufferNodeName === 'bufferNode15') {
				counter = counterObj.newPadCounter15
				counterObj.newPadCounter15 = counterObj.newPadCounter15 + 1

			}
			if (bufferNodeName === 'bufferNode16') {
				counter = counterObj.newPadCounter16
				counterObj.newPadCounter16 = counterObj.newPadCounter16 + 1
			}



			if (counter === 0 || noteRepeatSwitcher === "on") {
				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
			else {
				stopSound1(bufferNodeName, delay);
				playSound1(bufferNodeName, soundFile, interval);
				addBackground(pad);
				setTimeout(removeBackground, 3, pad);

			}
		}
	};

	var d = messageData.data; // Example: [144, 60, 100]
	var note = {
		on: d[0],
		pitch: d[1],
		velocity: d[2]
	}

	function play(note) {
		switch (note.on) {
			case 144:
				if (note.pitch == 0 || note.pitch == 24 || note.pitch == 48 || note.pitch == 72 || note.pitch == 96 || note.pitch == 120) {
					playAndStop1('bufferNode1', soundObject.pad1.sound, 'pad1', 0)
				}
				if (note.pitch == 1 || note.pitch == 25 || note.pitch == 49 || note.pitch == 73 || note.pitch == 97) {
					playAndStop1('bufferNode2', soundObject.pad2.sound, 'pad2', 0)
				}
				if (note.pitch == 2 || note.pitch == 26 || note.pitch == 50 || note.pitch == 74 || note.pitch == 98) {
					playAndStop1('bufferNode3', soundObject.pad3.sound, 'pad3', 0)
				}
				if (note.pitch == 3 || note.pitch == 27 || note.pitch == 51 || note.pitch == 75 || note.pitch == 99) {
					playAndStop1('bufferNode4', soundObject.pad4.sound, 'pad4', 0)
				}
				if (note.pitch == 4 || note.pitch == 28 || note.pitch == 52 || note.pitch == 76 || note.pitch == 100) {
					playAndStop1('bufferNode5', soundObject.pad5.sound, 'pad5', 0)
				}
				if (note.pitch == 5 || note.pitch == 29 || note.pitch == 53 || note.pitch == 77 || note.pitch == 101) {
					playAndStop1('bufferNode6', soundObject.pad6.sound, 'pad6', 0)
				}
				if (note.pitch == 6 || note.pitch == 30 || note.pitch == 54 || note.pitch == 78 || note.pitch == 102) {
					playAndStop1('bufferNode7', soundObject.pad7.sound, 'pad7', 0)
				}
				if (note.pitch == 7 || note.pitch == 31 || note.pitch == 55 || note.pitch == 79 || note.pitch == 103) {
					playAndStop1('bufferNode8', soundObject.pad8.sound, 'pad8', 0)
				}
				if (note.pitch == 8 || note.pitch == 32 || note.pitch == 56 || note.pitch == 80 || note.pitch == 104) {
					playAndStop1('bufferNode9', soundObject.pad9.sound, 'pad9', 0)
				}
				if (note.pitch == 9 || note.pitch == 33 || note.pitch == 57 || note.pitch == 81 || note.pitch == 105) {
					playAndStop1('bufferNode10', soundObject.pad10.sound, 'pad10', 0)
				}
				if (note.pitch == 10 || note.pitch == 34 || note.pitch == 58 || note.pitch == 82 || note.pitch == 106) {
					playAndStop1('bufferNode11', soundObject.pad11.sound, 'pad11', 0)
				}
				if (note.pitch == 11 || note.pitch == 35 || note.pitch == 59 || note.pitch == 83 || note.pitch == 107) {
					playAndStop1('bufferNode12', soundObject.pad12.sound, 'pad12', 0)
				}
				if (note.pitch == 12 || note.pitch == 36 || note.pitch == 60 || note.pitch == 84 || note.pitch == 108) {
					playAndStop1('bufferNode13', soundObject.pad13.sound, 'pad13', 0)
				}
				if (note.pitch == 13 || note.pitch == 37 || note.pitch == 61 || note.pitch == 85 || note.pitch == 109) {
					playAndStop1('bufferNode14', soundObject.pad14.sound, 'pad14', 0)
				}
				if (note.pitch == 14 || note.pitch == 38 || note.pitch == 62 || note.pitch == 86 || note.pitch == 110) {
					playAndStop1('bufferNode15', soundObject.pad15.sound, 'pad15', 0)
				}
				if (note.pitch == 15 || note.pitch == 39 || note.pitch == 63 || note.pitch == 87 || note.pitch == 111) {
					playAndStop1('bufferNode16', soundObject.pad16.sound, 'pad16', 0)
				}

				break;
			case 128:
				if (noteRepeatSwitcher === "on") {
					if (note.pitch == 0 || note.pitch == 24 || note.pitch == 48 || note.pitch == 72 || note.pitch == 96 || note.pitch == 120) {
						stopSound1('bufferNode1', 0)
					}
					if (note.pitch == 1 || note.pitch == 25 || note.pitch == 49 || note.pitch == 73 || note.pitch == 97) {
						stopSound1('bufferNode2', 0)
					}
					if (note.pitch == 2 || note.pitch == 26 || note.pitch == 50 || note.pitch == 74 || note.pitch == 98) {
						stopSound1('bufferNode3', 0)
					}
					if (note.pitch == 3 || note.pitch == 27 || note.pitch == 51 || note.pitch == 75 || note.pitch == 99) {
						stopSound1('bufferNode4', 0)
					}
					if (note.pitch == 4 || note.pitch == 28 || note.pitch == 52 || note.pitch == 76 || note.pitch == 100) {
						stopSound1('bufferNode5', 0)
					}
					if (note.pitch == 5 || note.pitch == 29 || note.pitch == 53 || note.pitch == 77 || note.pitch == 101) {
						stopSound1('bufferNode6', 0)
					}
					if (note.pitch == 6 || note.pitch == 30 || note.pitch == 54 || note.pitch == 78 || note.pitch == 102) {
						stopSound1('bufferNode7', 0)
					}
					if (note.pitch == 7 || note.pitch == 31 || note.pitch == 55 || note.pitch == 79 || note.pitch == 103) {
						stopSound1('bufferNode8', 0)
					}
					if (note.pitch == 8 || note.pitch == 32 || note.pitch == 56 || note.pitch == 80 || note.pitch == 104) {
						stopSound1('bufferNode9', 0)
					}
					if (note.pitch == 9 || note.pitch == 33 || note.pitch == 57 || note.pitch == 81 || note.pitch == 105) {
						stopSound1('bufferNode10', 0)
					}
					if (note.pitch == 10 || note.pitch == 34 || note.pitch == 58 || note.pitch == 82 || note.pitch == 106) {
						stopSound1('bufferNode11', 0)
					}
					if (note.pitch == 11 || note.pitch == 35 || note.pitch == 59 || note.pitch == 83 || note.pitch == 107) {
						stopSound1('bufferNode12', 0)
					}
					if (note.pitch == 12 || note.pitch == 36 || note.pitch == 60 || note.pitch == 84 || note.pitch == 108) {
						stopSound1('bufferNode13', 0)
					}
					if (note.pitch == 13 || note.pitch == 37 || note.pitch == 61 || note.pitch == 85 || note.pitch == 109) {
						stopSound1('bufferNode14', 0)
					}
					if (note.pitch == 14 || note.pitch == 38 || note.pitch == 62 || note.pitch == 86 || note.pitch == 110) {
						stopSound1('bufferNode15', 0)
					}
					if (note.pitch == 15 || note.pitch == 39 || note.pitch == 63 || note.pitch == 87 || note.pitch == 111) {
						stopSound1('bufferNode16', 0)
					}
				}
				break;
		}
	}

	play(note);
};





