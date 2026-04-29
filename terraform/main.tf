provider "local" {}

resource "local_file" "example" {
  content  = "Hello from Terraform"
  filename = "${path.module}/example.txt"
}