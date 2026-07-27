import { initBotId } from 'botid/client/core'

// The client challenge only attaches to paths listed here, and checkBotId() on
// the server fails for any route that isn't declared.
initBotId({
  protect: [{ path: '/api/chat', method: 'POST' }],
})
