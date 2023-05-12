'use strict'

module.exports = async function (fastify, opts) {
    fastify.get(
        "/",
        {
            onRequest: [fastify.authenticate]
        },
        async function (request, reply) {
            return request.user
        }
    )

    fastify.get(
        "/protected",
        {
            onRequest: [fastify.authenticate]
        },
        async function (request, reply) {
            return request.user
        }
    )

    fastify.post('/signup', (req, reply) => {
        // some code
        const token = fastify.jwt.sign({ "username": "Claudio Barca" })
        reply.send({ token })
    })
}