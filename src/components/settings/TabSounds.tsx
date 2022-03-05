import { Card, Divider, Group, MultiSelect, SelectItem, Switch, Text } from '@mantine/core';
import { useState } from 'react';

const playbackDevices: SelectItem[] = [
  { value: 'default', label: 'Default' },
  { value: 'other', label: 'Other' },
];

function TabSounds() {
  const [localPlaybackDevice, setLocalPlaybackDevice] = useState<string[]>(['default', 'other']);
  const [remotePlaybackDevice, setRemotePlaybackDevice] = useState<string[]>(['default', 'other']);
  const [allowSoundOverlapping, setAllowSoundOverlapping] = useState(true);
  const [muteDuringPlayback, setMuteDuringPlayback] = useState(true);
  const [volumeNormalization, setVolumeNormalization] = useState(true);

  return (
    <Card padding="lg" radius="lg">
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
          onChange={event => setAllowSoundOverlapping(event.currentTarget.checked)}
          label="Allow sound overlapping"
          size="md"
        />
        <Switch
          checked={muteDuringPlayback}
          onChange={event => setMuteDuringPlayback(event.currentTarget.checked)}
          label="Mute during playback"
          size="md"
        />
        <Switch
          checked={volumeNormalization}
          onChange={event => setVolumeNormalization(event.currentTarget.checked)}
          label="Volume normalization (Experimental)"
          size="md"
        />
      </Group>
    </Card>
  );
}

export default TabSounds;
