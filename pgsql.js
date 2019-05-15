const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DB,
    password: process.env.DATABASE_PASS,
    port: 5432,
});

module.exports = async (q) => {
    const res = await pool.query(q);
    return res.rows
}
