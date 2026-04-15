# AI Collective, UC Davis - Git Workshop

This is a Vite + React + TypeScript project for the AI Collective Git workshop, showcasing Spring Quarter projects with team accordions.

## Git Workshop Flow

1. **Fork the Repository**: Each Project Manager (PM) forks this repository to their GitHub account.

2. **Create Team File**: PMs copy `src/data/team-template.ts` to create their team file (e.g., `src/data/team-1.ts`), updating the team name, PM name, and placeholders for members.

3. **Add Team Members**: Teammates clone the forked repo, add their names and fun facts to the team file, and push changes.

4. **Open Pull Request**: PMs review changes and open a Pull Request (PR) back to the main repository to merge their team data.

5. **Merge and Deploy**: Instructors merge approved PRs, updating the live showcase page.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

- `src/data/`: Team data files
  - `team-template.ts`: Template for new teams
  - `team-1.ts` to `team-8.ts`: Individual team data
  - `index.ts`: Exports all teams
- `src/App.tsx`: Main component rendering the showcase
- `src/App.css`: Dark theme styles with gradients and animations
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
