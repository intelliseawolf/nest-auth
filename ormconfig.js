module.exports = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL +
    '?sslmode=' +
    (process.env.SSL_MODE || 'disable'),
  entities: [
    process.env.NODE_ENV === 'test'
      ? 'src/**/*.entity.ts'
      : 'dist/**/*.entity.js',
  ],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
