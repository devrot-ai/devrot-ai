import { GoogleLogin, googleLogout } from '@react-oauth/google'
import type { CredentialResponse } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useUserStore } from '../store/userStore'
import type { UserProfile } from '../store/userStore'

export default function GoogleSignIn() {
  const { isAuthenticated, setProfile, logout } = useUserStore()

  const onSuccess = (cred: CredentialResponse) => {
    try {
      if (!cred.credential) return
      const decoded: any = jwtDecode(cred.credential)
      const profile: UserProfile = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      }
      setProfile(profile)
    } catch (e) {
      console.error('Google decode failed', e)
    }
  }

  const onError = () => {
    console.warn('Login Failed')
  }

  if (isAuthenticated) {
    return (
      <button
        onClick={() => {
          googleLogout()
          logout()
        }}
        style={{ padding: '8px 12px' }}
      >
        Sign out
      </button>
    )
  }

  return <GoogleLogin onSuccess={onSuccess} onError={onError} useOneTap />
}
