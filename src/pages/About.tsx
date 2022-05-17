import { Card, Center, Group, Text } from '@mantine/core';
import GradientButton from '../components/input/GradientButton';
import { HeartIcon, HomeIcon, InfoIcon, LawIcon } from '@primer/octicons-react';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/Logo';

function About() {
  return (
    <Center sx={{ height: 'calc(100vh - 92px)' }}>
      <Card p="xl" radius="lg" sx={{ maxWidth: '700px', position: 'relative' }}>
        <Logo style={{ position: 'absolute', left: -45, top: 0 }} />
        <Group noWrap>
          <Logo style={{ visibility: 'hidden' }} />
          <Group direction="column">
            <Text weight={600}>Soundux 3.0 &quot;Epsilon&quot; (Beta)</Text>
            <Text weight={300}>
              Soundux is a cross-platform soundboard that features a simple user interface. With Soundux
              you can play audio to a specific application on Linux and to your VB-CABLE sink on Windows.
            </Text>
          </Group>
        </Group>
        <Group position="right">
          <GradientButton leftIcon={<InfoIcon />}>System Info</GradientButton>
          <GradientButton leftIcon={<LawIcon />}>Licenses</GradientButton>
          <GradientButton
            leftIcon={<HomeIcon />}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundux.rocks"
          >
            Website
          </GradientButton>
          <GradientButton
            leftIcon={<FontAwesomeIcon icon={faDiscord} />}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/4HwSGN4Ec2"
          >
            Discord
          </GradientButton>
          <GradientButton
            leftIcon={<HeartIcon />}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ko-fi.com/soundux"
          >
            Support us
          </GradientButton>
        </Group>
      </Card>
    </Center>
  );
}

export default About;
