# ReleaseReady DevOps Pipeline

[![CI](https://github.com/aleenaidrees/release-ready-devops/actions/workflows/ci.yml/badge.svg)](https://github.com/aleenaidrees/release-ready-devops/actions/workflows/ci.yml)
---

## Overview
ReleaseReady demonstrates an end-to-end DevOps workflow for a simple web application. The project emphasises fast feedback, repeatable builds, safe configuration, and observable deployments using GitHub Actions, Docker, and Terraform.

---

## Key Features
- Continuous Integration with GitHub Actions
- Automated build and unit testing
- Docker containerisation
- Infrastructure as Code with Terraform
- Health check endpoint for monitoring

---

## Tech Stack
- Node.js + TypeScript
- Express
- Vitest
- Docker
- GitHub Actions
- Terraform

---

## Project Structure
src/            # Application code  
tests/          # Unit tests  
.github/        # CI/CD workflows  
terraform/      # Infrastructure as Code  

---

## Getting Started (Local)

npm install  
npm run build  
npm test  
npm run dev  

---

## Docker

docker build -t releaseready .  
docker run -p 3000:3000 releaseready  

---

## CI Pipeline
On every push and pull request, the pipeline:
- Installs dependencies  
- Builds the application  
- Runs unit tests  
- Validates Terraform configuration  
- Generates a deployment plan  

---

## Health Check
GET /health  
Returns: { "status": "ok" }

---

## Author
Aleena Idrees