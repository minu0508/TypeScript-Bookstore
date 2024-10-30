import { Layout } from './components/templates/layout';
import { Home } from './pages/Home';
import { BookStoreThemeProvider } from './context/themeContext';

function App() {
  return (
    <BookStoreThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
