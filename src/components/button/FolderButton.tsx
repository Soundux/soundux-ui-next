import { useAtom } from 'jotai';
import { foldersAtom, selectedFolderAtom } from '../../store';
import { Folder } from '../../types';
import { openFolderRemoveModal } from '../../modals';
import { useModals } from '@mantine/modals';
import { FileDirectoryFillIcon, SyncIcon, XIcon } from '@primer/octicons-react';
import { ActionIcon } from '@mantine/core';
import NavbarButton from './NavbarButton';

interface FolderButtonProps {
  folder: Folder;
}

function FolderButton({ folder }: FolderButtonProps) {
  const modals = useModals();

  const [folders, setFolders] = useAtom(foldersAtom);
  const [selectedFolder, setSelectedFolder] = useAtom(selectedFolderAtom);

  const removeFolder = () => {
    openFolderRemoveModal(modals, folder, () => {
      setFolders(folders.filter(({ id }) => id !== folder.id));

      // select another folder if the removed folder was selected
      if (selectedFolder === folder.id) {
        // getting it here is fine because the setFolders transaction is not yet committed
        const oldIndex = folders.indexOf(folder);
        // if there is no previous folder, use the next one (happens when removing the first folder)
        const newFolder = folders[oldIndex - 1] || folders[oldIndex + 1];
        if (newFolder) {
          setSelectedFolder(newFolder.id);
        } else {
          // no folders left
          setSelectedFolder(null);
        }
      }
    });
  };

  return (
    <NavbarButton
      icon={<FileDirectoryFillIcon />}
      color={folder.color}
      label={folder.name}
      selected={selectedFolder === folder.id}
      endIcon={
        <>
          <ActionIcon variant="transparent" size="xs">
            <SyncIcon />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            size="xs"
            onClick={() => {
              removeFolder();
            }}
          >
            <XIcon />
          </ActionIcon>
        </>
      }
      onClick={() => {
        setSelectedFolder(folder.id);
      }}
    />
  );
}

export default FolderButton;
