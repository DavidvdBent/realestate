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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBERKmehzzf_TOqynZRuPKtGRSMhdLtwlQ",
  authDomain: "realestatecare-f7825.firebaseapp.com",
  projectId: "realestatecare-f7825",
  storageBucket: "realestatecare-f7825.appspot.com",
  messagingSenderId: "97402122737",
  appId: "1:97402122737:web:6a8544df918c7cc7c99450",
  measurementId: "G-3QFTBJDGS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
    const res = await fetch(`http://localhost:5000/checks/${check.id}`, {
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
