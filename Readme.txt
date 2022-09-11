https://fauna.com/blog/how-to-build-microservices-with-node-js

1- Build first microservice to call external API ( the external API represent other microservice)
   it's server with main structure / controller / router / service 

2- Extend this example to be multi microservice controlled by NGINX ( as reverse proxy )
   
   Now ... NGINX WILL WORK IN FRONT OF node servers and it will receive and redirect requests from client to each node server

   a)- we will add two simple and small nodejs servers ( server2.js & server3.js)
   b)- we should then update /nginx/config/nginx.conf 
     
     
    server {
    listen 8070;
    listen [::]:8070;
    server_name yourdomain.example;

    location ^~ /api1/{
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass    http://127.0.0.1:3000/;
    }
    
    location ^~ /api2/{
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass    http://127.0.0.1:4000/;
    }

    location ^~ /api3/{
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass    http://127.0.0.1:5000/;
    }
}

  d)- use pm2 to run all servers (services) at the same time using one command 
      add for that process.js file 
      - run command >>>> pm2 start process.json

      this will start all services

  c)- For testing :
      make request from server1 : http://127.0.0.1/api1/person
      make request from server1 : http://127.0.0.1/api1/about
      make request from server2 : http://127.0.0.1/api2/
      make request from server3 : http://127.0.0.1/api3/

3- Configure NGINX TO Serving Static Assets :
   we can easily configure it to serve up any static assets our app requires. 
   This will save the overhead of passing through these requests for Node to handle.

4- Configure NGINX for Load Balancing 
  
  we created three simple servers server4_1  /  server4_2  /  server4_3
  - those servers will serve /api4 requests
  - server4_3 is down / offline 
  - nginx file configured  to support Load Balancing for /api4
  - see nginx configuration file to understand this .
  - batch file was created to kill all nginx runnuing tasks ( kill_all_nginx_tasks.bat ) 