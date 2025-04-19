#!/usr/bin/env bash
# Info ENV
echo "== Starting app with DATABASE_HOST: $DATABASE_HOST =="
echo "== NODE_ENV: $NODE_ENV =="

# Tunggu DB siap (opsional)
./opt/wait-for-it.sh $DATABASE_HOST:$DATABASE_PORT -t 60 -- echo "Database is up!"

# Migration dulu (kalau ada)
npm run migration:run || echo "No migration needed"
npm run seed:run:relational || echo "No seeding needed"
# Start app
npm run start:prod || echo "Failed to start the app"
