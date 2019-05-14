Zum Testen:
    0. Ausführen von: npm i 
    1. Mongodb muss laufen und der im Programm angegebene Pfad muss stimmen!
    2. Server starten mit: node index.js
    
    Login:
        curl -d '{"username":"<username>", "password":"<password>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/login
    Register:
        curl -d '{"username":"<username>", "password":"<password>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/register
    Logout:
        curl -d '{"username":"<username>", "token":"<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/logout
    CreateAppointment:
        curl -d '{"appointment": {"username": "<username>", "date": "<date>", "duration": "<number>", "name": "<name>"}, "token": "<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
    DeleteAppointment:
        curl -d '{ "username": "<username>", "token": "<token>", "appointmentid": "<appointmentid>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/delete
    EditAppointment:
        curl -d '{"appointment": {"username": "<username>"[, "date": "<date>"][, "duration": "<number>"][, "name": "<name>"]}, "token": "<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/edit

