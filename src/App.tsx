import { Layout } from './components/templates/layout';
import { Home } from './pages/Home';
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    // Error Page
    errorElement: <Error />,
  },
  {
    path: '/books',
    element: <div>도서 목록</div>,
  },
  {
    path: '/books',
    element: <div>도서 목록</div>,
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
