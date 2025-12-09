# COMP-4513-Assignment-2
# 📌 Overview

This project is a single-page React application built.
It functions as a small online storefront where users can:

- Browse products

- View product details

- Add/remove items from a shopping cart

- Authenticate using mock login

- Access an admin-only dashboard

## ✨ Features
### 🛍️ Product Catalog

- Product list view

- Individual product detail pages

- Displays title, price, stock, description, and images

- Data loaded via a service file from the provided API

### 🛒 Shopping Cart

- Managed using ContextCart

- Add/remove items from anywhere

Cart page shows:

- Item list

- Product images

- Remove buttons

- Running total

### 🔐 Authentication (Modal Login)

- Implemented using Login

- Login view shows inside a Modal pop-out

After successful login:

- Modal closes automatically

- Header updates to show Logged In

- Includes admin and guest accounts

### 🖥️ Admin Dashboard

Only accessible to admin users

Displays:

- Total products

- Tverage price

- Total inventory value

- Top 5 highest-priced products

### 💬 About Dialog

- Shown as a modal pop-out

- Uses shared Modal component

### 🎨 Tailwind UI

- Utility classes used throughout

- Consistent design

### 🧩 Routing Overview
| Route           | Description          |
| --------------- | ---------------------|
| `/`             | Landing page         |
| `/mens`         | Mens Catalog         |
| `/womens`       | Womens Catalog       |
| `/browse`       | Browse               |
| `/dashboard`    | Admin-only dashboard |
| `/about`        | About the website    |
| `/cart`         | Displays Cart        |
| `/login`        | Login Page           |


### 🔑 Login Credentials
| User  | Username | Password    | Role                 |
| ----- | -------- | ----------- | -------------------- |
| Admin | `admin`  | `adminpass` | Can access dashboard |
| Guest | `guest`  | `guestpass` | Regular user         |