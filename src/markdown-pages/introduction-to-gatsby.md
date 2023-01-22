---
title: "Introduction to Gatsby.js"
date: "January 20, 2023"
---

## What is Gatsby ?
Gatsby is framework that is written with **React** which combines some of the best React ecosystem libraries into one bundle.

### When we should use Gatsby?

#### First we should know the difference between
	- Gatsby
	- Create React App
	- NextJS


#### 1. Client Side  / Single Page Application
**create-react-app** is one of the way to demonstrate what is single page application where everything is rendered on the client side. so when a user make a request to the server the browser engine is the one who makes the changes based on the JavaScript bundle.


Pros | Cons
--- | ---
Quick Loading Time | Initial load takes time
Seamless User Experience | Uses a lot of Browser Resources
Ease in Building Feature-rich Apps | Doesn't perform well with SEO

#### 2. Server Side / Multi Page Application
Its exactly the same as the [[#1. Client Side / Single Page Application]] instead of letting the client or the browser engine be the actual thing that ends up compiling HTML pager for routing.
It uses **Sever Side Rendering** to let the **Backend Server** do the work and generates the HTML pages required to the user, which is more efficient because usually servers are much faster than our browser, we use **Next.js & Gatsby.js** to create #SSR applications.

Pros | Cons
--- | ---
Quick initial access | Slower page transitions
Great for SEO | Server Cost
Good For building Big Websites | Higher Latency

