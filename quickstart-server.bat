@echo off
call apps\home-pie-server\venv\Scripts\activate.bat
python apps\home-pie-server\manage.py runserver 0.0.0.0:7979
pause