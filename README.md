<h1 align="center" id="title">Quad Theory Technical Test</h1>
<br>
<p id="description">This project is a part of the technical test given by Quad Theory Ltd where I had to create a UI fetch data and add some forms and validation.<br>[ The API that was given to me was only working in localhost. Vercel deployed frontend was not able to access it for Mixed Content Policy reason. Because the API was created in a http server and my frontend is hosted in a https server. That's why Chrome was throwing error which I found out in the console.<br>So I had to create my own API with Express.js with the same data provided by Quad Theory. Which can be founded at [https://quad-theory-todo-backend.vercel.app/](https://quad-theory-todo-backend.vercel.app/)</p>

<h2>🚀 Demo</h2>

[https://quad-theory-todo.vercel.app/](https://quad-theory-todo.vercel.app/)

<h2>🧐 Features</h2>

Here're some of the project's best features:

- made with Next.js, TailwindCSS
- The item sliders are created with SwiperJS
- When you click Add More button above the sliders a form will appear for adding items purpose. It is implemented with React's createPortal.
- The form is created and validated with react-hook-form
- Users can add picture while adding items in the form. They can also check IsPopular / IsRecommended checkboxes. Whatever value is checked the item will be added to that section only. The user must check atleast one checkbox
- After submitting the form, scroll/slide horizontally to the end of the slider section (Popular/Recommended). You will find the newly added items.
<br>
<h2>🛠️ Installation Steps:</h2>

<p>1. Clone this repo</p>

<p>2. In root directory install the dependencies</p>

```
yarn
```

<p>3. Run with</p>

```
yarn run dev
```
