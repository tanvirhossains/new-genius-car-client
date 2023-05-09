import logo from './logo.svg';
import './App.css';
import router from './Routes/Routes';
import Main from './Layout/Main/Main';
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <div className=" max-w-screen-lg mx-auto">
      <RouterProvider router={router} >
        <Main>

        <Toaster />
        </Main>
      </RouterProvider>
    </div>
  );
}

export default App;
