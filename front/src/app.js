// средства маршрутизации
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// стили
import { Container } from 'react-bootstrap'
// компоненты
import ChatRoom from './components/ChatRoom/ChatRoom'
import Home from './components/Home/Home'

export const App = () => (
  <Router>
    <Container style={{ maxWidth: '512px' }}>
      <h1 className='mt-2 text-center'>React Chat App</h1>
      <Routes>
        <Route path='/:roomId' element={<ChatRoom />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  </Router>
)
