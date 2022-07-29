import { ActionIcon, Group, Paper, Slider, SliderProps, Stack, Text } from '@mantine/core';
import { PauseIcon, PlayIcon } from '@radix-ui/react-icons';
import { HeartIcon, IterationsIcon, MultiSelectIcon, SyncIcon } from '@primer/octicons-react';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';
import ReactiveVolumeIcon from './ReactiveVolumeIcon';

function StyledSlider(props: SliderProps) {
  const { hovered, ref } = useHover();

  return (
    <Slider
      labelTransition="fade"
      size={5}
      ref={ref}
      styles={theme => ({
        track: {
          backgroundColor: theme.colors.dark[3],
        },
        bar: {
          backgroundColor: hovered ? theme.colors.accent2[7] : theme.colors.dark[2],
        },
        root: {
          '&:active .mantine-Slider-bar': {
            backgroundColor: theme.colors.accent2[7],
          },
        },
        thumb: {
          height: 12,
          width: 12,
          // transition: 'opacity 150ms ease',
          opacity: hovered ? 1 : 0,
          backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[4],
          boxShadow: theme.shadows.sm,
          border: 0,
        },
      })}
      {...props}
    >
      {props.children}
    </Slider>
  );
}

function BottomBar() {
  const [paused, setPaused] = useState(false);

  const [localVolume, setLocalVolume] = useState(50);
  const [remoteVolume, setRemoteVolume] = useState(0);

  return (
    <>
      <Paper
        p={15}
        radius={0}
        sx={{ position: 'fixed', bottom: 0, width: 'calc(100vw - 300px)', marginLeft: '-16px' }}
      >
        <Group position="apart" noWrap>
          <Group noWrap>
            <Stack align="start" spacing={0}>
              <Text>Sound 1.mp3</Text>
              <Text>Sounds_1</Text>
            </Stack>
            <ActionIcon variant="transparent">
              <HeartIcon />
            </ActionIcon>
          </Group>
          <Stack align="center">
            <Group>
              <ActionIcon variant="transparent" size="xs">
                <IterationsIcon />
              </ActionIcon>
              <ActionIcon
                variant="filled"
                radius="xl"
                color="accent2"
                size="lg"
                onClick={() => setPaused(!paused)}
              >
                {paused ? <PlayIcon height={25} width={25} /> : <PauseIcon height={25} width={25} />}
              </ActionIcon>
              <ActionIcon variant="transparent" size="xs">
                <SyncIcon />
              </ActionIcon>
            </Group>
            <Group noWrap>
              <Text>X:XX</Text>
              <StyledSlider defaultValue={50} sx={{ width: '500px' }} />
              <Text>X:XX</Text>
            </Group>
          </Stack>
          <Group noWrap>
            <ActionIcon variant="transparent" size="xs">
              <MultiSelectIcon />
            </ActionIcon>
            <Stack>
              <Group noWrap>
                <ReactiveVolumeIcon volume={localVolume} />
                <StyledSlider
                  label={value => `${value}%`}
                  value={localVolume}
                  onChange={setLocalVolume}
                  sx={{ width: '200px' }}
                />
              </Group>
              <Group noWrap>
                <ReactiveVolumeIcon volume={remoteVolume} />
                <StyledSlider
                  label={value => `${value}%`}
                  value={remoteVolume}
                  onChange={setRemoteVolume}
                  sx={{ width: '200px' }}
                />
              </Group>
            </Stack>
          </Group>
        </Group>
      </Paper>
    </>
  );
}

export default BottomBar;
