import { ActionIcon, Avatar, Badge, Group, Paper, Text } from '@mantine/core';
import {
  HeartIcon,
  KebabHorizontalIcon,
  PencilIcon,
  TrashIcon,
  UnmuteIcon,
} from '@primer/octicons-react';
import { Sound } from '../../types';
import { useModals } from '@mantine/modals';
import { openSoundDeleteModal } from '../../modals';
import { useAtom } from 'jotai';
import { currentFolderAtom } from '../../store';
import { deleteToTrashSetting } from '../../store/settings';

function ListView() {
  const modals = useModals();

  const [deleteToTrash] = useAtom(deleteToTrashSetting);

  const [currentFolder] = useAtom(currentFolderAtom);
  const sounds = currentFolder?.sounds || [];

  const removeSound = (sound: Sound) => {
    openSoundDeleteModal(modals, sound, deleteToTrash, () => {
      if (currentFolder) {
        currentFolder.sounds = currentFolder.sounds.filter(({ id }) => id !== sound.id);
      }
    });
  };

  return (
    <Group spacing={7} direction="column" sx={{ width: '100%' }}>
      {sounds &&
        sounds.map(sound => (
          <Paper p="md" shadow="xs" key={sound.id} sx={{ width: '100%' }}>
            <Group position="apart" noWrap>
              <Group>
                <Avatar src={`https://picsum.photos/200?name=${sound.name}`} />
                <Text>{sound.name}</Text>
                <Badge
                  size="lg"
                  sx={{
                    textTransform: 'initial',
                    fontWeight: 'normal',
                    width: '70px',
                    color: '#e9ecef',
                  }}
                >
                  {sound.fileType}
                </Badge>
              </Group>
              <Badge
                size="lg"
                color="gray"
                sx={{
                  textTransform: 'initial',
                  fontWeight: 'normal',
                  padding: '0 20px',
                  // width: '100px',
                }}
              >
                {sound.length}
              </Badge>
              <Badge
                size="lg"
                color="gray"
                sx={{
                  textTransform: 'initial',
                  fontWeight: 'normal',
                  padding: '0 20px',
                  // width: '200px',
                }}
              >
                Modified {sound.modified}
              </Badge>
              <Group>
                <ActionIcon variant="transparent" size="xs">
                  <KebabHorizontalIcon />
                </ActionIcon>
                <ActionIcon variant="transparent" size="xs">
                  <UnmuteIcon />
                </ActionIcon>
                <ActionIcon variant="transparent" size="xs">
                  <PencilIcon />
                </ActionIcon>
                <ActionIcon variant="transparent" size="xs">
                  <HeartIcon />
                </ActionIcon>
                <ActionIcon variant="transparent" size="xs" onClick={() => removeSound(sound)}>
                  <TrashIcon />
                </ActionIcon>
              </Group>
            </Group>
          </Paper>
        ))}
    </Group>
  );
}

export default ListView;
