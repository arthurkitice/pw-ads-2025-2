import { Routes, Route } from 'react-router-dom'


import Homepage from '../pages/Homepage'


import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'
import Prova2 from '../pages/Prova2'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />
   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/sobremim" element={ <Prova2 /> } />
  
 </Routes>
}
