resource "google_storage_bucket" "static_site" {
  name          = "crosswand.com"
  location      = "US"
  force_destroy = true

  uniform_bucket_level_access = false

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
  cors {
    origin          = ["https://crosswand.com", "https://www.crosswand.com"]
    method          = ["GET", "HEAD"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

data "google_iam_policy" "public" {
  binding {
    role    = "roles/storage.objectViewer"
    members = ["allUsers"]
  }
}

resource "google_storage_bucket_iam_policy" "public_policy" {
  bucket      = google_storage_bucket.static_site.name
  policy_data = data.google_iam_policy.public.policy_data
}
