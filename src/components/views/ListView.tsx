import { Avatar, Badge, Group, Paper, Text } from '@mantine/core';
import {
  HeartIcon,
  KebabHorizontalIcon,
  PencilIcon,
  UnmuteIcon,
  XCircleFillIcon,
} from '@primer/octicons-react';

interface Sound {
  name: string;
  fileType: string;
  length: string;
  modified: string;
}

const sounds: Sound[] = [
  {
    name: 'Sound 3',
    fileType: 'webm',
    length: '0:31',
    modified: '15/02/2022',
  },
  {
    name: 'Sound 2',
    fileType: 'wav',
    length: '3:00',
    modified: '10 hours ago',
  },
  {
    name: 'Sound 1',
    fileType: 'mp3',
    length: '1:54',
    modified: '5 minutes ago',
  },
];

function ListView() {
  return (
    <Group spacing={7} direction="column" sx={{ width: '100%' }}>
      {sounds.map(sound => (
        <Paper padding="md" shadow="xs" key={sound.name} sx={{ width: '100%' }}>
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
              <KebabHorizontalIcon />
              <UnmuteIcon />
              <PencilIcon />
              <HeartIcon />
              <XCircleFillIcon />
            </Group>
          </Group>
        </Paper>
      ))}
    </Group>
  );
}

export default ListView;
