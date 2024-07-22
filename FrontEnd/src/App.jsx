import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Register } from './components/User/Register';
import { RegisterEmpresa } from './components/User/RegisterEmpresa';
import {EditEmpresa} from './components/User/EditEmpresa'
import {EditUser} from './components/User/EditUser'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = { <Layout /> }>
          <Route path='/' element = { <Home /> } />
          <Route path='/register' element = { <Register /> } />
          <Route path='/registerEmpresa' element = { <RegisterEmpresa /> } />
          <Route path='/EditEmpresa' element = { <EditEmpresa /> } />
          <Route path='/EditUser' element = { <EditUser /> } />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
