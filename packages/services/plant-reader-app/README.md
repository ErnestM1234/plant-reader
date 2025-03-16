# Plant Reader Web Application

A Next.js application that provides a beautiful, paper-styled interface for monitoring plant moisture levels. This web app is part of the larger Plant Reader IoT system.

## Features

- 🌱 **Plant Management**
  - View all your plants in one place
  - Individual plant detail pages
  - Historical moisture trends
- 📊 **Real-time Moisture Monitoring**

  - Live updates of plant moisture levels
  - Historical data visualization using Chart.js
  - Support for multiple sensors per plant

- 🎨 **Paper-Styled Design**

  - Unique notebook-like interface
  - Animated doodles for visual interest
  - Responsive layout for all devices

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**:
  - TailwindCSS for utility classes
  - Custom CSS for paper styling
- **Data Visualization**: Chart.js with react-chartkick
- **State Management**: React hooks and Server Components

## Project Structure

```
src/
├── actions/          # Server actions for data fetching
├── app/             # Next.js app router pages
├── components/      # Reusable React components
│   ├── Paper/      # Paper styling components
│   ├── List/       # List components
│   └── ...         # Other shared components
├── lib/            # Utility functions and helpers
└── types/          # TypeScript type definitions
```

## Key Components

- **Paper Components**: Provides the notebook-like styling

  - `Paper`: Main container with lined background
  - `LinedContent`: Content with notebook lines
  - `UnlinedContent`: Clean content areas

- **Doodles**: Animated decorative elements

  - Random positioning
  - Floating animations
  - Configurable count

- **Charts**: Moisture level visualization
  - Historical trends
  - Real-time updates
  - Responsive design

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables:

   ```
   DATABASE_URL=your_database_url
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Development

### Styling

- TailwindCSS for utility-first styling
- Custom CSS variables for paper styling:
  ```css
  :root {
    --paper-color: #fffefa;
    --line-color: #95c6e9;
    --line-spacing: 1.5rem;
  }
  ```

### Data Flow

1. Server components fetch initial data
2. Data passed to client components as props
3. Client components handle interactivity
4. Real-time updates via client-side hooks

## Contributing

1. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:

   ```bash
   git commit -m "feat: add your feature"
   ```

3. Push and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint
- `pnpm type-check`: Run TypeScript checks

## Related

- [Main Project README](../../README.md)
