import { AppShell, Header, MantineProvider, Navbar } from '@mantine/core';
import { Tuple } from '@mantine/styles/lib/theme/types/Tuple';
import { Routes, Route, useResolvedPath, useMatch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Settings from './pages/Settings';
import VirtualDevices from './pages/VirtualDevices';
import PassThrough from './pages/PassThrough';
import About from './pages/About';
import SoundEditor from './pages/SoundEditor';
import Welcome from './pages/Welcome';
import Tutorial from './pages/Tutorial';

// TODO: 300 as global variable (needed in navbar width and bottom bar width calculation)

function App() {
  const resolved = useResolvedPath('/');
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Open Sans',
        primaryColor: 'accent2',
        colors: {
          accent: new Array<string>(10).fill('#7E7BED') as Tuple<string, 10>,
          accent2: new Array<string>(10).fill('#536DFE') as Tuple<string, 10>,
        },
        // TODO: customize headings?
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <AppShell
        fixed
        navbar={
          match ? (
            <Navbar width={{ base: 300 }} padding="xs">
              <AppNavbar />
            </Navbar>
          ) : undefined
        }
        header={
          <Header height={60}>
            <AppHeader />
          </Header>
        }
        styles={theme => ({
          main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
        sx={{
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/virtualDevices" element={<VirtualDevices />} />
          <Route path="/passThrough" element={<PassThrough />} />
          <Route path="/soundEditor" element={<SoundEditor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
