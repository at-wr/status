## Personal Status

This project demonstrates an automated system to update and present my current status using GitHub Actions and iOS Shortcuts. The status is updated in `status.txt` and can be viewed [here](https://at-wr.github.io/status).

### Structure

- **Branches:**
  - **main:** Contains the GitHub Actions workflows and `status.txt`
  - **web:** Hosts the frontend webpage

### Triggering GitHub Actions

To set up automatic status updates, follow these steps:

1. Create a [Personal Access Token](https://github.com/settings/tokens) for this project with the following permissions:
   - `Read and write access to actions`
   - `Read access to metadata`
   - Restrict the token's access to this repository only

2. In the Shortcuts app on iOS, create a new shortcut with the following details:
   - **Action:** `Get contents of URL`
   - **URL:** `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/actions/workflows/update_status.yml/dispatches`
   - **Method:** `POST`
   - **Headers:**
     - `Accept`: `application/vnd.github.v3+json`
     - `Authorization`: `Bearer GITHUB_ACCESS_TOKEN`
   - **Request Body:**
     ```json
     {
       "ref": "main",
       "inputs": {
         "status": "YOUR_STATUS"
       }
     }
     ```

Replace `YOUR_USERNAME`, `YOUR_REPOSITORY`, `GITHUB_ACCESS_TOKEN`, and `YOUR_STATUS` with your actual GitHub username, repository name, personal access token, and status message, respectively.
