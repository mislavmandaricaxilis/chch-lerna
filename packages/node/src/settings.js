export const environment = process.env.ENVIRONMENT || 'production';

export const port = process.env.PORT || '8000';

export const log = {
    level: process.env.LOG_LEVEL || 'info',
    levelSentry: process.env.LOG_LEVEL_SENTRY || 'warn',
};

export const sentry = {
    dsn: process.env.SENTRY_DSN || undefined
};
