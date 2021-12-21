# Gamingverse - SPA

## What is Gamingverse?

Gamingverse is a **platform** where gamers can **share** their favourite games with other gamers. Of course, not only hardcore players are welcome to the Gamingverse. There is a place for **everybody** there - ex-gamers, casual ones and so on.

## What roles does the app support?

Gamingverse supports two roles - **guest** and **user**.

### Guest

In the Gamingverse guests have access to:

* Home page
* Catalog page
* Details page but **without** functionality (**cannot** like/dislike a game)
* Login
* Register

### User

On the other hand, users have access to:

* Home page
* Catalog page
* Details page but **with** functionality:
    * If the current user **is** the **creator** of the currently viewed game, then he can **edit**/**delete** it
    * If the current user is **not** the **creator** of the currently viewed game, then he can **like**/**dislike** it (only **once** per action)
* Create page
* My games page

## Technologies

### Client

* React
* React Router
* React Simple Typewriter
* React Toastify

### Server

* Express
* Express Validator
* Mongoose
* JWT
* Bcrypt