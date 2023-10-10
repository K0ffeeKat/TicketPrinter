# TicketPrinter

Stack: Expo, React Native, MobX, Expo Print, Expo Sharing, React Native BLE Manager, React Navigation, Supabase

Functionality:

1) app requires authorization in order to search for registered people
2) you can search for people by unique IDs, if user is found, a PDF with all user info will be generated
3) you can save the PDF locally or print it
4) in the settings you can search for Bluetooth devices, although all Bluetooth interaction is currently on hold

LOGIN CREDENTIALS => LOGIN: test@test.com PASSWORD: Testme1234
IDs YOU CAN SEARCH: 1, 2. Other values will return null as there are no more users in the database.

In case there is trouble with access to the project, try chmod 755 android/gradlew in your terminal.