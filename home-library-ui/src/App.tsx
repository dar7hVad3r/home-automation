import { Container } from '@mui/system';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CustomRoutes from './components/CostomRoutes';

function App() {
  const [authStatus, setAuthStatus] = useState(true)
  const [user, setUser] = useState('user')
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <CustomRoutes isLoggedIn={authStatus} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
