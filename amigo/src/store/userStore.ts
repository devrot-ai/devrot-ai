import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type UserProfile = {
  name: string
  email?: string
  picture?: string
}

export type AnswerValue = string | boolean | number

export type UserState = {
  isAuthenticated: boolean
  profile?: UserProfile
  age?: number
  answers: Record<string, AnswerValue>
  lastTopic?: 'relationships' | 'career' | 'work_life' | 'teen'
  setProfile: (profile: UserProfile) => void
  logout: () => void
  setAge: (age: number) => void
  recordAnswer: (key: string, value: AnswerValue) => void
  setLastTopic: (topic: UserState['lastTopic']) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      profile: undefined,
      age: undefined,
      answers: {},
      lastTopic: undefined,
      setProfile: (profile) => set({ isAuthenticated: true, profile }),
      logout: () => set({ isAuthenticated: false, profile: undefined }),
      setAge: (age) => set({ age }),
      recordAnswer: (key, value) => set((s) => ({ answers: { ...s.answers, [key]: value } })),
      setLastTopic: (topic) => set({ lastTopic: topic ?? undefined }),
    }),
    {
      name: 'amigo:user',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        profile: state.profile,
        age: state.age,
        answers: state.answers,
        lastTopic: state.lastTopic,
      }),
    },
  ),
)
