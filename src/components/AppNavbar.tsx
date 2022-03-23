import { ActionIcon, Divider, Navbar, ScrollArea } from '@mantine/core';
import FolderButton from './input/FolderButton';
import {
  ChevronRightIcon,
  FileDirectoryFillIcon,
  HeartIcon,
  SyncIcon,
  XIcon,
} from '@primer/octicons-react';
import { useMemo, useState } from 'react';
import { Folder } from '../types';
import { openFolderRemoveModal } from '../modals';
import { useModals } from '@mantine/modals';

function AppNavbar() {
  const modals = useModals();

  const [selectedFolder, setSelectedFolder] = useState(1);
  const [folders, setFolders] = useState<Folder[]>([]);

  useMemo(() => {
    setFolders(
      new Array(20).fill(0).map((_, i) => ({
        id: i,
        name: `Folder ${i + 1}`,
        color: i % 2 === 0 ? 'red' : 'blue',
      }))
    );
  }, []);

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
