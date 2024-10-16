# Tech Heim

[**Live Site**](https://techheim.netlify.app)

Click here to visit the live site: [https://techheim.netlify.app](https://techheim.netlify.app)

---

## Project Overview

**Tech Heim** is an e-commerce platform developed by a team of four members. This project integrates modern web technologies to provide a seamless shopping experience. The application supports user authentication, dynamic product management, and secure payment processing.

---

## Team Members

1. **Waheedul Islam** (Team Leader)
2. **Sifat Ullah Shawon**
3. **Omor Faruk**
4. **Mominul Islam**

---

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **Firebase Authentication**: For user authentication and management.
- **Firebase React Hooks**: For simplifying Firebase integration in React.
- **Tailwind CSS**: For utility-first styling of components.
- **DaisyUI**: Tailwind CSS component library for building beautiful user interfaces.
- **react-toast**: For displaying notifications and alerts to users.
- **SweetAlert2**: For beautiful, responsive alerts.
- **SSLCommerz**: For payment processing.

### Backend

- **Node.js**: JavaScript runtime for the server-side.
- **Express.js**: Web framework for Node.js to build APIs.
- **JWT (JSON Web Token)**: For secure authentication.
- **MongoDB**: NoSQL database for storing user and product data.

---

## Key Features

- **User Authentication**: Users can register and log in securely using Firebase Authentication.
- **Admin and User Roles**: Distinct roles for users and administrators, allowing for secure access to sensitive operations.
- **Email Verification**: Users receive email verification upon registration.
- **Dynamic Product Management**: Admins can add, update, and delete products.
- **Secure Payments**: Integrated payment system using SSLCommerz for safe transactions.

---

## Installation and Setup

To set up the project locally, follow these instructions:

### Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Waheedulislam/Dev-Daynamos-Fashion-House-
   cd tech-heim

2. **Install dependencies**: 

   ```bash 
   npm install

3. **Create a .env file in the root of your frontend folder and add the following environment variables**: 


   ```bash 
        VITE_apiKey=
        VITE_authDomain=
        VITE_projectId=
        VITE_storageBucket=
        VITE_messagingSenderId=
        VITE_appId=

4. **Start the development server**: 
  ```bash 
   npm run dev

### Backend Setup 

1. **Navigate to the backend directory**:
  ```bash 
cd backend  # Adjust this if your backend is in a different directory

2. **Install dependencies**:
  ```bash 
  npm install

3. **Create a .env file in the root of your backend folder and add the following environment variables**:
  ```bash 
  DB_USER=
  DB_PASS=
  ACCESS_TOKEN_SECRET=
  SSL_STORE_ID=
  SSL_STORE_PASSWORD=

4. **Start the backend server**:

   ```bash 
    npm run dev

---

## Admin and User Roles 

 For admin-level access, you can log in using the following credentials:

- **Admin Email**: adminuser@gmail.com
- **Admin Password**: Adminuser2#

This account has the ability to manage users and products, including the ability to add, update, and delete items in the inventory.

For regular users, they can register, log in, and manage their own profiles and orders.

---

## Contributors

This project was developed and maintained by:

- **Waheedul Islam**: (Team Leader)
- **Sifat Ullah Shawon**
- **Omor Faruk**
- **Mominul Islam**

---

## Contact 

For any inquiries or feedback, feel free to contact us at **infotechheim@gmail.com*
