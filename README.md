Autoprophet Frontend 

  -Login page
  
  -Signup Page
  
  -Edit Profile Page

frontend: http://35.174.137.184/
backend: http://35.174.137.184:7777/

Domain Name: Autoprohphet.com => 35.174.137.184

Frontend: Autoprophet.com
Backend: Autoprophet.com:7777 => Autoprophet.com/api

 nginx config :

 server_name 35.174.137.184;

 location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        }
