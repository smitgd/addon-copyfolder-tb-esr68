# addon-copyfolder-tb-esr78-and-later
Thunderbird addon Copyfolder modified for esr78 and later (branch WL)

This copies a folder and its sub-folders (or optionally just the selected folder) to another location in the same account or to another account or to Local Folders, creating a new folder (and sub-folders if copied) of the same name at the destination. This addon never deletes the source folder or its sub-folders (i.e., "move" is not supported). This is mostly intended for copy between imap accounts but works with folders of any type of account.

To ensure that a copy destination imap folder can be created, first click on a folder in the destination account so that an imap connection is made before the copy occurs. This is usually not needed since the connection occurs at TB startup when the default "check for new messages at startup" is set. But the connection may still timeout if the account has not been recently accessed, causing the connection to be lost.

To start the copy, select, open and right-click on your source folder and choose the destination folder to copy it to using the new "(Addon) Copy Folder To >" menu item.  The addon uses the standard auto-expanding folder tree as seen when copying individual messages to another folder. This copies the selected folder and all the messages of the selected folder and also any sub-folders and their messages. (Copy of sub-folders can be prevented in the settings.) If the destination folder of the same name already exists, a check is made for potential duplicate messages and, if found, are not copied from the source. So if errors occur and the copy is attempted again, duplicate messages should not appear in the destination.

If problems occur and messages fail to copy or the prompt does not appear, go to the Thunderbird add-on setting and disable and re-enable this addon (it may have crashed due to unexpected errors). Then, if copying imap folders, open any folder in the destination imap account, then open the source folder and retry the copy operation.

To create an install file for the addon, this general procedure can be used:
```
rm addon.xpi
cd addon-copyfolder-tb-esr68
zip -r ../addon.xpi *
cd ..
```
Then use the "install from file" method on the Addons TB screen and navigate to your addon.xpi.
