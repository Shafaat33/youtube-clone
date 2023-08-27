import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Header';
import MainContainer from './components/MainContainer';
import store from './components/utils/store';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
