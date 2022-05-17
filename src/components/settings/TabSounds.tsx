import { Card, Divider, Group, MultiSelect, Switch, Text } from '@mantine/core';
import { useAtom } from 'jotai';
import {
  allowSoundOverlappingSetting,
  localPlaybackDeviceSetting,
  remotePlaybackDeviceSetting,
  muteDuringPlaybackSetting,
  volumeNormalizationSetting,
} from '../../store/settings';
import { availableMicrophonesAtom, playbackDevicesAtom } from '../../store';

function TabSounds() {
  const [playbackDevices] = useAtom(playbackDevicesAtom);
  const [availableMicrophones] = useAtom(availableMicrophonesAtom);

  const [localPlaybackDevice, setLocalPlaybackDevice] = useAtom(localPlaybackDeviceSetting);
  const [remotePlaybackDevice, setRemotePlaybackDevice] = useAtom(remotePlaybackDeviceSetting);
  const [allowSoundOverlapping, setAllowSoundOverlapping] = useAtom(allowSoundOverlappingSetting);
  const [muteDuringPlayback, setMuteDuringPlayback] = useAtom(muteDuringPlaybackSetting);
  const [volumeNormalization, setVolumeNormalization] = useAtom(volumeNormalizationSetting);

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
          data={availableMicrophones}
          value={remotePlaybackDevice}
          onChange={setRemotePlaybackDevice}
          label="Microphone"
          placeholder="Choose your microphones"
        />
        <Switch
          checked={allowSoundOverlapping}
          onChange={event => setAllowSoundOverlapping(event.target.checked)}
          label="Allow sound overlapping"
          size="md"
        />
        <Switch
          checked={muteDuringPlayback}
          onChange={event => setMuteDuringPlayback(event.target.checked)}
          label="Mute during playback"
          size="md"
        />
        <Switch
          checked={volumeNormalization}
          onChange={event => setVolumeNormalization(event.target.checked)}
          label="Volume normalization (Experimental)"
          size="md"
        />
      </Group>
    </Card>
  );
}

export default TabSounds;
