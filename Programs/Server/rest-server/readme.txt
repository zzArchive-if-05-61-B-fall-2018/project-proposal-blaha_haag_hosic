Zum Testen:
    0. Ausführen von: npm i, dafür muss das Notwendige für npm installiert sein
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
    CheckIfUserExists:
        curl -d '{"username":"<username>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/check
    GetAllAppointments:
        curl -d '{ "username": "<username>", "token": "<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/get
    CreateGroup:
        curl -d '{"group": {"owner": "<username>", "name": "<groupName>" }, "token": "<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/group/create
    DeleteGroup:
        curl -d '{"username": "<username>", "token": "<token>", "groupname": "<groupname>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/group/delete
    GetGroups:
        curl -d '{"username": "<username>", "token": "<token>"}' -H "Content-Type: application/json" -X POST http://localhost:8080/group/get
    




Einrichten der Datenbank mit Testwerten:
    Mongodb installieren
    Mongodb starten 
    (Mit MongoDB kann die Datenbank betrachtet werden)
    Den REST-Server starten, schauen, ob eine Verbindung hergestellt werden konnte (steht in der Console des Servers)
    Anlegen von 3 Benutzer mit folgenden Befehlen:
        curl -d '{"username":"Peter", "password":"peter"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/register
        curl -d '{"username":"Thomas", "password":"thomas"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/register
        curl -d '{"username":"Hans", "password":"hans"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/register
        
    Login der Benutzer:
        curl -d '{"username":"Peter", "password":"peter"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/login
        curl -d '{"username":"Thomas", "password":"thomas"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/login
        curl -d '{"username":"Hans", "password":"hans"}' -H "Content-Type: application/json" -X POST http://localhost:8080/user/login

    Erstellen von Terminen für die Benutzer:
        curl -d '{"appointment": {"username": "Peter", "date": "2019-06-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 1"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Peter", "date": "2019-06-30T07:42:41.156Z", "duration": "2", "name": "Test Termin 2"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Peter", "date": "2019-06-29T07:42:41.156Z", "duration": "2", "name": "Test Termin 3"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Peter", "date": "2019-07-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 4"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Peter", "date": "2019-07-20T07:42:41.156Z", "duration": "2", "name": "Test Termin 5"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create

        curl -d '{"appointment": {"username": "Thomas", "date": "2019-06-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 1"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Thomas", "date": "2019-06-30T07:42:41.156Z", "duration": "2", "name": "Test Termin 2"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Thomas", "date": "2019-06-29T07:42:41.156Z", "duration": "2", "name": "Test Termin 3"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Thomas", "date": "2019-07-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 4"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Thomas", "date": "2019-07-20T07:42:41.156Z", "duration": "2", "name": "Test Termin 5"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create

        curl -d '{"appointment": {"username": "Hans", "date": "2019-06-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 1"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Hans", "date": "2019-06-30T07:42:41.156Z", "duration": "2", "name": "Test Termin 2"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Hans", "date": "2019-06-29T07:42:41.156Z", "duration": "2", "name": "Test Termin 3"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Hans", "date": "2019-07-28T07:42:41.156Z", "duration": "2", "name": "Test Termin 4"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create
        curl -d '{"appointment": {"username": "Hans", "date": "2019-07-20T07:42:41.156Z", "duration": "2", "name": "Test Termin 5"}, "token": "TOKEN"}' -H "Content-Type: application/json" -X POST http://localhost:8080/appointment/create