# 🚀 GitHub + Netlify Portfolio Deployment Guide

A complete reference guide for hosting and maintaining a portfolio website using GitHub and Netlify.

---

# Part 1: First-Time Setup (One-Time Only)

## Step 1: Install Git

Download Git from:

https://git-scm.com

Verify installation:

```bash
git --version
```

Expected output:

```bash
git version 2.x.x
```

---

## Step 2: Login to GitHub

Open:

https://github.com

Login to your GitHub account.

---

## Step 3: Create a GitHub Repository

1. Click **New Repository**
2. Repository Name:

```text
portfolio
```

3. Select:

```text
Public
```

4. Click **Create Repository**

Example Repository URL:

```text
https://github.com/username/portfolio.git
```

---

## Step 4: Open Portfolio Project in VS Code

Recommended project structure:

```text
Portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume.pdf
│
├── README.md
└── .gitignore
```

Open this folder in VS Code.

---

## Step 5: Initialize Git

Open Terminal and run:

```bash
git init
```

Expected output:

```bash
Initialized empty Git repository
```

---

## Step 6: Connect Local Project to GitHub

Replace the repository URL with your own:

```bash
git remote add origin https://github.com/username/portfolio.git
```

Verify connection:

```bash
git remote -v
```

---

## Step 7: Create First Commit

Add all project files:

```bash
git add .
```

Create commit:

```bash
git commit -m "Initial portfolio upload"
```

---

## Step 8: Set Main Branch

```bash
git branch -M main
```

---

## Step 9: Upload Project to GitHub

```bash
git push -u origin main
```

Your project is now available on GitHub.

---

# Part 2: Deploy on Netlify

## Step 10: Create Netlify Account

Open:

https://www.netlify.com

Login using GitHub.

---

## Step 11: Import GitHub Repository

Follow:

```text
Add New Site
↓
Import Existing Project
↓
GitHub
↓
Select Repository
↓
portfolio
```

---

## Step 12: Deployment Settings

For a simple HTML/CSS/JavaScript portfolio:

### Build Command

Leave empty.

### Publish Directory

```text
.
```

Click:

```text
Deploy Site
```

---

## Step 13: Website Goes Live

Example URL:

```text
https://amazing-name-123.netlify.app
```

or

```text
https://yourportfolio.netlify.app
```

---

# Part 3: Daily Workflow (Most Important)

Whenever you make changes to the website:

### Step 1

```bash
git add .
```

### Step 2

```bash
git commit -m "Describe changes"
```

Example:

```bash
git commit -m "Updated skills section"
```

### Step 3

```bash
git push
```

Done.

---

## Automatic Deployment Flow

```text
Git Push
    ↓
GitHub Updated
    ↓
Netlify Detects Changes
    ↓
New Deployment Starts
    ↓
Website Automatically Updated
```

No manual upload is required.

---

# Part 4: One-Line Shortcut

If you want to perform all steps at once:

```bash
git add . && git commit -m "update" && git push
```

---

# Part 5: Working From a New Laptop or PC

If you want to edit the same project from another computer:

## Step 1: Install Git

```bash
git --version
```

---

## Step 2: Clone Repository

Replace the URL with your repository URL:

```bash
git clone https://github.com/username/portfolio.git
```

Example:

```bash
git clone https://github.com/abhisheksharma12891/portfolio.git
```

---

## Step 3: Open Project

```bash
cd portfolio
```

Open in VS Code:

```bash
code .
```

---

## Step 4: Make Changes

Edit files as needed.

---

## Step 5: Push Updates

```bash
git add .
git commit -m "Updated portfolio"
git push
```

Netlify will automatically redeploy the website.

---

# Quick Reference Commands

## First-Time Upload

```bash
git init
git remote add origin REPOSITORY_URL
git add .
git commit -m "Initial upload"
git branch -M main
git push -u origin main
```

---

## Daily Updates

```bash
git add .
git commit -m "Update message"
git push
```

---

## Clone on Another Computer

```bash
git clone REPOSITORY_URL
cd portfolio
code .
```

---

# Most Important Commands to Remember

```bash
git clone REPOSITORY_URL
git add .
git commit -m "message"
git push
```


```bash
git pull
git add .
git commit -m "message"
git push
```
If you remember these four commands, you can manage and update your portfolio from any computer in the world.
