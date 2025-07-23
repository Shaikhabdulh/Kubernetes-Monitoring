# Use Alpine Linux as base
FROM alpine:3.19

# Install lighttpd
RUN apk add --no-cache lighttpd

# Create app dir and copy files
WORKDIR /var/www/localhost/htdocs
COPY index.html style.css script.js ./
COPY sounds/ ./sounds/

# Expose port 80
EXPOSE 80

# Start Lighttpd
CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
