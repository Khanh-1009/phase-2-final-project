# Phase-2 Final Project - The Sumo BBQ Restaurant

## Learning Goals

* Create a single page application using create-react-app.
* To identify and understand React components and props. To create components that return JSX and use props to make component dynamic.
* Understand the flow of information between components with props.
* Update state based on events and work with multiple state variables together.
* Add event listeners to DOM elements in React and implement a controlled form.
* Use the `useEffect` hook and use event handlers with `fetch` to send data to an API and update state after receiving data.
* Create multiple client-side routes.

## Introduction

The idea of creating a restaurant app came to my mind quite early when I was taking the phase-2 course. React is really suitable for it, and I've enjoyed working on it so much. Have you ever wondered how food orders can be processed so quick without seeing waiters in the All You Can Eat restaurants? All we need to do is order your dishes through an ipad that is installed on your table. Your orders will be received in a second and delivered to your table in less than 5 minutes. 

In order to create this project, I truly appreciate the Sumo BBQ restaurant in Ho Chi Minh city, Vietnam and Q-Pot BBQ & Hot pot restaurant in San Jose, USA. I have understood more about Food & Beverage industry and had good ideas from it. Their websites also provide me beatiful photos, and there are more nice photos that I used for my project, which are from other websites below.

![Link](https://sumoyakiniku.com.vn/)

![Link](https://www.qpotsanjose.com/)

## Instructions

There are 9 components in this projects: `<App>`,`<Home>`,`<Menu>`, `<MenuCard>`,`<MenuForm>`,`<Beverages>`,`<BeverageCard>`, `<Contact>`, `<NavBar>`, and 3 additional files `<index.js>`, `<data.js>`, `<index.css>`.

src/
├── App.js
├── Home.js
├── Menu.js
├── MenuCard.js
├── MenuForm.js
├── Beverages.js
├── BeverageCard.js
├── Contact.js
├── NavBar.js
├── index.js
├── index.css
└── data.js

* We will start with `App` which is the parent component with other components. I render the `NavBar` and four React Router `Route` components with the following paths:

- `/menu`: should render the `Menu` component
- `/beverages`: should render the `Beverages` component
- `/contact`: should render the `Contact` component
- `/`: should render the `Home` component

* Created a file `db.json`, and posted a collection of 14 objects with 2 attributes and named it "food".
* Made GET request in `App` and pass the list of food down to `Menu` component as a prop. In `Menu`, we use map method then continue pass the `<foodList>` as props to `MenuCard`, which has the set up to display the food on the website.
* If the clients would like to create their own orders, they can make a request for what they like. I created a controlled form in `MenuForm` for the POST request to add new food items in the menu.
* When the clients don't like the foods on the menu anymore, they can hit the `Not My Favorite`button to delete them. I made the DELETE request in `MenuCard`. I also created an `onClick` event handler for the `Place Order` button.
* For `Beverages`, I created `data.js` file, which contains the array of beverages. I passed the data down as a prop to `Beverages` component, then used map method and continue passed it as a prop to `BeverageCard` as a prop object. The beverage menu will be displayed.

## Conclusion

When I started taking Phase-2 React course, it was really challenging. I kept thinking about how to work with vanilla JS, so I was struggling to get used to the new concept. However, I am getting much better now, and I actually enjoy learning it more. The project is a great chance to apply what I've learned, and I am pretty happy about my work!