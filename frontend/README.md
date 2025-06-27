# 📦 Unick Enterprises Web-Based Order, Inventory, and Production Tracking System

This is a fullstack project using **React.js (Frontend)** and **Laravel 10 (Backend)** to manage customer orders, inventory tracking, and daily production logs with predictive analytics.

---

## 📁 Project Structure

```
project-root/
├── backend/       # Laravel 10 API
└── frontend/      # React app (Bootstrap styled)
```

---

## 🚀 Getting Started

### 🛠 Backend Setup (Laravel 10)

1. Clone the repo and navigate to backend:
   ```bash
   git clone <your_repo_url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Create `.env`:
   ```bash
   cp .env.example .env
   ```

4. Set your database credentials in `.env`:
   ```env
   DB_DATABASE=unick_db
   DB_USERNAME=root
   DB_PASSWORD=
   ```

5. Run migrations:
   ```bash
   php artisan migrate
   ```

6. Seed default admin:
   ```bash
   php artisan db:seed --class=AdminSeeder
   ```

7. Start the server:
   ```bash
   php artisan serve
   ```

> ✅ Default Admin:
> Email: `admin@unick.com`  
> Password: `admin123`

---

### 💻 Frontend Setup (React + Bootstrap)

1. Open a new terminal and navigate to frontend:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

The app will run at `http://localhost:3000`.

---

## 🔐 Login & Roles

- **Customer**: Can register, login, place and view orders.
- **Admin**: Login using seeded account. Can view all orders, inventory, and record production.

---

## 🔗 API Reference

Laravel API endpoints:
- `/api/login`, `/api/register`
- `/api/products`
- `/api/orders`
- `/api/inventory`
- `/api/productions`

---

## 🧠 Notes

- React calls Laravel APIs via Axios using `services/api.js`
- Laravel Sanctum handles authentication
- Backend must be running on `localhost:8000` for frontend to work

---

## 📃 License
MIT
