# SUNAMAI – AI Image Generating Website

A React project that generates AI images using user prompts through the Pollination API.  
This project is built to practice and understand advanced React concepts like data fetching, refs, routing (state based), custom hooks, and context.

## Learning From This Project

- Using **useEffect** for data fetching  
- Creating **custom hooks** that handle data, error, and loading states  
- Building a **Context Provider** to manage global state  
- Using **React Router** with state  
- Organizing components and hooks for clean folder structure  

## Features

- AI image generation using Pollination API  
- Custom hooks for API requests  
- Global state management with Context  
- Routing with shared state between pages  
- Reusable and clean component layout  
- Error and loading handling built into custom hooks  

## Tech Stack

- React  
- Context API  
- Custom Hooks  
- Pollination API  
- Tailwind 

## Installation

1. Clone the repository:

```
git clone https://github.com/sunam-ali/4-SunamAI.git
```

2. Navigate into the project folder:

```
cd 4-SunamAI
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

## How It Works

1. The user enters a text prompt  
2. A custom hook sends the request to the Pollination API  
3. The hook manages loading and error states  
4. The image is displayed once generated  
5. Global state is used to share data across components and routes  
