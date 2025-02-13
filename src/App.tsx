import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Error } from './pages/Error';
import { Login } from './pages/Login';
import { Order } from './pages/Order';
import { Books } from './pages/Book/Books';
import { Signup } from './pages/Signup';
import { Layout } from './components/templates/layout';
import { OrderList } from './pages/OrderList';
import { BookDetail } from './pages/Book/BookDetail';
import { ResetPassword } from './pages/ResetPassword';
import { QueryClientProvider } from 'react-query';
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { queryClient } from './api/queryClient';

const routeList = [
  {
    path: '/',
    element: <Home />,
    // Error Page
    errorElement: <Error />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/book/:bookId',
    element: <BookDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/orderlist',
    element: <OrderList />,
  },
];

const newRouteList = routeList.map((item) => {
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error />,
  };
});

const router = createBrowserRouter(newRouteList);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
