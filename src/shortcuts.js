require("./src/applications.js");
require("./src/screens.js")

// MOVE ACTIVE WINDOW TO SPACE 1-10
for (let i = 0; i <=9; i ++ ) {
	moveWindowToSpace({
		key: i.toString(),
		modifiers: ["alt", "shift"]
	})
}


// common screen locations
const topHalf = {left: 0,top: 0,right: 0,bottom: 0.};
const bottomHalf = {left: 0, top: 0.67, right: 0, bottom: 0};
const leftHalf = {left: 0, top: 0, right: 0.5, bottom: 0};
const lowerLeftHalf = {left: 0, top: 0.5, right: 0.5, bottom: 0};
const rightHalf = {left: 0.5, top: 0, right: 0, bottom: 0};
const full = {left: 0, top: 0, right: 0, bottom: 0};
const leftTwoThirds = {left: 0, top: 0, right: 0.67, bottom: 0};


// the guake style applications
guakeApp({
	key: "return",
	modifiers: ["option", "shift"],
	appName: "kitty",
	position: bottomHalf,
	followsMouse: true,
	hideOnBlur: true,
});
guakeApp({
	key: "b",
	modifiers: ["option", "shift"],
	appName: "Microsoft Edge",
	position: full,
	followsMouse: true,
	hideOnBlur: false,
});
guakeApp({
	key: "f",
	modifiers: ["ctrl", "shift"],
	appName: "finder",
	position: topHalf,
	followsMouse: true,
	hideOnBlur: false,
});
guakeApp({
	key: "M",
	modifiers: ["option", "shift"],
	appName: "Music",
	position: leftTwoThirds,
	followsMouse: true,
	hideOnBlur: true,
});


closeActiveWindow({
	key: "c",
	modifiers: ["option"]
});
