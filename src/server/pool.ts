import pg from 'pg'
import { throwUnlessTruthy } from './utils/coercions'
const { Pool } = pg

export const pool = new Pool({
    connectionString: throwUnlessTruthy(process.env.DATABASE_URL)
})
