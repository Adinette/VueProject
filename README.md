# vue

# Technologies used
Vue.js 3 + Vite
TypeScript
Vue Router
TailwindCSS for styling
VeeValidate + Zod for form validation

## Prérequis

Before you start, make sure you have the following tools installed:

Node.js (version 14 ou supérieure)
npm

## Install

### Clone this project on your local machine:

https://github.com/Adinette/VueProject.git

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
## The server will start on port
```sh
http://localhost:5173
```
### Type-Check, Compile and Minify for Production

```sh
npm run build
```
## Features

### Login page: Allows users to log in with their email address and password.
### Registration page: Allows users to register by providing an email address and password, with validation in real time.
### Dashboard: Once registered or logged in, users are redirected to the dashboard.
### Validation with Zod: Client-side validation of registration and login forms.
### VeeValidate: Real-time validation and form error management.
### Automatic redirection: Users are automatically redirected to the dashboard after successful login or registration.

##

vuejs-dashboard-template/
├── public/                # Contains static files such as images
├── src/
│   ├── assets/            # Resources fonts, etc.
│   ├── components/        # Reusable View components (Header, Sidebar, etc.)
│   ├── hooks/             # Custom hooks (e.g. useTheme, useAuth)
│   ├── layouts/           # General layouts to detect authenticated or unauthenticated users
│   ├── router/            # Route configuration
│   ├── schema/            # Schema to manage form validation
│   └── views/             # Application views (Login, Register, Dashboard, etc.)
│   ├── App.vue            # Project entry point
├── main.ts                # Main component
├── package.json           # Project management dependencies and scripts
└── README.md              # This file
