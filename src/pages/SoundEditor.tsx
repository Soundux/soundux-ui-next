import { Button, Card, Center, Divider, Group, Paper, Select, SelectItem, Text } from '@mantine/core';
import Wave from '../assets/wave.png';
import { useState } from 'react';
import { CheckIcon, CopyIcon, UnmuteIcon } from '@primer/octicons-react';
import GradientButton from '../components/input/GradientButton';
import { ScissorsIcon } from '@radix-ui/react-icons';

const sounds: SelectItem[] = [
  { value: 'test', label: 'Test.mp3', group: 'Sounds 1' },
  { value: 'test2', label: 'Test 2.mp3', group: 'Sounds 2' },
  { value: 'test3', label: 'Test 3.mp3', group: 'Sounds 2' },
  { value: 'test4', label: 'Test 4.mp3', group: 'Sounds 3' },
];

const enum Mode {
  CUT,
  VOLUME,
}

function SoundEditor() {
  const [selected, setSelected] = useState<string | null>('test');
  const [mode, setMode] = useState<Mode>(Mode.CUT);

  return (
    <Center sx={{ height: 'calc(100vh - 92px)' }}>
      <Card padding="lg" radius="lg" sx={{ height: '85%', width: '90%' }}>
        <Group direction="column" spacing={0} align="stretch" noWrap sx={{ height: '100%' }}>
          <Text mb="md" weight={500}>
            Sound
          </Text>
          <Group position="apart">
            <Select
              placeholder="Sound Name"
              data={sounds}
              value={selected}
              onChange={setSelected}
              sx={{ width: '420px' }}
            />
            <Group
              spacing={0}
              sx={theme => ({
                '& > button:first-of-type': {
                  borderTopLeftRadius: theme.radius.md,
                  borderBottomLeftRadius: theme.radius.md,
                },

                '& > button:last-of-type': {
                  borderTopRightRadius: theme.radius.md,
                  borderBottomRightRadius: theme.radius.md,
                },
              })}
            >
              <Button
                radius={0}
                color={mode === Mode.CUT ? 'accent2' : 'dark'}
                onClick={() => setMode(Mode.CUT)}
              >
                <ScissorsIcon />
              </Button>
              <Button
                radius={0}
                color={mode === Mode.VOLUME ? 'accent2' : 'dark'}
                onClick={() => setMode(Mode.VOLUME)}
              >
                <UnmuteIcon />
              </Button>
            </Group>
          </Group>
          <Divider my="lg" variant="dotted" />
          <Paper
            radius="lg"
            sx={theme => ({
              backgroundColor: theme.colors.dark[7],
              position: 'relative',
              marginBottom: 'auto',
              marginTop: 'auto',
              height: '190px',
            })}
          >
            <img src={Wave} alt="Wave" style={{ height: '100%', position: 'absolute', zIndex: 1 }} />
            <Divider
              variant="dashed"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '97.5%',
                zIndex: 0,
              }}
            />
          </Paper>
          <Group position="right" mb="xs">
            <GradientButton leftIcon={<CopyIcon />}>Save as copy</GradientButton>
            <GradientButton leftIcon={<CheckIcon />}>Save</GradientButton>
          </Group>
        </Group>
      </Card>
    </Center>
  );
}

export default SoundEditor;
