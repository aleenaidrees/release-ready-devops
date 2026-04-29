terraform {
  required_version = ">= 1.5.0"

  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

provider "local" {}

resource "local_file" "deployment_environment" {
  filename = "${path.module}/deployment-environment.txt"

  content = <<EOT
ReleaseReady Infrastructure Definition

Environment separation:
- staging: automatic deployment after CI/CD checks
- production: manual approval before release

Safety controls:
- terraform validate checks syntax
- terraform plan previews infrastructure changes
- terraform apply is not run automatically
EOT
}