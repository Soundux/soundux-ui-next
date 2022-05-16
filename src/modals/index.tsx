import { Button, Text, TextInput } from '@mantine/core';
import { ModalsContextProps } from '@mantine/modals/lib/context';
import { Folder, Sound } from '../types';
import { PlusIcon, TrashIcon } from '@primer/octicons-react';
import { ResetIcon } from '@radix-ui/react-icons';

export const openSoundDeleteModal = (
  ctx: ModalsContextProps,
  sound: Sound,
  deleteToTrash: boolean,
  onConfirm: () => void
) =>
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
    children: (
      <Text size="sm">
        {deleteToTrash
          ? 'Are you sure you want to move this sound to the trash?'
          : 'Are you sure you want to delete this sound? This cannot be undone.'}
      </Text>
    ),
    labels: {
      confirm: deleteToTrash ? 'Move to trash' : 'Delete',
      cancel: "No, don't delete it",
    },
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
    labels: { confirm: 'Delete folder', cancel: "No, don't delete it" },
    cancelProps: { leftIcon: <ResetIcon /> },
    confirmProps: { color: 'red', leftIcon: <TrashIcon /> },
    onConfirm,
  });

export const openVirtualDeviceCreationModal = (
  ctx: ModalsContextProps,
  onConfirm: (text: string) => void
) => {
  let newDeviceName = 'New virtual device';

  const id = ctx.openModal({
    title: 'Create a new virtual device',
    centered: true,
    children: (
      <>
        <TextInput
          label="Name"
          placeholder="New virtual device"
          onChange={event => (newDeviceName = event.target.value || 'New virtual device')}
          data-autofocus
        />
        <Button
          fullWidth
          onClick={() => {
            ctx.closeModal(id);
            onConfirm(newDeviceName);
          }}
          mt="md"
          leftIcon={<PlusIcon />}
        >
          Create
        </Button>
      </>
    ),
  });
  return id;
};
