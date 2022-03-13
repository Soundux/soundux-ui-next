import { Card, Divider, Group, MultiSelect, SelectItem, Switch, Text } from '@mantine/core';
import { useState } from 'react';
import { useInputState } from '@mantine/hooks';

const playbackDevices: SelectItem[] = [
  { value: 'default', label: 'Default' },
  { value: 'other', label: 'Other' },
];

function TabSounds() {
  const [localPlaybackDevice, setLocalPlaybackDevice] = useState<string[]>(['default', 'other']);
  const [remotePlaybackDevice, setRemotePlaybackDevice] = useState<string[]>(['default', 'other']);
  const [allowSoundOverlapping, setAllowSoundOverlapping] = useInputState(true);
  const [muteDuringPlayback, setMuteDuringPlayback] = useInputState(true);
  const [volumeNormalization, setVolumeNormalization] = useInputState(true);

  return (
    <Card p="lg" radius="lg">
      <Text mb="md" weight={500}>
        Sounds
      </Text>
      <Text size="sm">Settings related to sound playback</Text>
      <Divider my="lg" variant="dotted" />
      <Group direction="column" grow>
        <MultiSelect
          data={playbackDevices}
          value={localPlaybackDevice}
          onChange={setLocalPlaybackDevice}
          label="Local Playback Device"
          placeholder="Choose your speakers"
        />
        <MultiSelect
          data={playbackDevices}
          value={remotePlaybackDevice}
          onChange={setRemotePlaybackDevice}
          label="Microphone"
          placeholder="Choose your microphones"
        />
        <Switch
          checked={allowSoundOverlapping}
          onChange={setAllowSoundOverlapping}
          label="Allow sound overlapping"
          size="md"
        />
        <Switch
          checked={muteDuringPlayback}
          onChange={setMuteDuringPlayback}
          label="Mute during playback"
          size="md"
        />
        <Switch
          checked={volumeNormalization}
          onChange={setVolumeNormalization}
          label="Volume normalization (Experimental)"
          size="md"
        />
      </Group>
    </Card>
  );
}

export default TabSounds;
