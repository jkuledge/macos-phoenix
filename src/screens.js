require('./logging.js');

/* 
Moves the active window to a the desired space number (works regarless if the space is on the same screen or not)
*/
function moveWindowToSpace({key, modifiers}) {
	Key.on(key, modifiers, async () => {
		desired_space_index = parseInt(key) - 1 
		screens = Screen.all()
		spaces = Space.all()
		focused = Window.focused()
		current_space = focused.spaces()[0]
		current_screen = focused.screen()
		spaces[desired_space_index].moveWindows([focused])
	})
};


// Modal.build({
// 	duration: 0.5,
// 	weight: 48,
// 	appearance: 'dark',
// 	icon: App.get('Phoenix').icon(),
// 	text: 'Hello World!',
//   }).show();