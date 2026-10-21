// Next open call slots for the contact page, one per day for the next three
// open days. Proxied from ejfox.com's Cal.com availability endpoint so the
// browser never makes a cross-origin call and room302 never holds a Cal key.
// Cached briefly; if the upstream is down the page falls back to a plain link.
export default defineCachedEventHandler(
  async () => {
    try {
      const data = await $fetch<{ slots?: Array<{ datetime: string; bookingUrl: string }> }>(
        'https://ejfox.com/api/cal/available-slots',
        { query: { duration: '30min', spread: 'day' }, timeout: 8000 }
      )
      const slots = (data.slots || [])
        .filter((s) => s.datetime && s.bookingUrl?.startsWith('https://cal.com/'))
        .map(({ datetime, bookingUrl }) => ({ datetime, bookingUrl }))
      return { slots }
    } catch {
      return { slots: [] }
    }
  },
  { maxAge: 120, swr: true, name: 'contact-slots' }
)
