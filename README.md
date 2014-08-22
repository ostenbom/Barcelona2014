Barcelona2014
=============

The official app for the 76th International Session of the European Youth Parliament in Barcelona.

=============

To you, dear reader.

This app is made not only made for the International Session in Barcelona, it is made for the EYP. From my own experiences at the session, I have learnt that session apps are useful for organisers and a fantastic tool for media teams, combined, they can add a phenomenal amount of value to any session. So why leave it at Barcelona and stop there? The EYP is not about keeping trade secrets or competing for the best session. Instead, we can work together and make every session better. We can make this app into many more, much better session apps that can and will add more and more value to sessions. So to you, dear reader, I ask of you to use the code in this repo to your hearts content, but to keep it open source and contribute to a larger project. Send me a line at oliver@stenbom.eu to let me know what you're doing or even add to this repo to together make something bigger and more fantastic that I could ever create myself.

All the best and good luck,

Oliver Stenbom

Assistant Editor of the 76th International Session of the EYP in Barcelona.



=============


Notes:

This app is aimed at simplicity across many platforms. It is written only in html, css and javascript. This code can then be packaged using Phonegap/Cordova for use with iPhone/Android, despite the lack of native hardware acceleration, I found that this app doesn't need so much power, and writing for Phonegap saved me a lot of time.

This app is built on a jquery mobile framework.

In the end, the android app was easily alligned with the right certificate using the phonegap build platform, it took about 10 minutes.

The iPhone app however required xcode on a mac to fix the time/status bar in IOS 7 which proved difficult to solve using phonegap. Phonegap build would also not accept my certificates, despite them working in xcode.

This repo is the full dev app, but only barcelonabuild, a separate repo, was used for phonegap build as it only contains the must-have files.

The theme is easily changable and customisable, just copy the unminimised barcelona theme css from the theme folder and paste it to http://themeroller.jquerymobile.com/ under "import" and edit to your hearts content.
