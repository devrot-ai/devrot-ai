import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hamster() {
  const controls = useAnimationControls()
  const [petCount, setPetCount] = useState(0)

  useEffect(() => {
    controls.start({ y: [0, -6, 0], transition: { duration: 0.8, repeat: Infinity } })
  }, [controls])

  return (
    <div style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
      <motion.div animate={controls} style={{ fontSize: 64 }}>
        🐹
      </motion.div>
      <div style={{ color: '#555' }}>Hi, I’m Migo, your chill hamster.</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setPetCount((c) => c + 1)}
          style={{ padding: '8px 12px' }}
        >
          Pet Migo
        </button>
        <button
          onClick={() => controls.start({ rotate: [0, 10, -10, 0], transition: { duration: 0.8 } })}
          style={{ padding: '8px 12px' }}
        >
          Make Migo dance
        </button>
      </div>
      <div style={{ fontSize: 12, color: '#666' }}>Pets given: {petCount}</div>
    </div>
  )
}
