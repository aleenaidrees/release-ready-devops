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

## Rollback Strategy

This pipeline supports multiple rollback strategies to ensure safe releases:

- **Re-deploy previous version**: A previously successful build can be redeployed quickly to restore system stability.
- **Git revert**: Faulty changes can be reverted using version control, triggering a new deployment pipeline run.

The fastest rollback approach is re-deploying a previous artefact, as it avoids rebuilding and ensures a known stable version is restored immediately.

## Advanced DevOps Controls

### Infrastructure as Code
Terraform is used to define part of the deployment environment declaratively. The CI workflow runs Terraform init, validate and plan so infrastructure changes can be checked before release. Terraform apply is intentionally not automated, reducing the risk of unsafe infrastructure changes being deployed without review.

### Secret Management
Secrets are not stored in source code. Runtime values are provided through GitHub Actions secrets, while `.env.example` documents the expected configuration format safely. In a production team, this would be extended using a managed secret service such as Google Secret Manager or Azure Key Vault, with access restricted by role.

### Operational Visibility
ReleaseReady exposes a `/health` endpoint for basic service health and a `/version` endpoint for release tracking. The application also writes meaningful runtime logs to stdout, supporting diagnosis after deployment.

### Release Safety
Staging deployments run automatically, while production deployments require manual approval using GitHub Environments. This creates a controlled release gate and reduces the chance of unsafe changes reaching production.

---

---

## Rollback Strategy

The pipeline supports multiple rollback strategies:

- Re-deploy previous artefact: A known stable container image can be redeployed immediately without rebuilding.
- Git revert: Faulty changes can be reverted and redeployed through the pipeline.
- Environment gating: Production requires manual approval, preventing unsafe releases.

The fastest rollback method is re-deploying a previous artefact.

---

## Advanced DevOps Controls

### Infrastructure as Code
Terraform defines infrastructure declaratively. CI runs validate and plan to prevent unsafe changes.

### Secret Management
Secrets are stored in GitHub Actions and not in code. In production, tools like Azure Key Vault would be used.

### Operational Visibility
The system exposes /health and /metrics endpoints and logs activity to stdout for monitoring.

## Author
Aleena Idrees