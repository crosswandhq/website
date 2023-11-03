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

resource "google_storage_bucket_access_control" "public_rules" {
  bucket = google_storage_bucket.static_site.name
  role   = "READER"
  entity = "allUsers"
}
