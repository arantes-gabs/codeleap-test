# CodeLeap Frontend Test

Simple CRUD application for the CodeLeap coding test, built with React + TypeScript.

## Test Context

This project implements the frontend challenge:

- Build a simple app with basic CRUD operations
- Integrate with the test server
- Keep the app easy to run and evaluate

API base URL:

`https://dev.codeleap.co.uk/careers/`

Important: all requests must use the trailing slash (`/`) to avoid CORS-related issues.

## What Is Implemented

Core requirements:

- Sign up flow with username
- List posts
- Create post
- Edit post
- Delete post
- Author-only edit/delete actions

Additional implementations:

- Persistent session with `localStorage`
- Logout flow
- Button-level fake loading for sign up and logout
- Modal open/close transitions
- Reusable components (`Button`, modal base, post editor fields, etc.)
- Relative time formatting with `date-fns`
- React Query for data fetching and mutations
- Toast feedback for create/update/delete actions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Axios
- React Query (`@tanstack/react-query`)
- `date-fns`
- `react-hot-toast`

## API Endpoints Used

- `GET /careers/` list posts
- `POST /careers/` create post
- `PATCH /careers/{id}/` update post
- `DELETE /careers/{id}/` delete post

Payloads follow the challenge specification.

## Project Structure

```text
src/
  components/
    Button/
  features/
    auth/
    feed/
      api/
      components/
      hooks/
      utils/
  lib/
  utils/
```

## Running Locally

Requirements:

- Node.js 18+
- npm

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```
