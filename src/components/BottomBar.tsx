import { ActionIcon, Group, Paper, Slider, SliderProps, Text } from '@mantine/core';
import {
  HeartIcon,
  IterationsIcon,
  MultiSelectIcon,
  MuteIcon,
  SyncIcon,
  UnmuteIcon,
  XCircleFillIcon,
} from '@primer/octicons-react';
import { useHover } from '@mantine/hooks';

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
  return (
    <>
      <Paper
        p={15}
        radius={0}
        sx={{ position: 'fixed', bottom: 0, width: 'calc(100vw - 300px)', marginLeft: '-16px' }}
      >
        <Group position="apart" noWrap>
          <Group noWrap>
            <Group direction="column" align="start" noWrap spacing={0}>
              <Text>Sound 1.mp3</Text>
              <Text>Sounds_1</Text>
            </Group>
            <ActionIcon variant="transparent">
              <HeartIcon />
            </ActionIcon>
          </Group>
          <Group direction="column" align="center">
            <Group>
              <ActionIcon variant="transparent">
                <IterationsIcon />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <XCircleFillIcon size="medium" />
              </ActionIcon>
              <ActionIcon variant="transparent">
                <SyncIcon />
              </ActionIcon>
            </Group>
            <Group noWrap>
              <Text>X:XX</Text>
              <StyledSlider defaultValue={50} sx={{ width: '500px' }} />
              <Text>X:XX</Text>
            </Group>
          </Group>
          <Group noWrap>
            <ActionIcon variant="transparent" size="xs">
              <MultiSelectIcon />
            </ActionIcon>
            <Group direction="column">
              <Group noWrap>
                <UnmuteIcon />
                <StyledSlider label={value => `${value}%`} defaultValue={50} sx={{ width: '200px' }} />
              </Group>
              <Group noWrap>
                <MuteIcon />
                <StyledSlider label={value => `${value}%`} defaultValue={0} sx={{ width: '200px' }} />
              </Group>
            </Group>
          </Group>
        </Group>
      </Paper>
    </>
  );
}

export default BottomBar;
