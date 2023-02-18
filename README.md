# React native boilerplate templating section

## How I Configured files

- postinstall.sh: contains post install script, and is executed **once** to ensure that ejecting is done once.
- template directory: contains the actual React Native code, and no ios/android directories(generated with eject when project is initialized with --template flag)

## How to publish after making changes

- change version number in package.json
- DO NOT add **ios** or **android** or **package-lock** or **node_modules** in any **directory** or **subdirectory** of the project
- npm publish

## How to use as a template

- npx react-native init MyApp --template temprnb@latest

---

# React native boilerplate project & code section

## Libraries

- Navigation (bottom, drawer)
- Dark Mode (theme) toggler
- Language localization

## UI

- Header Component
- ScreenContainer Component
- Toast
- Ui kitten
- Infinit Scroll Flatlist
- Refresh Data Flatlist

## API & DATA

- redux / asyncstorage user management
- Login
- Logout

## Getting started

- npm i /** optional because done on postinstal **/
- cd ios && pod install /** optional because done on postinstal **/
- npm run ios
