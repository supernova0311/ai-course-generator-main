# AI Course Generator :rocket:

## Overview :mag:
An AI-powered platform for creating and managing online courses. Built using **Next.js** and integrated with **Clerk** for authentication, **Gemini API** for AI-generated content, and **Firebase** for file storage, this platform allows users to create, track, and manage their courses, while administrators can oversee user and course management.

## Features :sparkles:

- **User Authentication** :lock:
    - Managed via Clerk.
    - Users can sign up, log in, and manage their profiles securely.
    - Ensures secure access to the platform.

- **Admin Dashboard** :bar_chart: 
    - Special access for administrators.
    - Admins can manage users and courses.
    - Provides tools for overseeing platform activities.

- **Course Creation** :books: 
    - Users can generate and manage their own courses.
    - Utilizes AI for content creation.
    - Simplifies the process of course development.

- **File Storage** :floppy_disk: 
    - Courses and media are stored in Firebase.
    - Ensures reliable and scalable storage solutions.
    - Facilitates easy access and management of course materials.

- **AI Integration** :robot: 
    - Content is generated with the Gemini API.
    - Enhances course content with AI-generated materials.
    - Provides dynamic and engaging learning experiences.

- **Responsive UI** :iphone: 
    - Optimized for both desktop and mobile devices.
    - Ensures a seamless user experience across different devices.
    - Adapts to various screen sizes for better accessibility.

- **Progress Tracking** :chart_with_upwards_trend: 
    - Displays user course progress.
    - Helps users keep track of their learning journey.
    - Provides insights into course completion and performance.

- **Role-based Management** :busts_in_silhouette: 
    - Different views for admin and regular users.
    - Ensures appropriate access and functionality based on user roles.
    - Enhances security and user experience by tailoring features to roles.


## Technologies Used

| Technology      | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Next.js 14.x**| A framework for server-side rendering and static site generation.           |
| **Clerk**       | Manages authentication and user profiles securely.                          |
| **Gemini API**  | Generates AI-powered course content.                                        |
| **Firebase**    | Provides file storage and database management.                              |
| **Tailwind CSS**| A utility-first CSS framework for styling.                                  |
| **React Icons** | A library of icons for React applications.                                  |
| **Vercel**      | A platform for hosting and deploying web applications.                      |



## Installation :wrench:

- **Clone the repository**

   ```bash
    git clone https://github.com/mrpankajpandey/ai-course-generator.git
   ```
- **Navigate to the project directory**

   ```bash
    cd ai-course-generator
   ```
- **Install the dependencies**

   ```bash
    npm install
   ```
- **Create a `.env.local` file in the root directory and add the following environment variables**

   ```javascript
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    GEMINI_API_KEY=<your-gemini-api-key>
    FIREBASE_API_KEY=<your-firebase-api-key>
    FIREBASE_PROJECT_ID=<your-firebase-project-id>
    DATABASE_URL=<your-database-url>
   ```
- **Run the development server**

   ```bash
    npm run dev
   ```

## Live Demo :globe_with_meridians:

<a href="https://ai-course-generator-main.vercel.app/">
    <img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
</a>

## THANK YOU FOR WATCHING!!

