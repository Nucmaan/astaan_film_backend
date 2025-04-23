# Astaan Film Backend

This repository contains the microservices architecture for the Astaan Film backend.

## Services

- **User Service**: Handles user authentication, registration, and profile management
- **Task Service**: Manages tasks and assignments
- **Project Service**: Handles project creation and management
- **Payment Service**: Processes payments and financial transactions
- **Notification Service**: Manages notifications and alerts
- **Chat Service**: Enables real-time chat communication
- **Analytics Service**: Provides analytics and reporting capabilities

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Git

### Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/astaan_film_backend.git
   cd astaan_film_backend
   ```

2. Start the services:
   ```
   docker-compose up -d
   ```

3. To check the status of the containers:
   ```
   docker-compose ps
   ```

### Service Endpoints

Each microservice is accessible through its own port:

- User Service: http://localhost:8001
- Project Service: http://localhost:8002
- Task Service: http://localhost:8003
- Notification Service: http://localhost:8004
- Chat Service: http://localhost:8005
- Analytics Service: http://localhost:8007
- Payment Service: http://localhost:8008

## Development

### Adding a New Service

1. Create a new service directory
2. Add your service to the `docker-compose.yml` file
3. Configure the necessary dependencies (database, Redis, etc.)

### Stopping the Services

```
docker-compose down
```

To remove all data (including volumes):
```
docker-compose down -v
```

## Troubleshooting

If you encounter any issues:

1. Check container logs:
   ```
   docker-compose logs [service-name]
   ```

2. Restart a specific service:
   ```
   docker-compose restart [service-name]
   ```

3. Rebuild a service:
   ```
   docker-compose up -d --build [service-name]
   ```