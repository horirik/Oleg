1) Открой www/config.js и вставь свой YouTube API key.
2) Создай репозиторий на github.com, загрузи в него все файлы этой папки (включая скрытую .github).
3) Вкладка Actions -> build -> Run workflow. Через ~5-10 минут внизу страницы запуска появятся
   файлы: windows-exe (установщик .exe) и android-apk (.apk).
Локальный запуск на ПК с Node.js: npm install, затем npm start (окно) или npm run dist (.exe в папке dist).
В настройках ключа в Google Cloud ограничь его только YouTube Data API v3.
