# Vinod Awati Portfolio

A React + Vite portfolio prepared for GitHub Pages deployment.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on GitHub Pages

1. Create a GitHub repository (for example, `vinod-awati-portfolio`).
2. Upload the complete contents of this folder to the repository's `main` branch. Keep the `.github/workflows/deploy.yml` file; it enables automatic deployment.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.
6. Your site will be published at `https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.

Every push to `main` will trigger a new deployment.

## Notes

- The Vite configuration automatically sets the correct base path for GitHub Pages project repositories.
- The profile photo and resume are stored in `public/assets/` and are included in the deployment.
- The contact form opens the visitor's email application with a prefilled message; it does not store submissions on a server.
