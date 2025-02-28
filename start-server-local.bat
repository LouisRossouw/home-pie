@echo off
call apps\home-pie-server\venv\Scripts\activate.bat
python apps\home-pie-server\manage.py runserver
pause