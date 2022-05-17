import { Button, Text, TextInput } from '@mantine/core';
import { ModalsContextProps } from '@mantine/modals/lib/context';
import { Folder, Sound, VirtualDevice } from '../types';
import { PlusIcon, TrashIcon, XIcon } from '@primer/octicons-react';
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
        Remove{' '}
        <Text component="span" weight="bold">
          {folder.name}
        </Text>
      </Text>
    ),
    centered: true,
    withCloseButton: false,
    children: <Text size="sm">Are you sure you want to remove this folder?</Text>,
    labels: { confirm: 'Remove', cancel: "No, don't remove it" },
    cancelProps: { leftIcon: <ResetIcon /> },
    confirmProps: { color: 'red', leftIcon: <XIcon /> },
    onConfirm,
  });

export const openVirtualDeviceRemoveModal = (
  ctx: ModalsContextProps,
  virtualDevice: VirtualDevice,
  onConfirm: () => void
) =>
  ctx.openConfirmModal({
    title: (
      <Text>
        Remove{' '}
        <Text component="span" weight="bold">
          {virtualDevice.name}
        </Text>
      </Text>
    ),
    centered: true,
    withCloseButton: false,
    children: <Text size="sm">Are you sure you want to remove this virtual device?</Text>,
    labels: { confirm: 'Remove', cancel: "No, don't remove it" },
    cancelProps: { leftIcon: <ResetIcon /> },
    confirmProps: { color: 'red', leftIcon: <XIcon /> },
    onConfirm,
  });

export const openVirtualDeviceCreationModal = (
  ctx: ModalsContextProps,
  onConfirm: (text: string) => void
) => {
  const defaultDeviceName = 'New virtual device';
  let newDeviceName = defaultDeviceName;

  const submit = () => {
    ctx.closeModal(id);
    onConfirm(newDeviceName);
  };

  const id = ctx.openModal({
    title: 'Create a new virtual device',
    centered: true,
    children: (
      <>
        <TextInput
          label="Name"
          placeholder={defaultDeviceName}
          onChange={event => (newDeviceName = event.target.value || defaultDeviceName)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              submit();
            }
          }}
          data-autofocus
        />
        <Button fullWidth onClick={submit} mt="md" leftIcon={<PlusIcon />}>
          Create
        </Button>
      </>
    ),
  });
  return id;
};
