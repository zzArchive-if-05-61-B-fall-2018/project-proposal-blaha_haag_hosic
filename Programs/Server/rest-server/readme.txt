Zum Testen:
    0. Ausführen von: npm i 
    1. Mongodb muss laufen und der im Programm angegebene Pfad muss stimmen!
    2. User auf Datenbank anlegen
    3. Server starten mit: node index.js
    
    Login:
        curl -d '{"id":"<userid>", "password":"<password>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/login
    Register:
        curl -d '{"username":"<username>", "password":"<password>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/register


