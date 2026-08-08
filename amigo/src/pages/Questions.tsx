import { useMemo, useState } from 'react'
import { useUserStore } from '../store/userStore'
import { Link, useNavigate } from 'react-router-dom'

export default function Questions() {
  const navigate = useNavigate()
  const { age, recordAnswer, setLastTopic } = useUserStore()
  const [responses, setResponses] = useState<Record<string, string>>({})

  const group = useMemo<'teen' | 'young_adult' | 'adult'>(() => {
    if (!age) return 'teen'
    if (age >= 10 && age <= 18) return 'teen'
    if (age >= 19 && age <= 25) return 'young_adult'
    return 'adult'
  }, [age])

  const questions = useMemo(() => {
    if (group === 'teen') {
      return [
        { key: 'teen_feelings', text: 'How have you been feeling lately at school and home?' },
        { key: 'teen_relationship', text: 'Is anything going on in your relationship you want to share?' },
        { key: 'teen_support', text: 'Who do you feel safe talking to when things get hard?' },
      ]
    }
    if (group === 'young_adult') {
      return [
        { key: 'ya_stress', text: 'What stresses you most right now (studies, career, money, relationships)?' },
        { key: 'ya_goals', text: 'What is one goal you want help moving forward?' },
        { key: 'ya_support', text: 'How do you usually recharge when overwhelmed?' },
      ]
    }
    return [
      { key: 'adult_work_life', text: 'Where do you feel your work–life balance is off?' },
      { key: 'adult_boundaries', text: 'What boundaries could help restore balance?' },
      { key: 'adult_next_step', text: 'What is one small step you can try this week?' },
    ]
  }, [group])

  const topic = useMemo(() => {
    if (group === 'teen') return 'relationships'
    if (group === 'young_adult') return 'career'
    return 'work_life'
  }, [group])

  const submit = () => {
    for (const q of questions) {
      recordAnswer(q.key, responses[q.key] || '')
    }
    setLastTopic(topic)
    navigate('/connect')
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16 }}>
      <h2>Questions for you</h2>
      <p style={{ color: '#666' }}>
        We chose these based on your age group. You can skip any you’re not ready to answer.
      </p>

      {questions.map((q) => (
        <div key={q.key} style={{ display: 'grid', gap: 8 }}>
          <label htmlFor={q.key}>{q.text}</label>
          <textarea
            id={q.key}
            rows={3}
            value={responses[q.key] || ''}
            onChange={(e) => setResponses((s) => ({ ...s, [q.key]: e.target.value }))}
            placeholder="Type here..."
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </div>
      ))}

      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={submit}>Continue</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  )
}
