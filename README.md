# E-Commerce Backend REST API

Node.js + Express REST API with 10 user/product CRUD endpoints, separate Express Router files, middleware, API-key query authentication, validation, error handling, JSON responses, and a Postman collection.

## Run the project
1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Set `API_KEY=my-secret-key-123` in `.env` (choose your own secret).
6. Run `npm run dev` or `npm start`.
7. Visit `http://localhost:5000` or `http://localhost:5000/api/health`.

## API endpoints
| Method | Endpoint | Purpose | API key? |
|---|---|---|---|
| GET | `/api/users` | Get all users | No |
| GET | `/api/users/:id` | Get one user | No |
| POST | `/api/users?apiKey=YOUR_KEY` | Add user | Yes |
| PUT | `/api/users/:id?apiKey=YOUR_KEY` | Update user | Yes |
| DELETE | `/api/users/:id?apiKey=YOUR_KEY` | Delete user | Yes |
| GET | `/api/products` | Get all products | No |
| GET | `/api/products/:id` | Get one product | No |
| POST | `/api/products?apiKey=YOUR_KEY` | Add product | Yes |
| PUT | `/api/products/:id?apiKey=YOUR_KEY` | Update product | Yes |
| DELETE | `/api/products/:id?apiKey=YOUR_KEY` | Delete product | Yes |

### User JSON body
```json
{"name":"Hammad","email":"hammad@example.com","age":18}
```
Name and valid email are required on POST; age is optional (integer 13–120). Duplicate emails are rejected.

### Product JSON body
```json
{"name":"Gaming Mouse","description":"USB gaming mouse","price":24.99,"stock":15}
```
Name, description, and positive numeric price are required on POST; stock is optional and must be a non-negative integer.

## Status codes
- `200` success; `201` created; `400` validation/duplicate email; `401` missing or invalid API key; `404` missing resource/route; `500` unexpected server error.

## Postman testing
Import `postman/E-Commerce-Backend-API.postman_collection.json` into Postman. The collection includes all 10 required APIs and extra auth, validation, and not-found tests. Its `apiKey` variable defaults to `my-secret-key-123`; match that with `.env`. Run the requests with the server running. DELETE requests change the demo data, so run those near the end or reset `src/data/data.json` from the original sample.

## Folder structure
```text
ecommerce-backend-api/
├── postman/E-Commerce-Backend-API.postman_collection.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── data/data.json
│   ├── data/store.js
│   ├── middleware/authMiddleware.js
│   ├── middleware/errorMiddleware.js
│   ├── middleware/validationMiddleware.js
│   └── routes/productRoutes.js
│   └── routes/userRoutes.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Upload to GitHub
Create an empty repository on GitHub. In this folder, run:
```bash
git init
git add .
git commit -m "Build e-commerce backend REST API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Replace the URL with your actual repository. Do not upload `.env` or `node_modules`.

**Important:** This starter project stores data in a local JSON file (not a production database). The files and Postman test collection are prepared, but run the server and execute the requests in Postman yourself before reporting that tests passed.
