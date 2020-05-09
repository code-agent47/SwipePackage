# SwipePackage
An npm package that let's you swipe scroll-able divs horizontally  and vertically. This package exposes two methods 
1. swipeHorizontally
2. swipeVertically

# Installation
To use this package, you have to install it like every other package. To install it use the command below
### npm install SwipePackage

# Getting started
After successfull installation of the package, you can use the two methods above by either importing the package or requiring it.
An example of importing it is the code snippet below
#### import { swipeVertically, swipeHorizontally }  from 'swipepackage';
An example of requiring it is the code snippet below
#### const swipePackage = require('swipepackage);
#### const {swipeVertically,swipeHorizontally} = swipePackage;

# Using the package
The two methods of the package accepts two arguments.
1. the DOM element (the parent element or in other words the container of your swipe elements)
2. the speed at which you want them to swipe. Below is an example
#### slideVertically(document.getElementsByClassName("dashboard-slide")[0],2);

### Below is a project example in react

[project Example] (https://glitch.com/~snow-knowing-art)






