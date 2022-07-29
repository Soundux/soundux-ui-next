import {
  Button,
  Card,
  Center,
  Divider,
  Group,
  Paper,
  Select,
  SelectItem,
  Stack,
  Text,
} from '@mantine/core';
import Wave from '../assets/wave.png';
import { useState } from 'react';
import { CheckIcon, CopyIcon, UnmuteIcon } from '@primer/octicons-react';
import GradientButton from '../components/input/GradientButton';
import { ScissorsIcon } from '@radix-ui/react-icons';
import { useAtom } from 'jotai';
import { foldersAtom } from '../store';

const enum Mode {
  CUT,
  VOLUME,
}

function SoundEditor() {
  const [selected, setSelected] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>(Mode.CUT);

  const [folders] = useAtom(foldersAtom);

  // map sounds to select items with folder groups
  const sounds: SelectItem[] = folders.flatMap(folder =>
    folder.sounds.map(sound => ({
      value: `${folder.id} ${sound.id}`,
      label: sound.name,
      group: folder.name,
    }))
  );

  return (
    <Center sx={{ height: 'calc(100vh - 92px)' }}>
      <Card p="lg" radius="lg" sx={{ height: '85%', width: '90%' }}>
        <Stack spacing={0} sx={{ height: '100%' }}>
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
          {selected ? (
            <>
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
            </>
          ) : (
            <Center>
              <Text>No sound selected</Text>
            </Center>
          )}
        </Stack>
      </Card>
    </Center>
  );
}

export default SoundEditor;
