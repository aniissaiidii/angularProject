# Angular Project - Products & Suggestions

A simple Angular app for managing products and submitting suggestions, with form validation and authentication.

## Features
- Product list (add, edit, delete)
- Suggestion box with reactive form validation
- Simple authentication (login/logout) with route guards
- Dummy auth (any credentials work for demo)

## Prerequisites
- Node.js 16+
- Angular CLI 15+ (`npm install -g @angular/cli`)



## Run
```bash
ng serve
```
Open `http://localhost:4200`.

## Build
```bash
ng build
```
Build artifacts in `dist/`.

## Project Structure (simplified)
```
src/app/
  ├── auth/          # Login component & guard
  ├── products/      # Product CRUD
  ├── suggestions/   # Suggestion form
  ├── shared/        # Models, validators, services
  └── app-routing.module.ts
```

## Usage
1. Login with any username/password (e.g., `user/123`).
2. Navigate via menu to Products or Suggestions.
3. Try adding a product or submitting a suggestion (validation active).
