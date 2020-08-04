<!-- 
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->
<p align="center">
    <img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>
</p>

<p align="center">
    Online teaching platform made with React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>




<p align="center">
    <a src="https://github.com/pmqueiroz/proffy/blob/master/LICENSE"><img src="https://img.shields.io/github/license/pmqueiroz/proffy?color=%238257E5"></img></a>
    <img src="https://img.shields.io/github/stars/pmqueiroz/proffy?color=8257E5&logo=github"></img>
    <img src="https://img.shields.io/github/last-commit/pmqueiroz/proffy?color=%238257E5"></img>
    <a src="https://www.codacy.com/manual/pmqueiroz/proffy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pmqueiroz/proffy&amp;utm_campaign=Badge_Grade"><img src="https://img.shields.io/netlify/b4d3ee80-98f0-42d0-b3d0-13879c811a00?color=%238257E5"></img></a>
    <a src="https://pmqueiroz-proffy.netlify.app"><img src="https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db"></img></a>
</p>

### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Web](#Web)
        * [Server](#Server)
        * ~~Mobile~~
    * [Running](#Running)
* [Issues](#Issues-)
    * ~~Report~~
    * ~~Trouble Shooting~~
* ~~Contributing~~
* [License](#License)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/pmqueiroz/proffy.git

# Access the project folder
$ chdir proffy
```

#### Requirements
* [Node.js](https://nodejs.org/en)
* [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Expo](https://expo.io/)

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ chdir web
$ yarn install
```

>The above command will install all third party dependencies user. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering on web directory
$ chdir web

# Installing depencies
$ yarn add @types/react-router-dom -D
```

##### Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ chdir server
$ yarn install
```

>The above command will install all third party dependencies user. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering on server directory
$ chdir server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```

#### Running

To start the Web Server run the command

```ps
# Entering on web directory
$ chdir web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering on Server directory
$ chdir server

# Run the Back Server
$ yarn start
```

### Issues 🐛

#### Report

In case you are having any problem do not shy to report to us in [Issues](https://github.com/pmqueiroz/proffy/issues) session.

### License 📝
This project is under the MIT license. See the LICENSE for more information.