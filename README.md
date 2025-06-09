# Personal Landing Page

This repository contains a simple personal landing page project, built with HTML and CSS. It showcases various interests and is designed to be easily deployable to GitHub Pages.

## Project Structure

- `index.html`: The main HTML file for the landing page.
- `style.css`: The CSS file for styling the landing page.
- `README.md`: This file, providing information about the project and deployment.

## Deploying to GitHub Pages

Here's how you can deploy this landing page to GitHub Pages:

1.  **Create a GitHub Repository:**
    *   If you haven't already, create a new public repository on GitHub.
    *   Give it a name (e.g., `my-landing-page` or `your-username.github.io`).

2.  **Push Your Code:**
    *   Add your local project files (`index.html`, `style.css`) to this new repository.
    *   Commit and push your changes to the `main` (or `master`) branch.
    *   Example commands (run in your project directory):
        ```
        git init
        git add index.html style.css README.md
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin YOUR_REPOSITORY_URL
        git push -u origin main
        ```
    *   Replace `YOUR_REPOSITORY_URL` with the actual URL of your GitHub repository (e.g., `https://github.com/your-username/your-repository-name.git`).

3.  **Navigate to Repository Settings:**
    *   Go to your repository on GitHub.com.
    *   Click on the "Settings" tab.

4.  **Go to the "Pages" Section:**
    *   In the left sidebar of the Settings page, click on "Pages" (under "Code and automation").

5.  **Configure GitHub Pages:**
    *   **Source:** Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   **Branch:**
        *   Select the branch: `main` (or `master`).
        *   Folder: `/ (root)`.

6.  **Save and Wait:**
    *   Click "Save".
    *   GitHub will build and deploy your page. This might take a few minutes.
    *   The URL for your live page will appear at the top of the "Pages" settings once ready.

7.  **Access Your Page:**
    *   Your page will be available at `https://your-username.github.io/repository-name/`.
    *   (If your repository is named `your-username.github.io`, it will be at `https://your-username.github.io/`).

If you make further changes, push them to the configured branch, and GitHub Pages will automatically redeploy.
