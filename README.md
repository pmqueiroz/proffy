<!-- 
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->


<div align="center">
    <img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>
</div>

<p align="center">
    Online teaching platform made with React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>




<div align="center">
    <a src="https://github.com/pmqueiroz/proffy/blob/master/LICENSE"><img src="https://img.shields.io/github/license/pmqueiroz/proffy?color=%238257E5"></img></a>
    <img src="https://img.shields.io/github/stars/pmqueiroz/proffy?color=8257E5&logo=github"></img>
    <img src="https://img.shields.io/github/last-commit/pmqueiroz/proffy?color=%238257E5"></img>
    <a src="https://www.codacy.com/manual/pmqueiroz/proffy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pmqueiroz/proffy&amp;utm_campaign=Badge_Grade"><img src="https://img.shields.io/netlify/b4d3ee80-98f0-42d0-b3d0-13879c811a00?color=%238257E5"></img></a>
    <!-- <a src="https://pmqueiroz-proffy.netlify.app"><img src="https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db"></img></a> -->
</div>


### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Web](#Web)
        * [Server](#Server)
        * ~~Mobile~~
    * [Running](#Running)
* [Issues](#Issues-)
    * [Report](#Report)
    * ~~Trouble Shooting~~
* [Contributing](#Contributing-)
* [License](#License-)

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

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in web directory
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

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
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
# Entering in web directory
$ chdir web

# Run the web server
$ yarn start
```

To start the Back Server run the command

```ps
# Entering in Server directory
$ chdir server

# Run the Back Server
$ yarn start
```

### Issues 🐛

#### Report

In case you are having any problem do not be shy to report to us in [Issues](https://github.com/pmqueiroz/proffy/issues/) session.

### Contributing 🤝 

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork pmqueiroz/proffy

# Clone your fork
$ git clone {your-fork-url}
$ chdir proffy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project


### License 📝
This project is under the MIT license. See the [LICENSE](https://github.com/pmqueiroz/proffy/blob/master/LICENSE) for more information.