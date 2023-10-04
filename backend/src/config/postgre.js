// const url = "postgres://wkidtdap:w9e0og1ngAbTA2ofhcUt-Vxo-oUjmYkV@satao.db.elephantsql.com/wkidtdap";
const {Pool} = require('pg');
const pool = new Pool({
    user: 'wkidtdap',
    host: 'satao.db.elephantsql.com',
    database: 'wkidtdap',
    password: 'w9e0og1ngAbTA2ofhcUt-Vxo-oUjmYkV',
    port: 5432,
})

module.exports = pool
