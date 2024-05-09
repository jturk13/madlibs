### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript library developed by Facebook for building user interfaces, particularly for web applications. It's often used for creating single-page applications (SPAs) where user interaction is dynamic and frequent. React allows developers to create reusable UI components, which can then be composed to build complex user interfaces efficiently.

- What is Babel?

Babel is a popular JavaScript compiler that allows developers to write code using the latest ECMAScript (JavaScript) syntax and features, while ensuring compatibility with older browsers and environments that may not support those features natively. It essentially translates (or "transpiles") modern JavaScript code into equivalent versions that can run in older environments.

- What is JSX?

JSX stands for "JavaScript XML." It's an extension syntax for JavaScript that allows developers to write HTML-like code directly within their JavaScript files. JSX is primarily associated with React, although it's not exclusive to React and can be used with other libraries or frameworks as well.


- How is a Component created in React?


In React, components are the building blocks of user interfaces. They encapsulate the logic and UI elements of a portion of the application, making the code more modular, reusable, and easier to manage. There are two primary ways to create components in React: **Functional Components** and **Class Components**

- What are some difference between state and props?


State is used for managing internal component data that may change over time, while props are used for passing data from parent to child components in a unidirectional flow. Understanding the differences between state and props is essential for building React applications efficiently and maintaining a clear data flow within the component hierarchy.

- What does "downward data flow" refer to in React?

the principle of downward data flow in React emphasizes the organization and structure of components in a component hierarchy, facilitating modular, reusable, and maintainable code. By following this principle, developers can build robust and scalable React applications with clear data dependencies and a predictable rendering behavior.

- What is a controlled component?

A controlled component refers to a form element whose value is controlled by React's state. 

- What is an uncontrolled component?

An uncontrolled component is a form element whose value is not directly controlled by React's state. Instead, the value of the form element is managed by the DOM itself. Uncontrolled components are typically used when you want to let the DOM handle the form state internally, rather than managing it through React's state management mechanisms.

- What is the purpose of the `key` prop when rendering a list of components?

The key prop is a special attribute in React used when rendering lists of components or elements. Its primary purpose is to help React identify which items have changed, been added, or been removed in a list, enabling efficient updates to the UI.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as a key prop when rendering a list of components is considered a poor choice in many cases because it can lead to various issues, particularly when the list is dynamic and items are added, removed, or reordered.

- Describe useEffect.  What use cases is it used for in React components?

UseEffect is a hook provided by React that allows you to perform side effects in functional components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM, which need to be executed after the component has rendered.


- What does useRef do?  Does a change to a ref value cause a rerender of a component?


useRef is a hook provided by React that returns a mutable ref object whose current property can hold a mutable value. The primary purpose of useRef is to maintain a reference to a DOM element or a value that persists across component renders without causing the component to re-render when the value changes.

- When would you use a ref? When wouldn't you use one?

Use refs when you need to interact with the DOM imperatively, store mutable values without triggering re-renders, or establish communication between parent and child components. However, avoid using refs for managing component state, passing data between sibling components, or unnecessarily manipulating the DOM imperatively.

- What is a custom hook in React? When would you want to write one?

Custom hooks in React provide a powerful mechanism for encapsulating and reusing logic across components, promoting code reusability, maintainability, and separation of concerns. They are particularly useful for extracting common patterns and behaviors into reusable functions that can be shared across your application.
