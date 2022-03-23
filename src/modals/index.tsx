import { Text } from '@mantine/core';
import { ModalsContextProps } from '@mantine/modals/lib/context';
import { Folder, Sound } from '../types';
import { TrashIcon } from '@primer/octicons-react';
import { ResetIcon } from '@radix-ui/react-icons';

export const openSoundDeleteModal = (ctx: ModalsContextProps, sound: Sound, onConfirm: () => void) =>
  ctx.openConfirmModal({
    title: (
      <Text>
        Delete{' '}
        <Text component="span" weight="bold">
          {sound.name}
        </Text>
      </Text>
    ),
    centered: true,
    withCloseButton: false,
    // TODO: change text depending on the state of deleteToTrash
    children: <Text size="sm">Are you sure you want to delete this sound? This cannot be undone.</Text>,
    labels: { confirm: 'Delete sound', cancel: "No, don't delete it" },
    cancelProps: { leftIcon: <ResetIcon /> },
    confirmProps: { color: 'red', leftIcon: <TrashIcon /> },
    onConfirm,
  });

export const openFolderRemoveModal = (ctx: ModalsContextProps, folder: Folder, onConfirm: () => void) =>
  ctx.openConfirmModal({
    title: (
      <Text>
        Delete{' '}
        <Text component="span" weight="bold">
          {folder.name}
        </Text>
      </Text>
    ),
    centered: true,
    withCloseButton: false,
    children: <Text size="sm">Are you sure you want to remove this folder?</Text>,
    labels: { confirm: 'Delete sound', cancel: "No, don't delete it" },
    cancelProps: { leftIcon: <ResetIcon /> },
    confirmProps: { color: 'red', leftIcon: <TrashIcon /> },
    onConfirm,
  });
