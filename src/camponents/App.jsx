import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/LandingPage';
import DailyWeather from './pages/DailyWeather';
import UserProfile from './pages/UserProfile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EmergencyCantact from './pages/EmergencyCantact';


function App() {


  return (
    
      <Router>
        <Routes> 
           <Route path='/' element={<Landing/>} />
           <Route path='EmergencyCantact' element={<EmergencyCantact/>} />
           <Route path='AboutUs' element={<AboutUs/>} />
           <Route path='ContactUs' element={<ContactUs/>} />
                 <Route path='DailyWeather' element={<DailyWeather/>} />
                 <Route path='UserProfile' element={<UserProfile/>} />
                 <Route path='SignUp' element={<SignUp/>} />
                 <Route path='SignIn' element={<SignIn/>} />

       
   
        </Routes>
    
    </Router>
  )
}

export default App
