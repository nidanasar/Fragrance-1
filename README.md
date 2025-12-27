# Fragrance E-commerce Platform

This is a modern e-commerce platform for fragrances, built with a headless CMS architecture.

## Project Structure

```
Fragrance-1/
├── frontend/          # React frontend application
│   ├── public/        # Static assets
│   ├── src/           # Source code
│   │   ├── components/ # React components
│   │   ├── pages/     # Page components
│   │   ├── lib/       # Utilities and Sanity integration
│   │   └── ...        # Other source files
│   ├── package.json   # Frontend dependencies
│   └── ...            # Configuration files
├── cms/              # Sanity CMS backend
│   ├── schemaTypes/   # Sanity schema definitions
│   ├── .env          # CMS environment variables
│   ├── package.json   # CMS dependencies
│   └── ...            # Configuration files
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the frontend directory with the following:
   ```env
   VITE_SANITY_PROJECT_ID="your_project_id"
   VITE_SANITY_DATASET="your_dataset_name"
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

### CMS Setup

1. Navigate to the CMS directory:
   ```bash
   cd cms
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the CMS directory with the following:
   ```env
   VITE_SANITY_PROJECT_ID="your_project_id"
   VITE_SANITY_DATASET="your_dataset_name"
   ```

4. Start the CMS development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

## Architecture

This project uses a headless CMS approach with:

- **Frontend**: React application built with Vite, TypeScript, and Tailwind CSS
- **CMS**: Sanity CMS for content management
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks and context API

## Scripts

### Frontend Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint the code

### CMS Scripts

- `npm run dev` - Start CMS development server
- `npm run build` - Build the CMS
- `npm start` - Start the CMS in production mode
- `npm run deploy` - Deploy the CMS to Sanity

## Environment Variables

### Frontend (.env)

- `VITE_SANITY_PROJECT_ID` - Sanity project ID
- `VITE_SANITY_DATASET` - Sanity dataset name

### CMS (.env)

- `VITE_SANITY_PROJECT_ID` - Sanity project ID
- `VITE_SANITY_DATASET` - Sanity dataset name

## Features

- Responsive design for all device sizes
- Product catalog management via Sanity CMS
- Shopping cart functionality
- Product detail pages
- Content management for marketing materials
- Modern UI with shadcn/ui components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request