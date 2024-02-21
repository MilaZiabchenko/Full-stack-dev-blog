type TextTag = 'p' | 'h3' | 'h4';
type Text = Partial<Record<TextTag, string>>;

type ImageAttribute = 'src' | 'alt' | 'width';
type ImageAttributes = Record<ImageAttribute, string>;
type Image = Partial<Record<'img', ImageAttributes>>;

type Metadata = Record<'name' | 'title' | 'updated', string>;
type Content = Record<'content', (Text & Image)[]>;

type ArticleData = Metadata & Content;

const articlesData: readonly ArticleData[] = [
  {
    name: 'animated-accordion-in-react-typescript-project',
    title:
      'Creating Delightful Accordion with React, TypeScript, Styled Components, and React Spring animations',
    updated: 'in December 2023',
    content: [
      {
        p: `Imagine that we are creating a travel agency app and have to render a list of beautiful countries the agency is organizing trips to. Each item in the list should display a name of the country and an expand icon.`
      },
      {
        p: `When the user of our app clicks on the list item, the expand icon should rotate 180 degrees, and under the country title should appear a paragraph with the description of the corresponding country, like this:`
      },
      {
        img: {
          src: '/images/react-accordion/countries_accordion_demo.webp',
          alt: 'Code',
          width: '150'
        }
      },
      {
        p: `In other words, we want to render an accordion menu that consists of multiple elements with collapsible content.
        `
      },
      {
        p: `There are many ways to implement an accordion. I chose to do it with React and TypeScript. I'm also using two component libraries — Styled Components for styles and React Spring for animations.
        `
      },
      { p: `Let's first talk about the tech stack used in this app.` },
      { h3: `Why choose React?` },
      {
        p: `I've been using React.js for a while now, and I really enjoy building stuff with it. I love its functional nature, flexibility, easy to compose and scale component-based modular architecture, JSX syntax, high performance out of the box, variety of optimization techniques, and its rich ecosystem of useful tools and libraries, like Styled Components and React Spring, I used building this app.`
      },
      {
        p: `According to various surveys, React is one of the most popular and in-demand front-end technologies for several years in a row now. It is constantly evolving and has an impressive and friendly community of great devs! ✨`
      },
      { h3: `Why use TypeScript with React?` },
      {
        p: `To be honest, prior to 2023, I was reluctant to add this extra layer of type checking to my projects because I didn't want my beautiful and concise code written in JavaScript to turn into some kind of verbose Java, and I didn't think, it could give me any benefits at all. It looked like all the hype about TypeScript is coming primarily from the OOP world, while JavaScript and modern React are more about functional programming.`
      },
      {
        p: `At the beginning of 2023, I watched on YouTube an engaging interview with Guido van Rossum, the creator of Python, and among other questions he was actually asked if he would recommend using JavaScript or TypeScript. The answer was TypeScript. He said that it's an enormously helpful extra tool that helps you keep your head straight about what your code is actually doing. It helps you with editing your code and ensuring it is not too incorrect.`
      },
      { p: `I thought, hmmm...` },
      {
        p: `So, I decided to give it a try and started experimenting with TypeScript. And the more I used it, the more I saw the point. Long story short, today TypeScript is my personal preference, and I would recommend to any JavaScript developer to give it a try, if they haven't done so yet 😉`
      },
      { h3: `Why style React Components with Styled Components?` },
      {
        p: `I am ok with other ways of managing styles in React apps, but I do like the benefits of doing it with the help of styled-components library 😊`
      },
      {
        p: `Styled Components is a runtime styling solution, that generates unique class names and injects styles into the DOM dynamically. The class names are generated and our styles are added to the DOM only when the component is rendered, so we don't have to worry about tons of unused CSS or class names colliding, which is a common source of frustration, when using global CSS stylesheets, and that's awesome!`
      },
      {
        p: `This CSS-in-JS approach (CSS is defined in JavaScript files) enables you to colocate your styled component to the actual React component in the same file, if the size of the file isn't large, or in another file in the same folder otherwise.`
      },
      {
        p: `To define your styled component, you need to import the styled internal function from this library. The styled function is also an object, — yes, it's possible in the world of JavaScript 😀 — and it lets you call on it a helper method with the same name as HTML element you want to style, pass to this method CSS rules inside tagged template literals, and assign the result of this composition to a variable with a meaningful name.`
      },
      {
        p: `When writing CSS rules, you have also an option to add styles dynamically based on React props passing an interpolation function to your styled component's template literal.`
      },
      {
        p: `For example, look at this simple Footer React component from my project:`
      },
      {
        img: {
          src: '/images/react-accordion/footer.webp',
          alt: 'Code',
          width: '85'
        }
      },
      {
        p: `Here we created a styled component named Copyright, declared that we want to render it as the <p> HTML element, and attached to it a couple of CSS properties: dynamic color and static font-size. If we decide to change these styles later, we can modify them then and there, in the same file.`
      },
      {
        p: `The Copyright styled component can be used as any other React component with an extra benefit of having styles, attached to it! Here we use it in the same file, rendering it in the Footer React component and assigning its color property a default value that we can easily change later. Now we can export and use the Footer component, already containing HTML, CSS and JavaScript, anywhere in the app, which is great, isn't it? 😎`
      },
      { h3: `Why use React Spring animations?` },
      {
        p: `The majority of users would probably agree that the most engaging animations are smooth, fluid and natural, and the animations from React Spring library, based on spring physics, give you exactly that feel ✨
        `
      },
      {
        p: `Instead of using traditional for CSS time-based animations, react-spring is based on physical properties like velocity, mass, friction and tension. If your animations rely on physics rather than time, all movements on the screen have that natural and smooth feel that we love.
        `
      },
      {
        p: `Another benefit of using React Spring animated components with styled components is that we can compose them, and I'll show you, how we can implement it.`
      },
      {
        p: `So, let's start creating our mini-app!`
      },
      {
        h3: `Travel Agency app`
      },
      {
        p: `Our main component is TravelAgency:`
      },
      { h4: `Travel Agency Component` },
      {
        img: {
          src: '/images/react-accordion/travel_agency.webp',
          alt: 'Code',
          width: '75'
        }
      },
      {
        p: `The TravelAgency component renders the main page content surrounded by the header and the footer. The content consists of the information about countries available for trips in our travel agency.`
      },
      { h4: `Travel Agency Content Component` },
      {
        img: {
          src: '/images/react-accordion/travel_agency_content.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { p: `This is where Styled Components come into play in our app!` },
      { h4: `Creating Styled Components` },
      {
        p: `Let's reiterate: in order to create our own styled components we import the styled object from the styled-components library. This object comes with a bunch of helper methods that have the same names as the HTML elements we want to style: h1, h2, section, footer, etc. Then, we pass CSS rules, enclosed in backticks, to a helper method on the styled object to attach styles to the styled component we created.`
      },
      {
        p: `These helper methods on styled object are actually component factories, so we can assign a whole expression to a variable. The value stored in this variable is a reference to a newly created React component.
        `
      },
      {
        p: `This way, we created three components: DestinationsInfo with styled.section\`...\`, Heading with styled.h3\`...\`, and EmptyListMessage with styled.h4\`...\` with the corresponding CSS declarations in backticks.
        `
      },
      {
        p: `When we render these components nested inside TravelAgencyContent component, they will produce <section>, <h3> and <h4> DOM nodes, and the styles we've written for them will be injected into the page.
        `
      },
      {
        p: `Note that we defined our styled components outside of the React component that renders them because we don't want them to be recreated on every (re-)render and make our app slower.
        `
      },
      { h4: `Rendering content conditionally` },
      {
        p: `The data for our list of countries is stored in a separate file, respecting the separation of concerns principle. We import it in the TravelAgencyContent component and map it to an array of immutable country objects, each of which has country name and description properties. We pass this list of countries to the destinations prop of the CountriesAccordion component, responsible for rendering the accordion menu.`
      },
      {
        p: `Using the power of ternary operator and conditional rendering, we check the length of the list of countries, and the TravelAgencyContent component renders the CountriesAccordion component, if the length is greater than 0, or the EmptyListMessage styled component in case our list of countries has no items for some reason.`
      },
      {
        p: `Now, let's move to the CountriesAccordion component rendered by the TravelAgencyContent component:`
      },
      { h4: `Countries Accordion Component` },
      {
        img: {
          src: '/images/react-accordion/countries_accordion_component.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `Here again we start with creating a styled component by assigning the result of styled.ul\`...\` expression to the Accordion constant. When the Accordion component is rendered in the browser, it will produce the <ul> DOM node. But notice that this time, inside tagged template literals, we are defining CSS rules not just for the component itself, but also for its children, and we do so using another cool feature, known as nesting.`
      },
      { h4: `Nesting styles with Styled Components` },
      {
        p: `If you've worked with preprocessors like Sass, you are familiar with the concept of nesting (as of 2023, this feature is finally supported natively in CSS in all major browsers!). Sass lets you nest CSS selectors in the same way as HTML. Similarly, if you put nested selectors inside your styled component's tagged template literals, they will refer to children of the component. This way, the Accordion styled component contains CSS rules for the unordered list itself and nests the styles for its child, the <li> element tag.
        `
      },
      {
        p: `Yes, we can create a separate styled component for our list item or any other element, but nesting child selectors inside the root element makes our code more structured, cleaner and easier to read.
        `
      },
      {
        p: `And now TypeScript comes in to help us with structuring the code further.`
      },
      { h4: `Declaring types for Countries Accordion Component props` },
      {
        p: `As I've mentioned above, TypeScript is more than just about static typing that helps us make our code less prone to bugs. Its arguably most useful feature is enabling us to define a clear code structure with explicit type annotations, making it easier for developers to read, modify, scale and maintain the codebase, especially, when it grows in size and complexity.`
      },
      {
        p: `When using TypeScript in React apps, however, you should not overuse typing because in most cases TypeScript knows to infer the most specific type possible. That said, you have to always declare a type for your component props.`
      },
      {
        p: `The CountriesAccordion component receives the destinations prop value from its parent component (TravelAgencyContent). Let's see, how we can define its type.`
      },
      {
        h3: `Methods of typing React props with TypeScript
      `
      },
      {
        p: `Props can be declared inline using an object literal. You'll often see it done with destructuring syntax. I used this method declaring the destinations prop type:`
      },
      {
        img: {
          src: '/images/react-accordion/accordion_inline_props_type.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `If your props type signature is as simple as in the code snippet above, it is fine to type your props inline.`
      },
      {
        p: `When your props type is more complex, a better option would be extracting it into a type alias or an interface, like this:`
      },
      {
        img: {
          src: '/images/react-accordion/accordion_extracted_props_type.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `The latter method is more verbose and looks different, but it's doing exactly the same. Here for defining the CountriesAccordion component type props we create a type alias named CountriesAccordionProps following the props naming convention:`
      },
      {
        img: {
          src: '/images/react-accordion/countries_accordion_props.webp',
          alt: 'Code',
          width: '45'
        }
      },
      {
        p: `We declare that the destinations value must be an array of countries, each of which is an object with two properties: countryName and countryDescription, both of type string.`
      },
      {
        p: `I defined the Country type separately, using Record<Keys, Type> utility type. You'll often see it in React apps used to declare an object type with specified keys and values:`
      },
      {
        img: {
          src: '/images/react-accordion/country_record_utility.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `If you are not yet familiar or comfortable with TypeScript utility types, you can use the following type alias instead — its signature is self-explanatory:`
      },
      {
        img: {
          src: '/images/react-accordion/country_type_alias.webp',
          alt: 'Code',
          width: '45'
        }
      },
      {
        p: `We could also nest the country object type inside CountriesAccordionProps type, but abstracting its definition into a separate type alias makes our type definitions easier to read and enables us to export and use Country type in other files that might need it.`
      },
      {
        p: `Another useful option to consider is the possibility of extracting definitions for your types and/or styled components into a separate file. For the relatively small CountriesAccordion component, I preferred the colocation approach, but for the bigger one, I would use a more modular code structure with namespaces.`
      },
      {
        p: `Even if TypeScript is (still) not your cup of tea, you may notice that there is not that much of typing when using TypeScript in a React app, just a small amount of it that helps you see right away what the actual chunk of code is about.`
      },
      {
        p: `And now let's have a closer look at our Accordion styled component rendered by the CountriesAccordion component:`
      },
      { h4: `Decomposing Accordion Component` },
      {
        img: {
          src: '/images/react-accordion/accordion.webp',
          alt: 'Code',
          width: '85'
        }
      },
      {
        p: `Accordion component wraps accordion menu items created from our list of destinations. With the help of JavaScript Array map method, we transform our array of countries into an array of AccordionItem components nested inside the Accordion component.`
      },
      {
        p: `We pluck countryName and countryDescription properties from the CountriesAccordion component's destinations prop using destructuring, and pass them to the AccordionItem component via props. We also give each item in the list a key prop set to a unique value of the country name, so that React knows how to display our countries in a correct order.`
      },
      {
        p: `I chose to abstract the accordion item into a separate component because there's a lot of boilerplate code for styling it 😅 Accordion item has also its own state, and passing state down whenever possible is a good practice because it reduces the amount of re-renders of the parent component and makes the code structure cleaner.`
      },
      {
        p: `Hooray! We've reached the most delicious 😋 part — accordion animations ✨✨✨`
      },
      {
        h4: `Accordion Item Component`
      },

      {
        img: {
          src: '/images/react-accordion/accordion_item.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        h3: `Composing animated Styled Components`
      },
      {
        p: `We've talked earlier about how to create a styled component. What about creating an animated styled component? Is that possible? Yes, absolutely! We can create it using one of the niftiest techniques from the world of functional programming in general and React in particular — function composition.`
      },
      {
        h4: `styled.div vs styled(animated.div)`
      },
      {
        p: `For example, to create a styled component that will produce a <div> HTML element we used the following signature: styled.div\`...\`.`
      },
      {
        p: `To create a styled component that will render an animated <div> we wrap our div in animated higher-order component from the react-spring web target and pass it to the styled factory function as an argument, like this: styled(animated.div)\`...\`.`
      },
      {
        p: `styled.div\`...\` and styled(animated.div)\`...\` are both styled components that will be rendered as a <div> element in the browser. Both of them will have encapsulated styles declared inside tagged template literals. The difference between them is that to the div wrapped in animated component we can also attach our cool react-spring animations — you'll see how we can do it in a moment.`
      },
      {
        h4: `Creating Accordion Item Component with Styled Components and React Spring animations`
      },
      {
        p: `As you've seen in the code snippet above, our AccordionItem component renders three regular styled components: AccordionItemHeader, AccordionItemHeaderTitle and AccordionItemContent, and it also renders two animated styled components: AccordionItemWrapper and AccordionItemHeaderIcon.`
      },
      {
        p: `Now the AccordionItem component composes all its nested (styled and animated) components. It also has the isExpanded state with an initial value of false that will be toggled each time the user of our app clicks the <div> element produced by AccordionItemHeader styled component to which we added the onClick event prop and set its value to the inline handler function.`
      },
      {
        p: `When our user clicks one of the accordion items (country names), and its isExpanded state value changes, the element rendered by the corresponding AccordionItemWrapper component should expand and show the country description or collapse and hide it, and the icon rendered by the nested AccordionItemHeaderIcon should rotate. As we want to deliver the best UX possible, we'll sprinkle this functionality with nice react-spring animations ✨`
      },
      {
        h4: `Configuring spring animations with useSpring Hook`
      },
      {
        p: `So, let's create two animations — one for expanding and collapsing the accordion item and the other for rotating the icon. useSpring flagship Hook from React Spring library that enables us to configure animation styles will help us with their implementation.
      `
      },
      {
        p: `According to React Spring docs, "useSpring doesn't actually animate anything though. It just returns SpringValues that we pass to our animated component... These springs are passed to the animated component".`
      },
      {
        p: `To get these spring values we call useSpring just like any React Hook and pass to it the configuration object as an argument. We store the returned values in the corresponding expandAnimationStyles and iconAnimationStyles variables:
      `
      },
      {
        img: {
          src: '/images/react-accordion/spring_styles.webp',
          alt: 'Code',
          width: '95'
        }
      },
      {
        p: `With the keywords 'from' and 'to' we define the start and end values of our animation, and we use 'config' keyword for additional configuration values.
      `
      },
      {
        h4: `Configuring expand animation`
      },
      {
        p: `So, for setting up the expand animation, we're starting with an opacity value of 0 and a maximum height of 3.75rem and ending with an opacity value of 1 and increasing the max height of the accordion item to 25rem when the isExpanded state value is equal to true, and resetting it to 3.75rem when it is equal to false. The opacity animation creates a nice fade-in effect when the page loads. In the config object we set the duration of expand animation to 300ms.
      `
      },
      {
        h4: `Configuring icon animation`
      },
      {
        p: `For configuring the icon animation, we're starting with a transform rotate value set to 0deg and changing its value to 180deg to rotate the icon when the isExpanded state value is equal to true. We reset rotation value back to 0deg when the state is equal to false. The duration of icon animation is set to 100ms.
      `
      },
      {
        p: `And lastly, we have to set the spring values created with useSpring Hook to the style property of the corresponding components: expandAnimationStyles to AccordionItemWrapper and iconAnimationStyles to AccordionItemHeaderIcon.`
      },
      { p: `Our nice little animated accordion is ready ✨✨✨` },
      {
        p: `We could add various cool features to our travel agency app like forever, but for now let's stop here 😅`
      },
      {
        p: `I hope you've enjoyed reading this article and have learned something new and interesting 😊🙃`
      }
    ]
  },
  {
    name: 'react-custom-hooks',
    title: 'Making Friends with React Custom Hooks',
    updated: 'in December 2023',
    content: [
      { h3: `Hooks overview` },
      {
        p: `Anyone who uses React.js for a little while would probably agree that Hooks are one the best and most loved patterns that come with this library. Hooks are actually special functions that have access to state and other React features. They can be called inside your function components in order to help you perform various tasks. By convention, Hook names start with 'use' prefix followed by a a capital letter. For example, useState, useRef, useMemo...`
      },
      {
        p: `You can use several built into React Hooks that allow you to deal with stuff like state, context, performance, effects, and you can also use React Hooks to build your own custom Hooks to deal with tasks specific to your application. And whether you use built-in React Hooks or your custom Hooks, remember to always import Hooks at the top of the module that consumes them, call them only at the top level in the body of a function component or a custom Hook, and never call Hooks inside loops, conditions, or nested functions.
      `
      },
      { h3: `Why use custom Hooks?` },
      {
        p: `If you are new to React, you may think, why should I bother to do this extra work, creating my own Hooks? 😅 `
      },
      {
        p: `Firstly, as your app grows, you may encounter a situation when you need to use the same piece of logic in multiple components. Wouldn't it be a good idea to write this logic once, keep it in one place and then use it in any component that needs it? Moreover, if you decide to change something in your logic, you'll have to do it in your Hook once and not all over the place, which is also great, isn't it? 😎`
      },
      {
        p: `Secondly, with this separation of concerns, your app's structure becomes much cleaner and easier to scale and maintain, while your components become more concise and readable. Your components are primarily focused on describing the UI you want to render, while the code with implementation details is stored in separate modules, containing the logic of Hooks consumed by your components, just as we often do it using regular utility functions.`
      },
      {
        h3: `Example from my project`
      },
      {
        img: {
          src: '/images/custom-hooks/shows.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { h3: `NeTWondeRLanD? Is it kinda Netflix?` },
      {
        p: `Well, sort of 😊 NeTWondeRLanD is a streaming app that I built using the power of built into React and my own custom Hooks. The Shows component is responsible for rendering a bunch of shows fetched from the external API and a search input for the fetched shows that allows the user to filter shows and see the search results. `
      },
      { p: `Here's a demo of the Shows page:` },
      {
        img: {
          src: '/images/custom-hooks/shows_search.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `The Shows component calls all the Hooks it consumes at the top of the module: two React Hooks — useDeferredValue and useMemo, and three Hooks that I created using React Hooks — useTitle, useAxios and useInput.`
      },
      {
        p: `Hooks are functions that we call at the top level of the component and pass to them arguments if any. Hooks often return values, and if they do, we assign the returned values to the variables to be able to use those values inside our component, but let me stress again: all the logic for updating document title, fetching shows and handling search input lives outside the Shows component that consumes it. It is defined in three separate files — useTitle.js, useAxios.js and useInput.js — located in the the app's hooks folder.`
      },
      {
        p: `Let's look at my custom Hooks implementation closer to get a better understanding of why it is a good idea to keep this logic separately.`
      },
      {
        p: `The first custom Hook that we call in the Shows component is useTitle:`
      },
      { h4: `useTitle` },
      {
        img: {
          src: '/images/custom-hooks/use_title.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `The useTitle Hook is pretty simple. It is responsible for dynamically changing the title value of the document when the app user navigates to a different page. In the world of React, changing the document's title is a side effect, so you need to implement it inside React's useEffect Hook.`
      },
      {
        p: `Our useTitle function accepts a single argument — the title of the document we want to show in the tab when the page is rendered. We also provide a default value for the title as a fallback and reset the document's title property to it inside the clean-up function returned by useEffect.`
      },
      {
        p: `In the Shows component we call useTitle with the 'Shows' argument, so when the Shows page mounts, we should see 'Shows — NeTWondeRLanD' in the tab of the Shows page.`
      },
      {
        p: `If you think that the logic for changing the title does not require a lot of space, and we could place it inside the Shows component, imagine the clutter when we need to write several other chunks of code, like this. Moreover, our app may have dozens of pages that need the document's title update, would you write the same logic for each page again and again? You get the point.`
      },
      {
        p: `Now, let's move to our second custom Hook consumed by the Shows component — useAxios that contains the logic for fetching data:`
      },
      { h4: `useAxios` },
      {
        img: {
          src: '/images/custom-hooks/use_axios.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `useAxios custom Hook is even bigger than the Shows component itself because it is responsible for several related tasks.`
      },
      {
        p: `Its main task is fetching data from the server with the help of Axios HTTP client. Notice that instead of hardcoding URL, we pass it to the useAxios function as a parameter, so we can call useAxios in as many components as necessary, fetching different data from different URLs.`
      },
      {
        p: `For example, to fetch a single show, we call useAxios passing in the same URL that we passed for fetching shows with a route parameter, show id, — we get it from the object returned to us by calling useParams React Router Hook:`
      },
      {
        img: {
          src: '/images/custom-hooks/show_fetch.webp',
          alt: 'Code',
          width: '75'
        }
      },
      {
        p: `Modern React is functional by nature, and reusability is one of the strengths of the functional programming, but let's continue talking about what's going on inside useAxios.`
      },
      {
        p: `useAxios custom Hook consumes three built-in React Hooks: useReducer for handling loading, success and error state, useEffect for fetching data, and useRef for caching fetched data.`
      },
      {
        p: `We pass to useReducer Hook two arguments: reducer function and initial state. The reducer pure function takes in state and action as parameters, tracks the type of received action and returns a new state object. I gave this function a fetchReducer name as it returns a state based on three action type values related to data fetching: fetch_init, fetch_success and fetch_failure. The reducer returns a new state after the action with the matching type value is dispatched inside useEffect Hook. `
      },
      {
        p: `As soon as we successfully get data from the server inside useEffect, we cache it with the help of useRef React Hook. We assigned the ref object returned by useRef to the variable cachedDataRef, and now we can set its current property (initially set to an empty object) to the object with the passed URL as key and the received data from the response as its value, like this:`
      },
      {
        img: {
          src: '/images/custom-hooks/caching_data.webp',
          alt: 'Code',
          width: '65'
        }
      },
      {
        p: `You may be wondering why do we need to cache it...`
      },
      {
        p: `Often times we receive huge chunks of data in the API response. For example, in the case of the Shows page we get an array of 240 big objects containing a lot of information about shows. When we navigate back and forth inside our app, we don't want to make the same API request again and again because the response may take some time, and it's not the UX we want to deliver. So, we cache the data received from the API, and each time the user navigates back to the Shows page, we can immediately show our user the cached data, and that's awesome! 😊`
      },
      {
        p: `Apart from handling state when fetching data, caching and providing cached data, our useAxios Hook handles eventual race conditions in case our app user makes multiple requests in a row. For this purpose, we create an instance of Abort Controller inside useEffect and pass its signal property to the axios get request via options argument, and finally, we call its abort method in a clean-up function returned by useEffect:`
      },
      {
        img: {
          src: '/images/custom-hooks/abort_controller.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { h3: `Custom Hooks return type` },
      {
        p: `We know that React components return markup to be rendered in the browser. Custom Hooks are different: they may or may not return some value(s) that we can get and use in the components where we call our Hooks. It can be a single value, an array of values, an object — whatever we need it to be.`
      },
      {
        p: `our useAxios custom Hook returns a state object with isLoading, error and data properties that we can get in the component with destructuring. We can also rename a generic data property name with a more specific to the component alias name like shows, show, etc., making our code more readable:`
      },
      {
        img: {
          src: '/images/custom-hooks/use_axios_values.webp',
          alt: 'Code',
          width: '65'
        }
      },
      {
        p: `Note that in the Shows component that consumes our useAxios custom Hook we just import and call it, and it takes up only a couple of lines of code. The logic inside useAxios itself takes up 82 lines! If we didn't abstract it to a custom Hook, we would have to move all that logic to the actual component, adding to it those 82 lines of code — and this is just one of the Hooks consumed by the Shows component! This is what I mean by saying that custom Hooks make our components more concise and easier to read.`
      },
      { h3: `Hooks alternatives for fetching data` },
      {
        p: `If you are doing your first steps with React, you may find it a bit hard to get your head around about each line of code inside my useAxios Hook.`
      },
      {
        p: `I have some good news for you: the latest versions of React Router and frameworks like Next.js have a higher level of abstraction, allowing you to avoid a lot of boilerplate code and even 'drop' useEffect when fetching data.`
      },
      {
        p: `Also, the React team have introduced a Hook named literally 'use' that is supposed to do it natively. They've also announced in the docs that one day you won't have to cache data manually because React will do that automatically.`
      },
      {
        p: `That being said, I've found it useful to implement all this logic manually because it gives me a better understanding of what is going on under the hood, and, hopefully, helps me grow professionally.`
      },
      {
        p: `And now, let me introduce useInput, the third custom Hook used in the Shows component:`
      },
      { h4: `useInput` },
      {
        img: {
          src: '/images/custom-hooks/use_input.webp',
          alt: 'Code',
          width: '75'
        }
      },
      {
        p: `useInput custom Hook is responsible for setting the input field value and updating it when the user types into the field or clicks the clear button.`
      },
      {
        p: `useInput calls two React Hooks: useState for controlling input state and useCallback for caching definitions of handleChange and clearInput functions that handle input state changes. We wrap the useInput nested functions in useCallback because we will pass them to memoized components as props and need these functions to have a stable reference to not trigger unnecessary re-renders of the component.`
      },
      {
        p: `useInput custom Hook returns an object with three properties: input state value, handleChange function for updating the state value when a user types into the input field, and clearInput function for clearing the input field and resetting the state to its initial value, passed as an argument to useInput or taken from its default parameters.`
      },
      {
        p: `And then, we can call useInput in the Shows component and grab its returned values with destructuring:`
      },
      {
        img: {
          src: '/images/custom-hooks/search_query.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `It makes sense to give a generic value variable a name alias searchQuery because in the Shows component we pass it to the nested Search component.`
      },
      {
        p: `Now, if the user types a query into the search input too fast, we don't want to update the UI with every keystroke because it can lead to performance issues, so we pass the user's search query returned by useInput as a parameter to the React useDeferredValue Hook to get the deferred value of it:`
      },
      {
        img: {
          src: '/images/custom-hooks/deferred_query.webp',
          alt: 'Code',
          width: '75'
        }
      },
      {
        p: `This way React knows that the value update is not urgent and shows the old value until the new value is ready and the old search results for a bit, and the user with a fast device won't even notice any delay.`
      },
      {
        p: `The NeTWondeRLanD app is built in a way that when the user searches for a show, we filter the shows that are already fetched from the server to display search results. In some other app the search may happen on the server, which implies that with every keystroke the state updates and a new API request is made. That would be too expensive.`
      },
      {
        p: `The common solution to this problem is debouncing or throttling, which you'll often see implemented with functions from the 3rd party libraries like Lodash or custom Hooks. I prefer the latter because this way I have more control over my code and also, I am not increasing the bundle size of the app with unnecessary dependencies.`
      },
      {
        p: `Here is my version of useDebounce custom Hook:`
      },
      { h4: `useDebounce` },
      {
        img: {
          src: '/images/custom-hooks/use_debounce.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `Unlike React's useDeferredValue Hook, useDebounce custom Hook updates the passed value with a fixed delay after the user stops typing.`
      },
      {
        p: `First, useDebounce custom Hook calls useState React Hook for declaring a state variable and setting it initially to the value that we pass to useDebounce. Then, it calls useEffect for handling state update inside a callback of the setTimeout global function after a delay passed as a second argument to useDebounce and setTimeout. We store the timeout id returned by a call to setTimeout in a variable, and then pass it to clearTimeout in a clean-up function returned by useEffect. Our useDebounce function returns a debounced value.`
      },
      {
        p: `When we call useDebounce in the component, we pass in a (search query) value and a delay as arguments and assign the returned debounced value to a variable, like this:`
      },
      {
        img: {
          src: '/images/custom-hooks/debounced_query.webp',
          alt: 'Code',
          width: '85'
        }
      },
      {
        p: `useDebounce custom Hook helps us update search results more efficiently, showing them with a delay set to a passed number in milliseconds after the user stops typing, which helps us decrease the amount of network requests.`
      },
      {
        h3: `Is it always a good idea to extract repetitive logic into a custom Hook?`
      },
      {
        p: `The short answer is it depends.`
      },
      {
        p: `In general, when you have a piece of state that is updated inside useEffect, it is often a good place to think about extracting this logic into a custom Hook.`
      },
      {
        p: `The thing is that Hooks help us with sharing stateful logic, but not state itself. There are cases, when the state is tightly coupled with other reactive values of the component  and abstracting stateful logic into a custom Hook may be a challenging task.`
      },
      {
        p: `For instance, have a look at this long-long ShowDetails component from the NeTWondeRLanD app:`
      },
      {
        img: {
          src: '/images/custom-hooks/show_details.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `The ShowDetails component has calls to three custom Hooks: useAxios, useTitle and useLocalStorage. So, we moved their implementation from this component, which is good, but still the ShowDetails component is pretty long. You might be wondering — couldn't we abstract some more repetitive logic from it? 🤔`
      },
      { p: `Let's break it down!` },
      {
        p: `The ShowDetails component is responsible for displaying information about the fetched show, but this is just a small part of its logic, and we extracted it into the ShowDetailsCard nested component. What does make our ShowDetails component large is its interactive part. We enable our user to like and unlike the show, add it to favorites, remove the show from favorites. We dynamically change the icon and text of the button, reacting to the user's interaction with the page. We also store the user's liked and favorite shows' lists in the localStorage, and we dynamically update those lists when the user clicks 'like', 'unlike', 'add to favorites' or 'remove from favorites'. And last but not least, we need to synchronize the state updates of some reactive values.`
      },
      {
        p: `Our ShowDetails component has two useEffect Hook calls that have similar logic inside, and then, you see two verbose handleLikes and handleFavorites functions that also have some similarities. To be honest, I made an attempt to abstract that functionality into custom Hooks, but without success. These effects and handlers synchronize four different and independent states for liked shows, like (unlike) button, favorite shows and add to favorites (remove from favorites) button, while their state updates are tightly coupled with other reactive values of the ShowDetails component, and abstracting this logic into custom Hooks did not seem feasible. So, I left this part of functionality in the component and made my best each line of code to be clear and readable 😅`
      },
      {
        p: `At the same time, extracting into a custom Hook the logic for reading values from localStorage and writing to it for both liked shows and favorite ones worked just fine for me ✨`
      },
      {
        p: `Here's my useLocalStorage custom Hook implementation:`
      },
      { h4: `useLocalStorage` },
      {
        img: {
          src: '/images/custom-hooks/use_local_storage.webp',
          alt: 'Code',
          width: '95'
        }
      },
      {
        p: `When we call useLocalStorage Hook in the component, we pass it the localStorage key as argument. We use this key to read the value from localStorage when the component mounts. In case the value is undefined or null, we set the key to a fallback value. We also use this key for updating the value in the localStorage whenever the state changes.`
      },
      { h3: `Custom Hooks vs regular utility functions` },
      {
        p: `The last thing I want to emphasize is the difference between custom Hooks and regular utility functions. They both are functions that abstract a piece of logic, but Hooks use other Hooks (React Hooks and/or other custom Hooks), whereas utils and helpers are just regular JavaScript functions, implemented without any Hooks and named without 'use' prefix.`
      },
      { h3: `Final thoughts` },
      {
        p: `Custom Hooks pattern is hard to grasp at the beginning, but as you grow as a React developer and have more hands-on experience with creating and using custom Hooks in your projects, they become your go-to solution to a variety of tasks, specific to your apps 😀`
      }
    ]
  },
  {
    name: 'node-express-folder-structure',
    title: 'My Way to Structure Node/Express/TypeScript App',
    updated: 'in April 2024',
    content: [
      { h3: `Code structure overview` },

      {
        p: `When it comes to choosing a structure for the files and directories in your project, it is not always a trivial task. I love the freedom that such a minimalist and unopinionated framework as Express.js gives me, but it's easy to get confused, if you are a newbie in the world of back-end development.`
      },
      {
        p: `When you are doing your first steps in learning JavaScript on the server, it is totally ok to place all your code in a single file. But as you are confident enough to build bigger projects, add multiple features, implement routing, middleware, connection to a database, schema validation, authentication, utilities, error handling, testing, and all the business logic, it is recommended to split up your codebase into multiple files and directories. This allows you and other developers to read, debug, test and scale the code for your app faster and easier, and it significantly improves your DX 😊`
      },
      {
        p: `So, the question is: how should you organize code in your application? It depends... It depends on your personal preferences, and it is also determined by the size and complexity of your app.`
      },
      { h4: `Feature-based structure` },
      {
        p: `If your project is large and contains many different features, it is considered a good practice to use a feature-based approach, when you place all the code logic related to a particular feature in a separate folder (articles, search, users, etc.).`
      },
      { h4: `Logic-based structure` },
      {
        p: `When your project is small or middle-sized, you can use a modular approach subdividing your codebase by logic (routes, controllers, middleware, etc.). I applied the latter developing this blog and will use it as an example.`
      },
      { h3: `My dev blog file/directory structure` },
      {
        img: {
          src: '/images/folder-structure/structure.webp',
          alt: 'Code',
          width: '65'
        }
      },
      {
        p: `In the root of my full-stack app code structure, you can see several configuration files, .env file, which contains environment variables with sensitive data like API keys that is not supposed to be shared, .gitignore file with a list of dirs and files that will not be present in the public repository, frontend directory with the client-side code, written in React and Typescript, responsible for the View in the MVC (Model-View-Controller) software design pattern, and finally, backend directory that contains all the server-side logic, and its structure is actually the topic of this article.`
      },
      { h3: `Server-side file/directory structure` },
      {
        p: `Let's dive deeper into the backend directory modules organization. Following the convention, this folder has src/ subdirectory containing all the server-side source code. The entry point of my Express app is the server.ts file on the root of src/, which looks like this:`
      },
      {
        img: {
          src: '/images/folder-structure/server.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `As you might have noticed, there is quite a lot happening in server.ts file: initialization of Firebase Admin and Express apps, parsing credentials set to environment variables, setting dirname variable value to the absolute path of the directory, setting port variable, connecting to the database, and binding routes, authentication and other middlewares to the Express app instance. Now, let's have a closer look at the folders, my server.ts file is importing from.`
      },
      { h4: `Services` },
      {
        p: `The services folder usually includes business logic for the project. This is where I configure schema validation and connection to the database — I'm using MongoDB Atlas in my blog app.`
      },
      {
        img: {
          src: '/images/folder-structure/database.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { h4: `Models` },
      {
        p: `Every Collection in MongoDB (or a Table in MySQL) will have a standalone model file. In TypeScript, classes, interfaces and type aliases (which is my personal preference in most cases) can be used to create models to represent what our documents will look like.
        `
      },
      {
        p: `Models define what properties an object should have, as well as what data type those properties should be. This is like an application-level schema.
        `
      },
      {
        p: `It's time to look at my blog's Article model that lives in the models directory. Comment type consumed by the Article type lives in a separate file because I am using it different parts of my codebase, for instance, comment parser helper (I'm talking about it in more detail in the 'helpers' section of the article).
        `
      },
      {
        img: {
          src: '/images/folder-structure/comment_model.webp',
          alt: 'Code',
          width: '75'
        }
      },
      {
        img: {
          src: '/images/folder-structure/article_model.webp',
          alt: 'Code',
          width: '75'
        }
      },

      {
        p: `I'm consuming the Article model (or type) when configuring connection to the database and setting up route handlers (controllers), but first let's take a look at the routes directory.
        `
      },
      { h4: `Routes` },
      {
        p: `The routes folder will have a single file for each logical set of routes. Implementing the separation of concerns principle respects the modular approach and makes our codebase clean and easy to read, maintain, scale, and collaborate. If we had multiple types of resource, we would set separate routes for each one of them.`
      },
      {
        p: `In my project, I only need API routes, so in my article.routes.ts file I set up route for each HTTP method with endpoint and handlers that include user authorization middleware and article controllers:`
      },
      {
        img: {
          src: '/images/folder-structure/routes.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { h4: `Middleware` },
      {
        p: `Middleware functions help us perform various actions between receiving a request from the client and sending response back from the server. These helpers could range from critical middleware like Body Parser, Global Error Handlers, Authentication Middleware, enabling CORS, attaching Custom Headers or setting a View Engine in Express.js.
      `
      },
      {
        p: `In my blog, I implemented middleware to authenticate users using Firebase Admin SDK and authorize the authenticated user to upvote articles and add comments:`
      },
      {
        img: {
          src: '/images/folder-structure/authentication.webp',
          alt: 'Code',
          width: '95'
        }
      },
      {
        img: {
          src: '/images/folder-structure/authorization.webp',
          alt: 'Code',
          width: '100'
        }
      },
      { h4: `Controllers` },
      {
        p: `Routes consume controllers, and the controllers, in turn, handle requests that come from the client and convert them into HTTP responses with the use of any middleware if necessary. The response would be rendering a webpage, sending a JSON payload, or handling other critical API related actions like POST, PUT, DELETE, etc.
      `
      },
      {
        p: `Controllers are kind of mediators between the Model (database) and the View (client), who makes requests for getting or updating the data stored in the database. Through getter and setter functions, the controller pulls, modifies, and provides the data to the user that made the corresponding request.
      `
      },
      {
        p: `In my dev blog app, I've set controllers for getting the article from the database, upvoting the article, and adding comments to the article:
      `
      },
      {
        img: {
          src: '/images/folder-structure/controller.webp',
          alt: 'Code',
          width: '95'
        }
      },
      {
        p: `In my article.controller.ts file I'm importing commentParser file from helpers directory and errorMessage file from utils directory. It is considered a good practice to place utility functions in separate folders and files, and then import them where necessary. It keeps our code clean and easy to read, reuse and debug, as well as respects separation of concerns principle.`
      },
      { h4: `Helpers` },
      {
        p: `When building APIs, helper functions are often related to specific tasks.
      `
      },
      {
        p: `In the codebase of my blog, the commentParser.helper.ts module contains functionality for parsing and sanitizing user input. I don't know in advance, what the user will type in the input field, composing a new comment. So, I created a helper that modifies the user's input according to the Comment type and transforms it into a valid comment before storing it to the database:
      `
      },
      {
        img: {
          src: '/images/folder-structure/comment_parser.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        p: `Another useful helper is produced in the envValidator.helper.ts module, using 3rd-party library called Envalid. This small npm package is used for accessing and validating environment variables.`
      },
      {
        p: `Envalid's cleanEnv() function accepts environment variables object and validators object that specifies the type of each env variable, as arguments, and returns a sanitized, immutable environment object:`
      },
      {
        img: {
          src: '/images/folder-structure/env_validator.webp',
          alt: 'Code',
          width: '85'
        }
      },
      {
        p: `Now, we can use this env object in place of process.env object in any module that consumes environment variables, passed to cleanEnv(), and TypeScript will infer the type of each env variable, so we don't have to resort to type assertions 😉`
      },
      { h4: `Utils` },
      {
        p: `Utils, on the other hand, are related to more generic functions that can be used in any module of any part of the codebase.`
      },
      {
        p: `For instance, my objectProperty generic or errorMessage utility can be used pretty much anywhere in the code (client or server — it doesn't really matter) where we need to get a property of any object type or stringify any unknown error respectively. This way, our code is more predictable and robust: we get rid of eventual bugs at compile-time, making TypeScript happy 😊`
      },
      {
        img: {
          src: '/images/folder-structure/prop_util.webp',
          alt: 'Code',
          width: '100'
        }
      },
      {
        img: {
          src: '/images/folder-structure/error_util.webp',
          alt: 'Code',
          width: '75'
        }
      },
      { h3: `Final thoughts` },
      {
        p: `I hope you found something useful in this article 😊`
      },
      {
        p: `In addition (and not contradiction) to it, I'd like to share a nifty approach to structuring code that comes from a more opinionated world of Angular coding style guides. I find it great for both frontend and backend codebase, especially when it comes to productivity and scaling applications.`
      },
      { h4: `LIFT principle` },
      {
        p: `LIFT stands for structuring the application such that you can:
      `
      },
      {
        p: `- Locate code quickly (Do make locating code intuitive and fast).
      `
      },
      {
        p: `- Identify the code at a glance (Do name the file such that you instantly know what it contains and represents).
      `
      },
      {
        p: `- Flat structure (Do keep a flat folder structure as long as possible).
      `
      },
      {
        p: `- Try to be DRY (Avoid being so DRY that you sacrifice readability).
      `
      },
      {
        p: `In other words, you should locate folders and files in a way that it is easy to find them, even if you don't know or remember their location. Folders and files names should be descriptive, so that you don't waste too much time on searching. You should avoid redundant nesting because a flat structure is easier to scan. And finally, being DRY is important, but not crucial, if it sacrifices the other elements of LIFT. That's why it's called T-DRY.`
      },
      {
        p: `My personal recommendation would be to try different approaches when structuring code in your projects and figure out empirically, which one works better for you (and your team) 😉`
      }
    ]
  }
];

export type { ArticleData };
export default articlesData;
