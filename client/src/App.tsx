import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuthStore } from './store/auth';


function App() {
  const isAuth = useAuthStore(state => state.isAuth)


  return (
    <BrowserRouter>

      <Navigation/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path='/profile' element={
              <ProfilePage/>
          }/>
        </Route>

        

      </Routes>
    </BrowserRouter>
  )
}

export default App
