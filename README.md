# E-commerce Admin App

This project is an eCommerce Admin Application built using the MERN stack (MongoDB, Express, React, Node.js). The application is designed to manage an online store's backend operations, including product management, order processing, user management, and analytics.

## Features

- **Product Management**: Create, update, delete, and manage product listings, including categories, pricing, and inventory.
- **Order Management**: View, process, and update the status of customer orders.
- **User Management**: Manage customer accounts and admin roles.
- **Dashboard & Analytics**: Monitor sales, order trends, and user activities with real-time statistics and charts.
- **Authentication & Authorization**: Secure admin access with role-based permissions.
- **Responsive Design**: Fully responsive and optimized for all device sizes.

## Tech Stack

### Frontend:
- **React**: Library for building user interfaces.
- **Redux Toolkit**: State management for React applications.
- **React Router**: For client-side routing.
- **Material-UI**: React components for faster and easier web development.

### Backend:
- **Node.js**: JavaScript runtime for building the server-side.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM library for MongoDB and Node.js.

### Others:
- **JWT**: JSON Web Tokens for secure authentication.
- **Bcrypt**: Library for hashing passwords.
- **Axios**: Promise-based HTTP client for making requests.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-admin-app.git
   cd ecommerce-admin-app
   ```

2. **Install dependencies for both frontend and backend**:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Create a `.env` file in the `server` directory** and add the following environment variables:
   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   PORT=5000
   ```

4. **Run the application**:
   ```bash
   cd server
   npm run dev
   cd ../client
   npm start
   ```

## API Endpoints

The backend API includes the following key endpoints:

- **/api/products**: Manage product data.
- **/api/orders**: Process and manage customer orders.
- **/api/users**: Handle user authentication and management.

## Folder Structure

```
ecommerce-admin-app/
├── client/               # React frontend
│   ├── public/
│   └── src/
├── server/               # Node.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Request handlers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Authentication and other middleware
│   └── server.js         # Entry point for the backend
├── .gitignore
├── README.md
└── package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.