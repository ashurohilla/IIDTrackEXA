# starting the project 


## clone the project

`git clone "url://github.com"`

##  create your environment 
`pyhton -m venv env`


## activate the enviornment

`cd env`
`cd Scripts`
`activate`




##  starting the project


`cd IID_TRACK_exa    #### project root directory `


## ruining database migrations 
 `python manage.py makemigrations`


 next ---------->>

 `python manage.py migrate`



 ##  installing dependencies

 `pip install -r requirements.txt`


## configure the tailwind for the project

run  `python manage.py tailwind start`

### if the above comamnd did not work use the below three comands to install the dependencies of tailwind


### enter into the theme folder using change directory


`cd theme`

`cd static_src`

`npm install`

## run server 

`python manage.py runserver 8002`  ------> port 8002 is optional


## run tailwind server with 

`python manage.py tailwind start`  --->  run in another terminal 


## note -->  for proper running of project you have to run above   both  comands at the same time one for tailwind watch and one for running the server 





### if all done  ❤️  yeah ---> 


## for deactivating the environment

`deactivate`


#project info 

## you can create templates in the template folder







