Um die App zu starten, muss eine AVD installiert sein.
Die minimum Version eines Android Devices muss 27 (4.4) sein. 
Eine Möglichkeit, um ein Android Device zu installieren, ist mit Android Studio.

Des Weiteren muss Node installiert sein. Ist dies so, kann mithilfe von 
npm install -g ionic 
ionic installiert werden. Der Befehl muss als Root ausgeführt werden. 

Als native App testen:
    Vom Root Verzeichnis aus folgendes ausführen:
        ionic cordova emulate android --target NAME_DES_AVD --livereload
        
Auflisten aller verfügbaren Android Devices: 
    android list avd

Im Webbrowser testen:   
    Vom Root Verzeichnis folgendes ausführen: 
        ionic serve --livereload

Auf seinem Handy installieren und ausführen: 
    Vom Root Verzeichnis folgendes ausführen: 
        ionic cordova run android 
        oder 
        ionic cordova run android --livereload