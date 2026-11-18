import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages hosts project sites under /<repository-name>/.
// The workflow sets GITHUB_ACTIONS=true and Vite uses that repository path.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
