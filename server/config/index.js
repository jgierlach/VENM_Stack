import dotenv from 'dotenv'

export default {
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27018/VENOM'
}