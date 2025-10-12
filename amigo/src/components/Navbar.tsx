import { Link, useLocation } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export default function Navbar() {
  const location = useLocation()
  const { isAuthenticated, profile, logout } = useUserStore()

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'saturate(180%) blur(8px)',
        zIndex: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 20 }}>🐹</span>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 700, color: '#333' }}>
          amigo
        </Link>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <NavLink to="/" active={location.pathname === '/'} label="Home" />
        <NavLink to="/questions" active={location.pathname.startsWith('/questions')} label="Questions" />
        <NavLink to="/connect" active={location.pathname.startsWith('/connect')} label="Connect" />
        <NavLink to="/relax" active={location.pathname.startsWith('/relax')} label="Relax" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {isAuthenticated && profile ? (
          <>
            {profile.picture ? (
              <img
                src={profile.picture}
                alt={profile.name}
                style={{ width: 28, height: 28, borderRadius: '50%' }}
              />
            ) : null}
            <span style={{ fontSize: 14, color: '#444' }}>{profile.name}</span>
            <button onClick={logout} style={{ padding: '6px 10px' }}>
              Sign out
            </button>
          </>
        ) : (
          <span style={{ fontSize: 12, color: '#666' }}>Welcome</span>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color: active ? '#111' : '#666',
        fontWeight: active ? 700 : 500,
        borderBottom: active ? '2px solid #111' : '2px solid transparent',
        paddingBottom: 2,
      }}
    >
      {label}
    </Link>
  )
}
