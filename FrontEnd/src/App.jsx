import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Register } from './components/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = { <Layout /> }>
          <Route path='/' element = { <Home /> } />
          <Route path='/register' element = { <Register /> } />

        </Route>
      </Routes>
    </>
  )
}

export default App
