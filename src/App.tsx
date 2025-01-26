
import { Outlet } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';


function App() {
  return (
     <div>
       <Navbar/>
       <Outlet></Outlet>
     </div>
  )
}

export default App
