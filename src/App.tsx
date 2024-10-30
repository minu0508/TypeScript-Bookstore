import { Layout } from './components/common/layout/Layout';
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
