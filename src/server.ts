import fastify from 'fastify'
import { transactionRoutes } from './routes/transaction.js'

const app = fastify()

app.register(transactionRoutes, {
    prefix: '/transactions',
})

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('Server is running on http://localhost:3333')
    })
