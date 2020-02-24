// Note: This code is only relevant for Thunderbird versions 68 and later,
// where we can no longer use the XUL Preference element.

Preferences.addAll([
  { id: "extensions.copyfolder.do_not_copy_source_dups",              type: "bool"   },
  { id: "extensions.copyfolder.do_not_add_destination_dups",          type: "bool"   },
  { id: "extensions.copyfolder.copy_only_messages_inside_folder",     type: "bool"   },
  { id: "extensions.copyfolder.recurse_copy",                         type: "string" },
  { id: "extensions.copyfolder.placeholder",                          type: "bool"   },
]);

