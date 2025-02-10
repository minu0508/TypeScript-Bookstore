import { Layout } from './components/templates/layout';
import { Home } from './pages/Home';
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages/Error';
import { Signup } from './pages/Signup';
import { ResetPassword } from './pages/ResetPassword';
import { Login } from './pages/Login';
import { Books } from './pages/Book/Books';
import { BookDetail } from './pages/Book/BookDetail';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';
import { OrderList } from './pages/OrderList';

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
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
