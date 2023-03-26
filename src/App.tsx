import { ClerkProvider, SignedIn, SignIn, SignUp } from '@clerk/clerk-react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Home, Profile } from './pages'

const ClerkProviderWithRoutes = () => {
  const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={to => navigate(to)}>
      <Routes location="/">
        <Route path="/" element={<Home />} />
      </Routes>
    </ClerkProvider>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  )
}

export default App
