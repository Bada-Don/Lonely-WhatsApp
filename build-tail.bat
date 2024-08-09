@echo off
set NODE_ENV=production
npx tailwindcss build -i ./src/input.css -o ./src/output.css
