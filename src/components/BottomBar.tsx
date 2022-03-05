import { Group, Paper, Slider, SliderProps, Text } from '@mantine/core';
import {
  HeartIcon,
  IterationsIcon,
  MultiSelectIcon,
  MuteIcon,
  SyncIcon,
  UnmuteIcon,
  XCircleFillIcon,
} from '@primer/octicons-react';

function StyledSlider(props: SliderProps) {
  return (
    <Slider
      labelTransition="fade"
      size={5}
      styles={theme => ({
        track: {
          backgroundColor: theme.colors.dark[3],
        },
        bar: {
          backgroundColor: theme.colors.dark[2],
        },
        root: {
          '&:hover .mantine-Slider-thumb': {
            height: 12,
            width: 12,
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
            boxShadow: theme.shadows.sm,
          },

          '&:active .mantine-Slider-bar': {
            backgroundColor: theme.colors.accent2[7],
          },
          '&:hover .mantine-Slider-bar': {
            backgroundColor: theme.colors.accent2[7],
          },
        },
        thumb: {
          height: 0,
          width: 0,
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
        padding={15}
        radius={0}
        sx={{ position: 'fixed', bottom: 0, width: 'calc(100vw - 300px)', marginLeft: '-16px' }}
      >
        <Group position="apart" noWrap>
          <Group noWrap>
            <Group direction="column" align="start" noWrap spacing={0}>
              <Text>Sound 1.mp3</Text>
              <Text>Sounds_1</Text>
            </Group>
            <HeartIcon />
          </Group>
          <Group direction="column" align="center">
            <Group>
              <IterationsIcon />
              <XCircleFillIcon size="medium" />
              <SyncIcon />
            </Group>
            <Group noWrap>
              <Text>X:XX</Text>
              <StyledSlider defaultValue={50} sx={{ width: '500px' }} />
              <Text>X:XX</Text>
            </Group>
          </Group>
          <Group noWrap>
            <MultiSelectIcon />
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
