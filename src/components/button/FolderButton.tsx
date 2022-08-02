import { useAtom } from 'jotai';
import { foldersAtom, selectedFolderAtom } from '../../store';
import { Folder } from '../../types';
import { openFolderRemoveModal } from '../../modals';
import { useModals } from '@mantine/modals';
import { FileDirectoryFillIcon, SyncIcon, XIcon } from '@primer/octicons-react';
import { ActionIcon } from '@mantine/core';
import NavbarButton from './NavbarButton';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

interface FolderButtonProps {
  folder: Folder;
}

function FolderButton({ folder }: FolderButtonProps) {
  const { attributes, listeners, setNodeRef, transform, transition, active } = useSortable({
    id: folder.id,
  });
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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <NavbarButton
      icon={<FileDirectoryFillIcon />}
      color={folder.color}
      label={folder.name}
      selected={selectedFolder === folder.id}
      dragging={active !== null}
      endIcon={
        <>
          <ActionIcon<'div'> component="div" variant="transparent" size="xs">
            <SyncIcon />
          </ActionIcon>
          <ActionIcon<'div'>
            component="div"
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
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
}

export default FolderButton;
