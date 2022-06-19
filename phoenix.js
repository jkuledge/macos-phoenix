// Guake Style Applications
// uses apple script hacks to get around the following issue
// https://github.com/kasper/phoenix/issues/209
// helper for finding application names at the bottom of the file
// while developing run log stream --process Phoenix in a console

// CONFIG
require("./config/constants.js")
require("./src/shortcuts.js") // TODO: move this to config

// HELPERS
require("./src/helpers/detect_named_anachor.js")
require("./src/helpers/get_named_anchor.js")
require("./src/helpers/get_named_frame.js")
require("./src/helpers/get_focused_screen.js")
require("./src/helpers/is_anchored.js")
require("./src/helpers/set_frame.js")
require("./src/helpers/set_event_helper.js")

require("./src/logging.js");
require("./src/screens.js");
require("./src/snapping.js");
require("./src/applications.js");

