import {Route, Routes, BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, json} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import Documentation from './pages/Documentation';
import PastCheckPage from './pages/PastCheckPage';
import Settings from './pages/Settings';
import ChecksPage from './pages/ChecksPage';
import BlogPage, {blogLoader} from './pages/BlogPage';
import CheckPage, { checkLoader } from './pages/CheckPage';
import EditCheckPage from './pages/EditCheckPage';
import EditSettings from './pages/EditSettings';
import Login from './pages/Login';
import NotFound from './pages/NotFound';


const App = () => {


    // Testing Local Storage
    localStorage.setItem("name", "John Doe");  
    localStorage.setItem("email", "johndoe@gmail.com"); 
    localStorage.setItem("wachtwoord", "Johnspassword"); 
    localStorage.setItem("melding", "uit"); 
    localStorage.setItem("modus", "licht"); 
    localStorage.setItem("avatar", "../public/images/userIcon.png"); 
  // Update Check
  const updateCheck = async (check) => {
    const res = await fetch(`https://my-json-server.typicode.com/DavidvdBent/realestatedatabase/checks/${check.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(check)
    });
    return;
  }
  
  const routesJSX = [
    (
              <Route path='/' element = {<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/checkspage' element={<ChecksPage />} />
              {/* TODO: Using Checksloader instead -->  to show all checks */}
              <Route path='/checks/:id' element={<CheckPage  addEditCheck={updateCheck}/>} loader={checkLoader}/>
              <Route path='/blogs/:id' element={<BlogPage/>} loader={blogLoader}/>
              <Route path='/edit-checks/:id' element={<EditCheckPage  addEditCheck={updateCheck}/>} loader={checkLoader}/>
              {/* TODO: Use CheckLoader for editing Page */}
              <Route path='/pastcheckpage' element={<PastCheckPage />} />
              <Route path='/documentation' element={<Documentation/>} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/edit-settings' element={<EditSettings />} />
              <Route path='*' element={<NotFound />} />
            </Route>

    ), (
              <Route path='/login' element = {<Login />}></Route>
    )
  ]


const routes = createRoutesFromElements(routesJSX);

const router = createBrowserRouter(routes);


return <RouterProvider router={router} />;
}


export default App
