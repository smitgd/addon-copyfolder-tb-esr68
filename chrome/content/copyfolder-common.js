var EXPORTED_SYMBOLS = ["CopyFolder"];

const Cc = Components.classes;
const Ci = Components.interfaces;

if ("undefined" == typeof(messenger)) {
  var messenger = Cc["@mozilla.org/messenger;1"].createInstance(Ci.nsIMessenger);
}

var CopyFolder = {};

// Preferences
// -----------

CopyFolder.Prefs = {

  // const
  preferencePrefix : "extensions.copyfolder.",

  _prefService: null,

  get prefService()
  {
    if (!this._prefService)
      this._prefService =
        Components.classes["@mozilla.org/preferences-service;1"]
                  .getService(Components.interfaces.nsIPrefBranch);
    return this._prefService;
  },

  getBoolPref: function(prefName, defaultValue) {
    try {
      return this.prefService.getBoolPref(
        CopyFolder.Prefs.preferencePrefix + prefName);
    } catch(ex) {
      if (defaultValue != undefined)
        return defaultValue;

      throw(ex);
    }
  },

  getCharPref: function(prefName, defaultValue) {
    try {
      return this.prefService.getCharPref(
        CopyFolder.Prefs.preferencePrefix + prefName);
    } catch(ex) {
      if (defaultValue) {
        return defaultValue;
      }
      throw(ex);
    }
  },

  getIntPref: function(prefName, defaultValue) {
    try {
      return this.prefService.getIntPref(
        CopyFolder.Prefs.preferencePrefix + prefName);
    } catch(ex) {
      if (defaultValue)
        return defaultValue;

      throw(ex);
    }
  },

  getLocalizedStringPref: function(prefName, defaultValue) {
    try {
      return this.prefService
                 .getComplexValue(
                   CopyFolder.Prefs.preferencePrefix +
                   prefName,Components.interfaces.nsIPrefLocalizedString).data;
    } catch(ex) {
      if (defaultValue) {
        return defaultValue;
      }
      throw(ex);
    }
  },

  setBoolPref: function(prefName, val) {
    this.prefService.setBoolPref(
      CopyFolder.Prefs.preferencePrefix + prefName, val);
  },

  setCharPref: function(prefName, val) {
    this.prefService.setCharPref(
      CopyFolder.Prefs.preferencePrefix + prefName, val);
  },

  setIntPref: function(prefName, val) {
    this.prefService.setIntPref(
      CopyFolder.Prefs.preferencePrefix + prefName, val);
  },

  setAppStringPref: function(appPrefName, str) {
      if (BiDiMailUI.App.versionIsAtLeast("58.0b1")) {
        BiDiMailUI.Prefs.prefService.setStringPref(appPrefName, str);
      }
      else
      {
        BiDiMailUI.Prefs.prefService.setComplexValue(
          appPrefName, Components.interfaces.nsISupportsString, str);
      }
  },

  setLocalizedStringPref: function (prefName, val) {
    var pls =
      Components.classes["@mozilla.org/pref-localizedstring;1"]
                .createInstance(Components.interfaces.nsIPrefLocalizedString);
    pls.data = val;
    setAppStringPref(CopyFolder.Prefs.preferencePrefix +
          prefName, pls);
  }
}
