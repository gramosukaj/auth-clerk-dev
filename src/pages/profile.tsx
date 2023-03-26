import { useAuth, UserProfile, useSession } from '@clerk/clerk-react'

export const Profile = () => {
  const { signOut } = useAuth()
  const { session } = useSession()

  return (
    <>
      <h1>Profile</h1>
      <p>This session has been active since {session?.lastActiveAt.toUTCString()}</p>
      <button onClick={() => signOut()}>Logout</button>
      <UserProfile />
    </>
  )
}
