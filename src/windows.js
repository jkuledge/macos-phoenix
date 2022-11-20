require("./src/defaults.js")
require("./src/applications.js")

const toggleFullscreen = ({key, modifiers}) => {
	Key.on(key, modifiers, async () => {
		const focused = App.focused()
		const mainWindow = focused.mainWindow()
		mainWindow.setFullScreen(!mainWindow.isFullScreen())
		debug(mainWindow)
	})
}


