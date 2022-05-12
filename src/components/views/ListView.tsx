import { ActionIcon, Avatar, Badge, Group, Paper, Text } from '@mantine/core';
import {
  HeartIcon,
  KebabHorizontalIcon,
  PencilIcon,
  UnmuteIcon,
  XCircleFillIcon,
} from '@primer/octicons-react';
import { Sound } from '../../types';
import { useModals } from '@mantine/modals';
import { openSoundDeleteModal } from '../../modals';
import { useStore } from '../../store';
import shallow from 'zustand/shallow';

function ListView() {
  const modals = useModals();

  const [folders, selectedFolder] = useStore(state => [state.folders, state.selectedFolder], shallow);

  const sounds = folders.find(({ id }) => id === selectedFolder)?.sounds || [];

  const removeSound = (sound: Sound) => {
    openSoundDeleteModal(modals, sound, () => {
      console.log('Delete sound', sound);
    });
  };

  return (
    <Group spacing={7} direction="column" sx={{ width: '100%' }}>
      {sounds &&
        sounds.map(sound => (
          <Paper p="md" shadow="xs" key={sound.name} sx={{ width: '100%' }}>
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
                  <XCircleFillIcon />
                </ActionIcon>
              </Group>
            </Group>
          </Paper>
        ))}
    </Group>
  );
}

export default ListView;
