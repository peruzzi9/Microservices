@echo off
::===============================
::=======NGINX TERMINATER========
::===============================
::[Author:WinPhay Date:8.29.2017]
::===============================
:LOOP
tasklist | find /i "nginx.exe">nul  && Taskkill /F /IM  "nginx.exe" & exit/b
timeout /t 30
goto:LOOP