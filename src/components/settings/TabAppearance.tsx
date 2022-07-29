import { CheckIcon, FileDirectoryIcon, PaintbrushIcon } from '@primer/octicons-react';
import {
  Card,
  ColorInput,
  ColorSwatch,
  Divider,
  Group,
  Input,
  Popover,
  Radio,
  Slider,
  Stack,
  Switch,
  Text,
  TransferList,
  TransferListData,
  useMantineTheme,
} from '@mantine/core';
import GradientButton from '../input/GradientButton';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { enableTransparencySetting, transparencySetting } from '../../store/settings';

const initialValues: TransferListData = [
  [{ value: 'example', label: 'Example.css' }],
  [{ value: 'example2', label: 'Example.css' }],
];

function TabAppearance() {
  const theme = useMantineTheme();

  const [useTransparency, setUseTransparency] = useAtom(enableTransparencySetting);
  const [transparency, setTransparency] = useAtom(transparencySetting);

  const [customCssData, setCustomCssData] = useState<TransferListData>(initialValues);
  const [opened, setOpened] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [selectedCustomColor, setSelectedCustomColor] = useState<string>('#ffff');

  return (
    <Card p="xl" radius="lg">
      <Text mb="md" weight={500}>
        Appearance
      </Text>
      <Text size="sm">Personalize your appearance</Text>
      <Divider my="lg" variant="dotted" />
      <Stack align="start">
        <Switch
          checked={useTransparency}
          onChange={event => setUseTransparency(event.target.checked)}
          label="Enable transparency"
          size="md"
        />
        <Slider
          value={transparency}
          onChange={setTransparency}
          label={value => `${value}%`}
          marks={[{ value: 25 }, { value: 50 }, { value: 75 }]}
          sx={{ width: '100%' }}
          disabled={!useTransparency}
        />
        <Input.Wrapper label="Accent Color" size="md">
          <Group spacing="xs">
            <ColorSwatch color={theme.colors.accent[7]}>
              <CheckIcon />
            </ColorSwatch>
            <ColorSwatch color="#51B18E" />
            <ColorSwatch color="#FA5252" />
            <ColorSwatch color="#7950F2" />
            <ColorSwatch color="#4C6EF5" />
            <ColorSwatch color="#228BE6" />
            <ColorSwatch color="#12B886" />
            <ColorSwatch color="#82C91E" />
            <ColorSwatch color="#FAB005" />
            <ColorSwatch color="#40C057" />
            <Popover
              opened={opened}
              onClose={() => setOpened(false)}
              position="bottom-end"
              // withCloseButton
              // transition="pop-top-right"
              // transitionDuration={0}
              width={260}
              withArrow
              // closeOnClickOutside={false}
              styles={theme => ({
                body: {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                },
                arrow: {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                },
              })}
            >
              <Popover.Target>
                <ColorSwatch
                  color={selectedCustomColor}
                  onClick={() => setOpened(true)}
                  sx={{
                    background: 'linear-gradient(180deg, #0359FF 0%, #B92A5D 100%)',
                    // '& .mantine-ColorSwatch-overlay': {
                    //   background: 'linear-gradient(180deg, #0359FF 0%, #B92A5D 100%)',
                    // },
                  }}
                >
                  <PaintbrushIcon />
                </ColorSwatch>
              </Popover.Target>
              <Popover.Dropdown>
                <ColorInput
                  value={selectedCustomColor}
                  onChange={setSelectedCustomColor}
                  withinPortal={false}
                />
              </Popover.Dropdown>
            </Popover>
          </Group>
        </Input.Wrapper>
        <Radio.Group value={viewMode} onChange={setViewMode} label="View Mode">
          <Radio value="list" label="List" />
          <Radio value="grid" label="Grid" />
          <Radio value="launchpad" label="Launchpad" />
        </Radio.Group>
        <TransferList
          value={customCssData}
          onChange={setCustomCssData}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={['Available CSS', 'Enabled CSS']}
          sx={{ width: '100%' }}
        />
        <GradientButton leftIcon={<FileDirectoryIcon />}>Open Custom CSS Folder</GradientButton>
      </Stack>
    </Card>
  );
}

export default TabAppearance;
