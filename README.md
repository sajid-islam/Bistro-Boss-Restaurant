# 🍽️ Bistro Boss

Bistro Boss is a modern, responsive restaurant management and food ordering web application. It allows users to browse menus, add items to their cart, make secure payments, and enjoy an intuitive admin experience. This full-stack project is built using the **MERN stack** and deployed using **Vercel** and **Render**.

🔗 **Live Site**: [https://bistro-boss-three.vercel.app/](https://bistro-boss-three.vercel.app/)

---

## 🚀 Features

### 👤 User

-   🔐 Authentication using Firebase (Google & Email/Password)
-   📋 View categorized food menu
-   🛒 Add and remove items from the cart
-   💳 Payment with Stripe
-   📜 Order history and status

### 🧑‍💼 Admin

-   🧾 Manage all users (promote to admin)
-   🍲 Add, update, and delete menu items
-   📊 View order and payment statistics
-   🔒 Protected admin routes using JWT

---

## 🛠️ Tech Stack

| Category             | Technology                                           |
| -------------------- | ---------------------------------------------------- |
| **Frontend**         | React, Tailwind CSS, DaisyUI, Axios, React Hook Form |
| **Backend**          | Node.js, Express.js, MongoDB, Stripe                 |
| **Authentication**   | Firebase, JWT                                        |
| **Deployment**       | Vercel (frontend), Render (backend), MongoDB Atlas   |
| **State Management** | React Context API                                    |

---

## 🔧 Installation & Setup (for development)

### 🔑 Prerequisites

-   Node.js and npm
-   MongoDB Atlas account
-   Firebase project
-   Stripe account for test keys

### 📦 Backend Setup

1. Clone the backend:
    ```bash
    git clone https://github.com/sajid-islam/Bistro-Boss-Restaurant-Server
    cd server
    npm install
    ```
