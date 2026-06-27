import { useCallback, useEffect, useRef, useState } from 'react'
import { pickRandomMeal } from '@/constants/meals'

const SPIN_DURATION = 2800

export function useMealPicker() {
  const [meal, setMeal] = useState('')
  const [spinning, setSpinning] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const choose = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    setRevealed(false)
    setSpinning(true)
    setMeal(pickRandomMeal())

    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime

      if (elapsed >= SPIN_DURATION) {
        setSpinning(false)
        setMeal(pickRandomMeal())
        setRevealed(true)
        return
      }

      setMeal(pickRandomMeal())
      const progress = elapsed / SPIN_DURATION
      const delay = 28 + progress * progress * 160
      timerRef.current = setTimeout(tick, delay)
    }

    timerRef.current = setTimeout(tick, 28)
  }, [])

  return { meal, spinning, revealed, choose }
}
