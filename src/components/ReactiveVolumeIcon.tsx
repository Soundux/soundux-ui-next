import {
  SpeakerOffIcon,
  SpeakerQuietIcon,
  SpeakerModerateIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons';

interface ReactiveVolumeIconProps {
  volume: number;
}

function ReactiveVolumeIcon({ volume }: ReactiveVolumeIconProps) {
  return (
    <>
      {volume === 0 && <SpeakerOffIcon />}
      {volume > 0 && volume < 33 && <SpeakerQuietIcon />}
      {volume >= 33 && volume < 66 && <SpeakerModerateIcon />}
      {volume >= 66 && <SpeakerLoudIcon />}
    </>
  );
}

export default ReactiveVolumeIcon;
