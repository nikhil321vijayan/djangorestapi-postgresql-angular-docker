Part1 : Running the back-end django rest api(server) and a postgres DB in docker containers
1. Extract back end folder
2. open terminal in the folder location and type 'docker-compose build'
3. run command 'docker-compose run web python manage.py makemigrations main'
4. run command 'docker-compose run web python manage.py migrate'
5. run command 'docker-compose up'
6. Verify if the postgres and viabackend_web containers are running using 'docker ps'


Part2 : Running the front end angular app in a docker container.
1. Extract front end folder
2. Open terminal and set VIAfrontend as the root directory
3. Run 'docker build -t ng-docker-frontend .' to execute the Dockerfile and create a docker image with the name 'ng-docker-frontend'
4. Open a docker terminal
5. In the docker terminal, type 'docker run -p 4200:4200 ng-docker-frontend' and click enter
6. Open another docker terminal and type 'docker ps' to verify if the front end docker container is up and running
7. Type 'http://<Your docker ip>:4200' or 'http://localhost:4200' depending on the OS.

