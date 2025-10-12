import GoogleSignIn from '../components/GoogleSignIn'
import { useUserStore } from '../store/userStore'
import { Link } from 'react-router-dom'

export default function Home() {
  const { isAuthenticated, profile, age, setAge } = useUserStore()

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16 }}>
      <header style={{ display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>Welcome to amigo</h1>
        <p style={{ margin: 0, color: '#555' }}>
          Your friendly mental well-being companion with access to top counselors worldwide.
        </p>
      </header>

      <section style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <strong>Sign in with Google for a personalized experience:</strong>
        <GoogleSignIn />
      </section>

      {isAuthenticated && profile ? (
        <div
          style={{
            background: '#f6f7fb',
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {profile.picture ? (
            <img src={profile.picture} alt={profile.name} style={{ width: 42, height: 42, borderRadius: '50%' }} />
          ) : null}
          <div>
            <div style={{ fontWeight: 700 }}>Hello {profile.name.split(' ')[0]}!</div>
            <div style={{ color: '#666' }}>Let’s tailor your experience.</div>
          </div>
        </div>
      ) : null}

      <section style={{ display: 'grid', gap: 8 }}>
        <label htmlFor="age">Enter your age</label>
        <input
          id="age"
          type="number"
          min={10}
          max={120}
          value={age ?? ''}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
          placeholder="e.g., 18"
          style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd', maxWidth: 200 }}
        />
        <small style={{ color: '#666' }}>
          We use age only to pick questions relevant to you. You can change it anytime.
        </small>
      </section>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link to="/questions">
          <button>Start questions</button>
        </Link>
        <Link to="/connect">
          <button>Find a counselor</button>
        </Link>
        <Link to="/relax">
          <button>Relax with our hamster</button>
        </Link>
      </div>
    </div>
  )
}
