# Birthday Celebration Web Application

## Overview

This is a full-stack web application built to create a beautiful birthday celebration experience. The application features a photo slideshow, interactive animations, confetti effects, and music controls to create an engaging birthday celebration webpage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful API with /api prefix

### Key Design Decisions

1. **Monorepo Structure**: The application uses a monorepo with shared types and schemas between client and server
2. **Component-First UI**: Built with shadcn/ui for consistent, accessible components
3. **Type Safety**: Full TypeScript implementation across frontend and backend
4. **Serverless Database**: Uses Neon Database for scalable PostgreSQL hosting
5. **Modern Build Pipeline**: Vite for fast development and optimized production builds

## Key Components

### Frontend Components
- **BirthdayPage**: Main celebration page with hero section and interactive elements
- **PhotoSlideshow**: Automatic slideshow with navigation controls for birthday photos
- **ConfettiAnimation**: Animated confetti effects for celebration atmosphere
- **MusicControls**: Audio player with volume controls for background music
- **UI Components**: Complete shadcn/ui component library for consistent design

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with authentication preparation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Migration System**: Drizzle migrations for database schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls to Express server
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Flow**: JSON responses sent back to React frontend
5. **State Management**: TanStack Query manages server state and caching

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: express-session with PostgreSQL store
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build System**: Vite with React plugin
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Code Quality**: TypeScript compiler for type checking
- **Asset Management**: Vite asset handling with alias support

## Deployment Strategy

### Development Environment
- **Local Development**: tsx for server, Vite dev server for client
- **Database**: Environment variable-based connection to Neon Database
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend

### Production Build
- **Frontend**: Vite build generates optimized static assets
- **Backend**: esbuild bundles server code for Node.js runtime
- **Database**: Drizzle migrations applied via `db:push` command
- **Deployment**: Single build command creates both client and server bundles

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Build Outputs**: Client assets to `dist/public`, server bundle to `dist/`
- **Static Serving**: Express serves built frontend in production mode

The application is designed as a celebration webpage with room for expansion into a full user management system, with the database schema and authentication foundations already in place.