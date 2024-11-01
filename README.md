  <a id="about"> </a>

# CouponZo (Promotion Engine) 🏷️💲

  
  A coupon generator platform that allows businesses of all sizes to create and distribute coupons easily and efficiently.

 One can generate their own coupons, static or dynamic, and distribute them to their target audience, without worrying
about implementing redemption mechanisms or generating unique codes.

One can easily integrate the redemption APIs into their platform’s source code and need not share their customer
information, making this a complete headless promotional engine

  


  

<p  align="center">


</p>

- <a href="https://couponzoapp.netlify.app" target="_blank">Demo</a>

- [About Project](#about)

- [Features and Interfaces](#features)
  - [Home](#home)
  - [Login and Authentication](#auth)
  - [Dashboard](#dashboard)
  - [Coupon Generation](#coupon-generation-page)
  - [Orders Page](#orders-page)
  - [Profile Page](#profile-page)

- [Tech Stack](#tech-stack)
  - [Front-end](#frontend)
  - [Backend](#backend)
  - [Other Tools](#other)

- [Important Points](#imp-points)
- [Getting Started Instructions](#instructions)
- [Things to know](#things-to-know)
- [Links](#links)
- [Contact](#contact)

  
  
  
  <a id="features"> </a>

## Features and Interfaces

  


1. Home Page   <a id="home"> </a>

   - [Landing Page](https://couponzoapp.netlify.app) which lists all the features of the app
  
   <img width="1835" alt="Screenshot 2022-11-13 at 4 36 11 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/Landing%20Page.png">


 
 2.  Login Page (Authentication)  <a id="auth"> </a>
 
     - Fast and secure authentication 
     - JWT tokens used to persist the authentication state
     - You can just click on the Login button to login as default User.

     <img width="1835" alt="Screenshot 2022-11-13 at 4 35 42 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/Login%20Page.png">
  
2. Dashboard <a id="dashboard"> </a>

	- This is the most important page of the project. One can see see the Total Coupons Generated, Redeemed and Remaining.

	- The user can click on the Create New Order to make new coupons.

    <img width="1835" alt="Screenshot 2022-11-13 at 4 37 01 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/DashBoard.png">

  
3. Create New Order <a id="create-order"> </a>

   - The user can create customized coupons with their desired Order Name

   - The user can customize the orders on the basis of
      <ul>
        <li>
            Coupon Type : <strong>Static</strong> or <strong>Dynamic</strong>
        </li>
        <li>
            Applicable To: <strong>Cart</strong> or <strong>SKU</strong>
        </li>
        <li>
           Discount Type: <strong>Fixed</strong> or <strong>Percentage</strong>
        </li>
        <li>
           Conditions: <strong>Minumum Cart Value</strong> or <strong>Minimum Cart Items</strong>
        </li>
      </ul>
 <img width="1835" alt="Create New Order" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/Create%20New%20Order.png">     
  
4. Orders Page <a id="orders-page"> </a>

   - The user can see all the orders created till date on this page. 

   - The user can also view the coupon details on clicking on specific orders. The user can search for coupons of a specific using the Search Bar.
  

   <img width="1835" alt="Screenshot 2022-11-13 at 5 59 55 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/All%20Orders%20Page.png">

  
  
  
  
5. Profile Page <a id="profile-page"> </a>

   - I've used "clipboard" and "react-syntax-highlighter" library for this highlighting code and copying it.

   - The user can read the documentation on how they can redeem these coupons from their platform.

   - The user can copy and paste the code snippet in their source code of their platform to redeem coupons seemlessly.


  <img width="1835" alt="Screenshot 2022-11-13 at 5 59 55 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/Profile%20Page-1.png">
  <img width="1835" alt="Screenshot 2022-11-13 at 5 59 55 PM" src="https://github.com/omkar-here/frontend-CouponZo/blob/main/Profile%20Page-2.png">

 

## Things to know

#### What are Static Coupons?

- Static coupon codes are a type of coupon code that is pre-generated and
can be used multiple times by different customers until the code expires or is
deactivated. Merchants create static coupon codes with a fixed discount
value, such as a percentage off the total purchase or a flat discount amount.

#### What are Dynamic Coupons?

- Dynamic coupon codes are unique, one-time use codes that are
generated in real-time by a system and are dynamically assigned to a
customer. Each code can only be used once and is generated based on a set
of rules or conditions defined by the merchant, such as a minimum order
value or a specific product category.
  




## Tech stack

  
  <a id="frontend"> </a>
#### Frontend

- React.js

- TailwindCSS
  
  
<a id="backend"> </a>
#### Backend

- Nodejs

- Express

- MongoDB


<a id="other"> </a>
#### Other Tools

- Git & GitHub (For Version Control)
- VS Code (Code Editor)

  

<a id="instructions"> </a>

## Instructions

  
  

1. Clone the project

   -  `https://github.com/omkar-here/CouponZo.git`

2. Navigate to backend directory

    - `cd backend`

4. Install all the packages

   -  `npm install` or `npm i`

6. Run the backend with this command

   -  `npm run dev`

7. Navigate to frontend with these commands
   - `cd ../frontend ` (If you are in the backend directory)
   - `cd frontend` (If you are in the main directory)

8. Install all the packages

    -  `npm install` or `npm i`

9. Run the frontend with this command

   - `npm run dev`
     
10. Open `http://localhost:5173` with your browser to see the app
   
 
<a id="links"> </a>
## Useful Links

- [Complete Video Demonstration](https://youtu.be/eihEk82pWTg) <br>
(This video has everything- right from coupon creation to integration of code with the source code & redemption of coupons)
  
<a id="contact"> </a>
## Need help?

  

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/omkar-anabathula) or at aomkarg2003@gmail.com, 


