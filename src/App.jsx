import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BlogPage from './pages/BlogPage';
import InspectiePage from './pages/InspectiePage';
import EditInspectiePage from './pages/EditInspectiePage';
import LoginLayout from './layouts/LoginLayout';
import HomeLayout from './layouts/HomeLayout';
import SearchPage from './pages/SearchPage';
import TwoFactorPage from './pages/TwoFactorPage';
import ViewInspectiePage from './pages/ViewInspectiePage';
import InspectiesPage from './pages/InspectiesPage';
import OudeInspectiesPage from './pages/OudeInspectiesPage';
import KennisBankPage from './pages/KennisBankPage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/SettingsPage';
import EditSettingsPage from './pages/EditSettingsPage';
import LoginPage from './pages/LoginPage';



const App = () => {


  localStorage.setItem("name", "John Doe");  
  localStorage.setItem("email", "johndoe@gmail.com"); 
  localStorage.setItem("wachtwoord", "Johnspassword"); 
  localStorage.setItem("melding", true); 
  localStorage.setItem("2fa", true); 
  localStorage.setItem("tfa-code", 4224);
  localStorage.setItem("modus", "licht"); 
  localStorage.setItem("avatar", "/images/inspecteur.jpg"); 
  
  const routesJSX = [
    (
      <Route path='/' element = {<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    ),
    (
      <Route path='/app' element = {<MainLayout />}>
        <Route path='/app/inspecties' element={<InspectiesPage />} />
        <Route path='/app/inspectie/:id' element={<InspectiePage/>}/>
        <Route path='/app/blogs/:id' element={<BlogPage/>} />
        <Route path='/app/edit-inspecties/:id' element={<EditInspectiePage/>}/>
        <Route path='/app/oude-inspecties' element={<OudeInspectiesPage />} />
        <Route path='/app/view-inspectie/:id' element={<ViewInspectiePage/>}/>
        <Route path='/app/kennisbank' element={<KennisBankPage/>} />
        <Route path='/app/settings' element={<SettingsPage />} />
        <Route path='/app/edit-settings' element={<EditSettingsPage />} />
        <Route path='/app/search' element={<SearchPage />} />
        <Route path='/app/*' element={<NotFoundPage />} />
    </Route>

    ), (
        <Route path='/login' element = {<LoginLayout />}>
          <Route index element={<LoginPage />}/>
          <Route path='/login/2fa' element={<TwoFactorPage/>}/>
        </Route>
      )
  ]


const routes = createRoutesFromElements(routesJSX);

const router = createBrowserRouter(routes);


return <RouterProvider router={router} />;
}


export default App
