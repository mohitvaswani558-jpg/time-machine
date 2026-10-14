let ctx: AudioContext | null = null
let on = false
export const isSoundOn = () => on
export function setSound(v: boolean) { on = v; if (v) ping(660, 0.12) }
export function ping(freq = 520, dur = 0.09) {
  if (!on) return
  try {
    ctx = ctx ?? new (window.AudioContext || (window as any).webkitAudioContext)()
    const o = ctx.createOscillator(), g = ctx.createGain()
    o.type = 'sine'; o.frequency.value = freq
    g.gain.setValueAtTime(0.0001, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur + 0.15)
    o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur + 0.2)
  } catch { /* audio unavailable: ignore */ }
}
