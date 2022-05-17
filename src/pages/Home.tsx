import ListView from '../components/views/ListView';
import BottomBar from '../components/BottomBar';
import { useAtom } from 'jotai';
import { selectedFolderAtom } from '../store';
import { Center, Text } from '@mantine/core';

function Home() {
  const [selectedFolder] = useAtom(selectedFolderAtom);

  return (
    <>
      {selectedFolder !== null ? (
        <ListView />
      ) : (
        <Center>
          <Text>No folder selected</Text>
        </Center>
      )}
      <BottomBar />
    </>
  );
}

export default Home;
