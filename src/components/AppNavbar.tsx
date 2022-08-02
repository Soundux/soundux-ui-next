import { Divider, Navbar, ScrollArea } from '@mantine/core';
import NavbarButton from './button/NavbarButton';
import { ChevronRightIcon, HeartIcon } from '@primer/octicons-react';
import { useAtom } from 'jotai';
import { foldersAtom } from '../store';
import FolderButton from './button/FolderButton';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';

function AppNavbar() {
  const [folders, setFolders] = useAtom(foldersAtom);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setFolders(currentFolders => {
        const oldFolder = currentFolders.find(folder => folder.id == active.id);
        const newFolder = currentFolders.find(folder => folder.id == over.id);

        if (!oldFolder || !newFolder) return currentFolders;

        const oldIndex = currentFolders.indexOf(oldFolder);
        const newIndex = currentFolders.indexOf(newFolder);

        return arrayMove(currentFolders, oldIndex, newIndex);
      });
    }
  }

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mr={-10} sx={{ paddingRight: 10, paddingBottom: 10 }} component={ScrollArea}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToParentElement]}
        >
          <SortableContext items={folders} strategy={verticalListSortingStrategy}>
            {folders.map(folder => (
              <FolderButton key={folder.id} folder={folder} />
            ))}
          </SortableContext>
        </DndContext>
      </Navbar.Section>

      <Divider sx={{ marginBottom: '10px' }} />

      <Navbar.Section>
        <NavbarButton
          icon={<HeartIcon />}
          color="red"
          label="Favorites"
          endIcon={<ChevronRightIcon />}
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default AppNavbar;
