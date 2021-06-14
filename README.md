# Chat Native GraphQL

## Table of contents
1. [Installation](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#installation)
2. [Technologies](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#technologies)
3. [The task](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#the-task)
4. [Screenshots](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#screenshots)
5. [Possibilities](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#possibilites)
6. [Summary](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#summary)

## Installation
The application uses [Expo](https://docs.expo.io/)
>`yarn install`
### Run:
>`expo start`

## Technologies
- TypeScript
- Expo
- React Native
- React Navigation
- GraphQL
- Apollo
- Styled Components
- React Native SVG
- React Native Gifted Chat
- Expo Google Fonts (Poppins)

## The task
### The overview
The task was to build a simple chat to communicate with the Team within 3 days (72 hours).

I organized my work using [Trello](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#trello-board) and tested the application using Expo on Android and Web.

The application had to be built using React Native and GraphQL.

I was pretty new to GraphQL as I only had the chance to use it once before.

Same with React Native as I've made only [a single project](https://github.com/Eghizio/nevergram-native) using it.

### Challenges:
- Using React Native and GraphQL, which I may not be familiar with
- Transfering Figma mockup to working views (styling)
- Communication (asking about the things that are not clear)
- Dealing with documentation and requirements written in English
- A list with all the rooms
- A chat that opens when a user chooses a room
- A user is able to send and receive messages in the chat
### Optional:
- Implementing Auth screens (Login and Register)
- Client side Auth using GraphQL
- GraphQL Subscriptions using [Apollo](https://www.apollographql.com/docs/react/data/subscriptions/#3-use-different-transports-for-different-operations), [Absinthe](https://hexdocs.pm/absinthe/apollo.html#using-a-websocket-link) and [Phoenix](https://github.com/phoenixframework/phoenix) ([AsyncPhoenixSocket](https://github.com/TheWidlarzGroup/async-params-phoenix-socket))
### Things that I do not build:
- Login and sign up, I'm provided with a token to authenticate each request to the backend
- Error handling

## Screenshots
### Trello board
![Trello board screenshot](https://github.com/Eghizio/chat-native-gql/blob/main/.github/screenshots/trello.png)
### Login screen
<img src="https://github.com/Eghizio/chat-native-gql/blob/main/.github/screenshots/screen-login.png" alt="Login screen screenshot" width="400"/>

### Register screen
<img src="https://github.com/Eghizio/chat-native-gql/blob/main/.github/screenshots/screen-register.png" alt="Register screen screenshot" width="400"/>

### Rooms screen
<img src="https://github.com/Eghizio/chat-native-gql/blob/main/.github/screenshots/screen-rooms.png" alt="Rooms screen screenshot" width="400"/>

### Chat screen
<img src="https://github.com/Eghizio/chat-native-gql/blob/main/.github/screenshots/screen-chat.png" alt="Chat screen screenshot" width="400"/>

## Possibilities
I tried to implement most of the things by myself, but should have probably used 3rd party libraries.

Here are a few things that I could improve with more time:

- Better validation (ex. [io-ts](https://github.com/gcanti/io-ts), [zod](https://github.com/colinhacks/zod), [yup](https://github.com/jquense/yup), [joi](https://github.com/sideway/joi))
- Better form handling (ex. [RHF](https://github.com/react-hook-form/react-hook-form))
- Better API design using Context (cleaner API design)
- Optimizing state usage and rerenders
- Using .env for credentials and config (API urls etc.)
- Installing @types as a dev-dependency
- Better reusable components following Figma mockup Style Guide (noticed it nearly at the end of time)
- Improving UX with toasts and loading indicators
### Difficulties
- Typesafety useNavigation and useRoute
- Styling difference web/native
- FlatList renderItem Typesafety with styled-components
- SVG conversion (used [React-SVGR](https://react-svgr.com/playground/?native=true&typescript=true))
- Design was meant for larger screens (tested on smaller mobile device)
- KeyboardAvoidingView behaviour
- Styled Components unit warning (either an Expo error or SC warnings)
- Styled Components // diff /**/ comment bugs
- GiftedChat docs could have been better and more precise (Rollback on input styling)
- Weird GiftedChat behaviour: message display order, not detecting new message on Expo, bug with dates (ex. [issue](https://github.com/FaridSafi/react-native-gifted-chat/issues/1389))
- Not working  GraphQL subscriptions (probably splitLink issue, because normal queries didn't execute at all)

## Summary
In summary I enjoyed the project a lot. Although it was challenging to complete within 3 days.

I got the core functionality working (with Auth) after 1.5 day which was.

Surprisingly I was the most productive when implementing Auth screens and logic without the app running. After starting the app most of the things worked like a charm (had to make some minor fixes).

Am I satisfied with the end result?

Yes, mostly.
But I'm pretty sure I can do better and there are [a lot of things to polish.](https://github.com/Eghizio/chat-native-gql/blob/main/README.md#possibilites)

But I am aware that the most of these technologies were quite new to me and I can improve.
