import http.server
import socketserver

PORT = 88
IPV4_ADDRESS = "192.168.178.23"

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((IPV4_ADDRESS, PORT), Handler) as httpd:
    print("Serving at", IPV4_ADDRESS, "on port", PORT)
    httpd.serve_forever()