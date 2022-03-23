import { Button } from '@mantine/core';
import { ChevronRightIcon } from '@primer/octicons-react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

function OutputSelection() {
  return (
    <Button
      radius="xl"
      variant="gradient"
      leftIcon={<DiscordLogoIcon width={24} height={24} />}
      rightIcon={<ChevronRightIcon size={24} />}
      sx={{
        background: 'linear-gradient(180deg, #7D7BEE 0%, #596FFC 100%)',
        padding: '0 10px',
      }}
      styles={{
        rightIcon: {
          marginLeft: 'auto',
        },
      }}
    >
      Discord
    </Button>
  );
}

export default OutputSelection;
