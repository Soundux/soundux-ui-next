import { ActionIcon, Divider, Navbar, ScrollArea } from '@mantine/core';
import FolderButton from './input/FolderButton';
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
      if (folders.length) {
        setSelectedFolder(folders[0].id);
      }
    });
  };

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mr={-10} sx={{ paddingRight: 10, paddingBottom: 10 }} component={ScrollArea}>
        {folders.map(folder => (
          <FolderButton
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
        <FolderButton
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
