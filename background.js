(async function() {
messenger.WindowListener.registerDefaultPrefs("defaults/preferences/copyfolder.js")

messenger.WindowListener.registerChromeUrl([ 
  ["content",  "copyfolder",           "chrome/content/"],
  ["locale",   "copyfolder", "en-US",  "chrome/locale/en-US/"]
]);

messenger.WindowListener.registerOptionsPage("chrome://copyfolder/content/copyfolder-prefs.xhtml")

messenger.WindowListener.registerWindow(
  "chrome://messenger/content/messenger.xhtml",
  "chrome://copyfolder/content/overlay-injectors/messenger.js");

messenger.WindowListener.startListening();
})()
