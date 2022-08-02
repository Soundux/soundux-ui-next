import { ActionIcon, Divider, Navbar, ScrollArea } from '@mantine/core';
import NavbarButton from './button/NavbarButton';
import {
  ChevronRightIcon,
  FileDirectoryFillIcon,
  HeartIcon,
  SyncIcon,
  XIcon,
} from '@primer/octicons-react';
import { Folder } from '../types';
import { openFolderRemoveModal } from '../modals';
import { useModals } from '@mantine/modals';
import { useAtom } from 'jotai';
import { foldersAtom, selectedFolderAtom } from '../store';

function AppNavbar() {
  const modals = useModals();

  const [folders, setFolders] = useAtom(foldersAtom);
  const [selectedFolder, setSelectedFolder] = useAtom(selectedFolderAtom);

  const removeFolder = (folder: Folder) => {
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
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mr={-10} sx={{ paddingRight: 10, paddingBottom: 10 }} component={ScrollArea}>
        {folders.map(folder => (
          <NavbarButton
            key={folder.id}
            icon={<FileDirectoryFillIcon />}
            color={folder.color}
            label={folder.name}
            selected={selectedFolder === folder.id}
            endIcon={
              <>
                <ActionIcon component="div" variant="transparent" size="xs">
                  <SyncIcon />
                </ActionIcon>
                <ActionIcon<'div'>
                  component="div"
                  variant="transparent"
                  size="xs"
                  onClick={event => {
                    event.stopPropagation();
                    removeFolder(folder);
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
        ))}
      </Navbar.Section>

      <Divider sx={{ marginBottom: '10px' }} />

      <Navbar.Section>
        <NavbarButton
          icon={<HeartIcon />}
          color="red"
          label="Favorites"
          endIcon={<ChevronRightIcon />}
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default AppNavbar;
