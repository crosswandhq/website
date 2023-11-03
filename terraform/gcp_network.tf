// GLOBAL IP
resource "google_compute_global_address" "global_address" {
  name = "crosswand-website-global-address"
}

// DNS
resource "google_dns_record_set" "root_dns" {
  provider     = google
  name         = "crosswand.com."
  type         = "A"
  ttl          = 300
  managed_zone = "crosswand-public-dns"
  rrdatas      = [google_compute_global_address.global_address.address]
}

resource "google_dns_record_set" "www_dns" {
  provider     = google
  name         = "www.crosswand.com."
  type         = "A"
  ttl          = 300
  managed_zone = "crosswand-public-dns"
  rrdatas      = [google_compute_global_address.global_address.address]
}

// FORWARDING
resource "google_compute_url_map" "url_map" {
  name            = "crosswand-website-url-map"
  default_service = google_compute_backend_bucket.site_backend.self_link
}

resource "google_compute_global_forwarding_rule" "forwarding_rule" {
  name                  = "crosswand-website-forwarding-rules"
  load_balancing_scheme = "EXTERNAL"
  ip_address            = google_compute_global_address.global_address.address
  ip_protocol           = "TCP"
  port_range            = "443"
  target                = google_compute_target_https_proxy.https_proxy.self_link
}

resource "google_compute_target_https_proxy" "https_proxy" {
  name             = "crosswand-website-https-proxy"
  url_map          = google_compute_url_map.url_map.self_link
  ssl_certificates = [google_compute_managed_ssl_certificate.root_ssl_cert.self_link]
}
