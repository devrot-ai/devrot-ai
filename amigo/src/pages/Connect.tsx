import { useMemo } from 'react'
import { COUNSELORS } from '../data/counselors'
import { useUserStore } from '../store/userStore'

export default function Connect() {
  const { lastTopic } = useUserStore()

  const matches = useMemo(() => {
    if (!lastTopic) return COUNSELORS.slice(0, 4)
    return COUNSELORS.filter((c) => c.specialization.includes(lastTopic)).slice(0, 6)
  }, [lastTopic])

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gap: 16 }}>
      <h2>Top counselors for you</h2>
      <p style={{ color: '#666' }}>
        Based on your interests, here are experts around the world you can reach out to.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {matches.map((m) => (
          <article
            key={m.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 16,
              background: 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>{m.name}</h3>
              <span title="Rating">⭐ {m.rating.toFixed(1)}</span>
            </div>
            <div style={{ color: '#666', marginTop: 4 }}>{m.country}</div>
            <div style={{ marginTop: 8, fontSize: 14, color: '#444' }}>{m.bio}</div>
            <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
              Focus: {m.specialization.join(', ')}
            </div>
            <div style={{ marginTop: 12 }}>
              <a href={m.contactUrl} target="_blank" rel="noreferrer">
                <button>View profile</button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
