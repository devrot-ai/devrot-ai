import Hamster from '../components/Hamster'

export default function Relax() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16 }}>
      <h2>Relax</h2>
      <p style={{ color: '#666' }}>
        Take a breath. Here’s our cute hamster mascot who interacts with you. Try petting or dancing!
      </p>
      <Hamster />

      <section style={{ marginTop: 16 }}>
        <h3>Quick calming routine</h3>
        <ol>
          <li>Inhale for 4 seconds</li>
          <li>Hold for 4 seconds</li>
          <li>Exhale for 6 seconds</li>
          <li>Repeat 5 times</li>
        </ol>
      </section>
    </div>
  )
}
