FROM alfg/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 1935
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]