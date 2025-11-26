# Trello Clone

This project is a feature-rich, full-stack Trello clone built with modern web technologies. It provides a flexible and intuitive Kanban-style board for managing tasks and workflows, allowing users to create, organize, and track their work seamlessly. The application supports drag-and-drop functionality for both columns and tasks, real-time updates, and a modular architecture that makes it easy to extend and customize.

## Key Features

- **Authentication**: Secure user authentication is handled by Clerk, ensuring that all user data is protected and accessible only to authorized individuals.
- **Dashboard**: The central dashboard provides a comprehensive overview of all boards, displaying key metrics such as the total number of boards, tasks, and completed tasks. Users can easily view their boards in either a grid or list format.
- **Board Management**: Users can create, edit, and delete boards as needed. Each board can be customized with a unique name, description, and background color, allowing for clear visual organization.
- **Task and Column Management**: Within each board, users can create, edit, and delete columns and tasks. The application supports drag-and-drop functionality, enabling users to reorder columns and move tasks between columns with ease.
- **Persistence**: All board, column, and task data is stored in a database, ensuring that the application state is preserved across sessions. This guarantees a consistent and reliable user experience.

## Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/trello-clone.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd trello-clone
   ```
3. **Install the dependencies**:
   ```sh
   npm install
   ```
4. **Start the development server**:
   ```sh
   npm run dev
   ```
5. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

The project is organized into the following directories:

- **app/**: Contains the core application logic, including pages, layouts, and routing.
  - **boards/**: Handles the display and management of individual boards.
  - **dashboard/**: Manages the main user dashboard.
- **components/**: Includes all reusable UI components, such as forms, buttons, and dialogs.
  - **Forms/**: Contains all forms used for creating and updating boards, columns, and tasks.
  - **skeletons/**: Provides loading skeletons for a smoother user experience.
  - **ui/**: Houses the basic UI primitives, such as buttons, inputs, and cards.
- **lib/**: Contains shared libraries, utility functions, and server-side logic.
  - **endpoints/**: Defines the API endpoints for boards, columns, and tasks.
  - **functions/**: Includes the core functions for interacting with the API.
  - **hooks/**: Contains custom React hooks for managing state and side effects.
  - **queryclient/**: Manages the React Query client for data fetching and caching.
  - **schema/**: Defines the data schemas for boards, columns, and tasks.
  - **server-fn/**: Includes server-side functions for authentication and data management.
  - **types/**: Contains all custom type definitions for the project.
- **store/**: Manages the application's global state.

## Technologies Used

- **Next.js**: A powerful React framework for building server-side rendered and statically generated web applications.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs with ease.
- **Clerk**: A complete user management solution for handling authentication and user identity.
- **Radix UI**: A collection of accessible and unstyled UI primitives for building high-quality design systems.
- **Lucide React**: A library of beautiful and consistent icons for React applications.
- **Sonner**: A toast notification library for creating elegant and unobtrusive notifications.
- **React Query**: A powerful data-fetching library for managing server state in React applications.
- **Axios**: A promise-based HTTP client for making requests to the server.
- **Drizzle**: A TypeScript ORM for building and managing database schemas.
- **Neon**: A serverless PostgreSQL database for modern web applications.
- **Zod**: A TypeScript-first schema declaration and validation library.
