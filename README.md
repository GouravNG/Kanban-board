# Trello Clone

This project is a feature-rich, full-stack Trello clone built with modern web technologies. It provides a flexible and intuitive Kanban-style board for managing tasks and workflows, allowing users to create, organize, and track their work seamlessly. The application supports drag-and-drop functionality for both columns and tasks, real-time updates, and a modular architecture that makes it easy to extend and customize.

![20251130-1624-25 6108393](https://github.com/user-attachments/assets/81f460e4-9f41-44ac-b89d-c23685474fd6)


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

- Node.js (v22 or higher)
- pnpm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/GouravNG/Kanban-board.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd  Kanban-board
   ```
3. **Install the dependencies**:
   ```sh
   pnpm install
   ```
4. **Start the development server**:
   ```sh
   pnpm run dev
   ```
5. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.
