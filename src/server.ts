import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionRoutes } from './routes/transaction.js'
import { env } from './env/index.js'

const app = fastify()

app.register(cookie)
app.register(transactionRoutes, {
    prefix: '/transactions',
})

app
    .listen({
        port: env.PORT,
    })
    .then(() => {
        console.log(`Server is running on http://localhost:${env.PORT}`)
    })
