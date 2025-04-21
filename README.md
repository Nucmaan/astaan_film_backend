# astaan_film_backend
Astan Film


Your Kong API Gateway is now configured with both rate limiting and JWT authentication. Here are the JWT credentials you'll need to use when generating tokens in your application:
key: dpkcJNrjmiQKgDpo16zzG7ynxhiY4H3V
secret: glgq9wIRiUVjXVN086UMvcWAn1JnYfiz
algorithm: HS256
To integrate this with your backend services:
In your login/authentication service, when a user successfully logs in, generate a JWT token using these credentials.
Return this token to the client.
Clients should include this token in the Authorization header for all subsequent requests to protected endpoints.
Example of how to generate a JWT token in your Node.js application:

const jwt = require('jsonwebtoken');

// After user successfully logs in
const payload = {
  iss: 'dpkcJNrjmiQKgDpo16zzG7ynxhiY4H3V', // The 'key' from Kong JWT credentials
  exp: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour
  user_id: user.id, // Add any custom claims you need
  // Add more user data as needed
};

const token = jwt.sign(payload, 'glgq9wIRiUVjXVN086UMvcWAn1JnYfiz', { algorithm: 'HS256' });

// Return this token to the client

Then in your frontend, include this token in all requests to protected APIs:
fetch('http://localhost:8000/api/auth/users', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})