terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
  backend "gcs" {
    bucket = "crosswand-website-tfstate"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = "crosswand-website-404002"
  region  = "us-central1"
  zone    = "us-central1-c"
}
