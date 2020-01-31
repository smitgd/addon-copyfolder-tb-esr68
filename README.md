# addon-copyfolder-tb-esr68
Thunderbird addon Copyfolder modified for esr68

Right-click on your source folder and choose the destination folder to copy it to using the new "(Addon) Copy Folder To >" menu item.  The addon uses the standard auto-expanding folder tree as seen when copying individual messages to another folder. This copies the selected folder and all the messages of the selected folder and also any sub-folders under it. (Copy of sub-folders currently can't be prevented.) If the destination already exists, a check is made for potential duplicate messages and, if found, are not copied from the source. So if errors occur and the copy is attempted again, duplicate messages should not appear in the destination.

To ensure that the destination imap folder can be created or accessed, click on a folder in the destination account so that an imap connection is made before the copy occurs. This is usually not needed since the connection occurs at TB startup. But if not and the copy doesn't start (you only see a "comparing folders" message in the status area and no confirmation dialog occurs) a TB restart may be needed to ensure your retry of the copy doesn't cause duplicates in the destination.

To create an install file for the addon, this general procedure can be used:
```
rm addon.xpi
cd addon-copyfolder-tb-esr68
zip -r ../addon.xpi *
cd ..
```
Then use the "install from file" method on the Addons TB screen and navigate to your addon.xpi.
