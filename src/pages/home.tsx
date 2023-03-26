import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import { Profile } from './profile'

export const Home = () => {
  return (
    <>
      <h1>Auth demo with Clerk</h1>
      <SignedOut>
        <SignIn afterSignInUrl={'/profile'} />
      </SignedOut>
      <SignedIn>
        <Profile />
      </SignedIn>
    </>
  )
}
