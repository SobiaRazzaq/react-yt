// _______________________________________________________________________Overview 
//--------------------- to create element in js 
// // to create element in it using js
// var h1 = document.createElement('h1')
// // to enter the text in h1 
// h1.innerHTML = 'Hello from js'
// // this will print the h1 in console log not shown on the screen 
// console.log(h1)
// // to show the element on the screen 
// document.body.appendChild(h1)


//--------------------- to create element in react js
//  (is a library(to give feature to the website  or give one feature or customization
// eg 
// - GSAP which is animation library
// -Lenis which is used for smooth scrolling in website
// -React js to show UI ))

// framework is used to in built whole website feature , no customization
// eg Next js 
// Angular js 


// _______________________________________________________________________________Import &  Export  to use this we add type = module in the script file link in html
// to use multiple file 
// export are of two types(1   named export ,2  defalut export(just one thing ))
// we want to use the a variable created in other file app.js
// default import
// import a from './app.js'      //any name of variable is can be given 
// console.log(a);

// named export
// import{arr} from './app.js'        //correct name of variable is very important 
// console.log(arr);


// _______________________________________________________________________________________Real DOM vs Virtual DOM 
// real DOM (html actuall dom -->when we want to make that when we clickk on a button then to chage html of h1 tag then the whole page reload )
// Virtual DOM (this solve above problem by making copy of real dom then make changes by comparing the copy dom with real dom the apply the changes)




// ______________________________________________________________________________________________JSX((javascript XML) or (HTML + JS) )
// to create the element through js 
// we have to do the whole work 
//  var h1 = document.createElement('h1')
// h1.innerHTML = 'Hello from js'
// document.body.appendChild(h1)


// but through JSX we just enter in ___ .jsx file u can see this file for further details
// var  h1 = <h1>hello</h1>
