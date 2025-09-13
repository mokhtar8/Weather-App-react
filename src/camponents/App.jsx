import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import DailyWeather from './pages/DailyWeather';
import UserProfile from './pages/UserProfile';


function App() {


  return (
    
      <Router>
        <Routes> 
           <Route path='/' element={<LandingPage/>} />
                 <Route path='DailyWeather' element={<DailyWeather/>} />
                 <Route path='UserProfile' element={<UserProfile/>} />
                 <Route path='SignUp' element={<SignUp/>} />
                 <Route path='SignIn' element={<SignIn/>} />

       
   
        </Routes>
    
    </Router>
  )
}

export default App
