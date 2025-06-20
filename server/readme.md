### Server Create a .env file in the server folder with the following:

```bash
cd server
npm install
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
npm run dev