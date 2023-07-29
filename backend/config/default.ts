export default {
    port: 3000,
    dbUri: 'mongodb://localhost:27017/cognoscente-local-testing',
    logLevel: 'info',
    smtp: {
        user: 'fg6curyokp2gbbye@ethereal.email',
        pass: 'WUMuACKkTWECp2rYBf',
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false
    },
    accessTokenTtl: '15m',
    refresgTokenTtl: '1y',
}