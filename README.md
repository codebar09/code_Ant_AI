"# code_Ant_AI" 
# GitHub Repository Viewer

A modern web application for viewing GitHub repositories with user authentication, built using React, TypeScript, and other modern technologies.

## Features

- **🔐 User Authentication**: Secure login with username and password.
- **📱 Responsive Design**: Optimized for both desktop and mobile devices.
- **📊 Repository Dashboard**: View and manage GitHub repositories in a clean, easy-to-use dashboard.
- **🔄 Real-time Data Updates**: Data updates are reflected in real-time, ensuring a seamless experience.
- **🎨 Modern UI**: Styled with Tailwind CSS for a sleek, modern interface.

## Tech Stack

- **React 18**: A popular JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better tooling and fewer bugs.
- **Tailwind CSS**: A utility-first CSS framework for designing custom, responsive UIs.
- **JSON Server**: A simple fake REST API for development purposes.
- **Axios**: A promise-based HTTP client for making requests to APIs.
- **React Router DOM**: Used for navigation between pages in a React application.
- **Lucide React Icons**: A set of high-quality icons for use in React applications.


## Getting Started

### 1. Clone the repository:

```bash
git clone <repository-url>
cd github-repo-viewer
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the JSON Server (database):

This will serve the API and simulate backend functionality.

```bash
npm run server
```

### 4. Start the development server:

```bash
npm run dev
```

This will start the web application in development mode, usually accessible at `http://localhost:****`.


## API Endpoints

### 1. **GET /users**
   - Returns a list of users.
   - Example response:
     ```json
     [
       {
         "id": 1,
         "username": "demo",
         "password": "demo123"
       }
     ]
     ```

### 2. **GET /repositories**
   - Returns a list of repositories.
   - Example response:
     ```json
     [
       {
         "id": 1,
         "name": "awesome-project",
         "owner": "user123",
         "description": "An awesome project description",
         "stars": 250
       }
     ]
     ```

## Development

### To start the application in development mode:

```bash
npm run dev
```

### To start the JSON server (mock API):

```bash
npm run server
```

### To build the application for production:

```bash
npm run build
```

### To preview the production build:

```bash
npm run preview
```

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request to merge your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
