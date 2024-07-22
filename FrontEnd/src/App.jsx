import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Register } from './components/User/Register';
import { RegisterEmpresa } from './components/User/RegisterEmpresa';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = { <Layout /> }>
          <Route path='/' element = { <Home /> } />
          <Route path='/register' element = { <Register /> } />
          <Route path='/registerEmpresa' element = { <RegisterEmpresa /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
