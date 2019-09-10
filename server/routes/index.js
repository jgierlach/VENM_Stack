import { Router } from 'express'

import authRouter from './v1/auth'

const v1Router = new Router()

v1Router.use('/v1/auth/auth', authRouter)

export default v1Router