var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var debugInjection = true;

Services.scriptloader.loadSubScript("chrome://copyfolder/content/copyfolder.js", window, "UTF-8");

function injectOtherElements() {
  WL.injectElements(`
    xmlns:html="http://www.w3.org/1999/xhtml"
    xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
    xmlns:nc="http://home.netscape.com/NC-rdf#">
            <menu id="folderPaneContext-copyfolder"
                    label="&menu_copy_folder_to.label;"
                    accesskey="t"
                    insertafter="folderPaneContext-sep2"
                    sortResource="http://home.netscape.com/NC-rdf#FolderTreeName"
                    sortDirection="ascending"
                    datasources="rdf:null">

                    <menupopup
                         is="folder-menupopup"
                         id="actionTargetFolderPopup"
                         class="menulist-menupopup"
                         mode="filing"
                         showFileHereLabel="true"
                         showAccountsFileHere="true"
                         oncommand="com.crunchmod.copyfolder.copyDialog(event.target._folder, false);"/>

            </menu>

            <statusbar id="status-bar">
                    <hbox id="statusTextBox">
                            <statusbarpanel id="copyfolder-status"
                                    label=""
                                    collapsed="true"
                                    insertafter="statusText" />
                    </hbox>
            </statusbar>`,
    [
      "chrome://copyfolder/locale/copyfolder-overlay.dtd",
      "chrome://copyfolder/locale/copyfolder-prefs.dtd",
      "chrome://copyfolder/locale/copyfolder-dialog.dtd"
    ],
    debugInjection
  );
  WL.injectCSS("chrome://copyfolder/content/skin/overlay.css");
}

// called on window load or on add-on activation while window is already open
function onLoad(activatedWhileWindowOpen) {
  injectOtherElements();
  // Call a function provided by a JavaScript file loaded into the
  // global window object to call init.
  window.com.crunchmod.copyfolder.init();
}

// called on window unload or on add-on deactivation while window is still open
function onUnload(deactivatedWhileWindowOpen) {
  // no need to clean up UI on global shutdown
  if (!deactivatedWhileWindowOpen)
    return;
  // If we've added any elements not through WL.inject functions - we need to remove
  // them manually here. The WL-injected elements get auto-removed
}
