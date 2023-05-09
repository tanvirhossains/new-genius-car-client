import logo from './logo.svg';
import './App.css';
import router from './Routes/Routes';
import Main from './Layout/Main/Main';
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <RouterProvider router={router} >
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
