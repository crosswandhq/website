resource "google_compute_backend_bucket" "site_backend" {
  name        = "crosswand-website-backend"
  bucket_name = google_storage_bucket.static_site.name
  enable_cdn  = true
}
