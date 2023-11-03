resource "google_compute_managed_ssl_certificate" "root_ssl_cert" {
  name = "crosswand-website-ssl-cert"
  managed {
    domains = [google_dns_record_set.root_dns.name]
  }
}