'use-strict'

// Requiries
const express = require('express');
const app = express();
const port = process.env.API_PORT;
const { client } = require('pg')
const redis = require('redis')


// Setup DB
const pgClient = new client({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }

    pgClient.connect()

    console.log('## API STARTED !')
    console.log(`## Express server listening on local container port ${PORT}`);
});


const redisClient = redis.createClient({ host: process.env.REDIS_HOST });


app.get('/', function (req, res) {
    res.json({message: 'Hello World'})
});

app.get('/status', async (req, res) => {
    const postgresQuery = 'SELECT date_trunc(\'second\', current_timestamp - pg_postmaster_start_time()) as uptime;';
    const result = await pool.query(postgresQuery);
    const uptime = result.rows[0].uptime;
    const uptimeString = () => {
        let time = '';

        time += uptime.hours ? `${uptime.hours}h ` : '';
        time += uptime.minutes ? `${uptime.minutes}m ` : '';
        time += uptime.seconds ? `${uptime.seconds}s` : '';

        return time
    };

    res.json({
        status: '0k',
        postgresUptime: uptimeString(),
        redisConnectedClients: Number(client.server_info.connected_clients)
    });
});
