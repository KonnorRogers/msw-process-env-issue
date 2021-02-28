import { rest } from 'msw'

export const handlers = [
  // Handles a POST /get request
  rest.post('/post', null),

  // Handles a GET /get request
  rest.get('/get', null),
]
