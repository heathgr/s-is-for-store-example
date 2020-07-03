# Introduction

This is a simple app for demonstrating how to use S is for Store with React.  This app displays a number, the count, and has two buttons.  The buttons allow a user to increment or decrement the count.

# Running The App

To run the app, do the following:

1. Clone the repository

``` bash
git clone https://github.com/heathgr/s-is-for-store-example.git
```

2. Go to the project folder:

``` bash
cd s-is-for-store-example
```

3. Install the project's dependencies:

``` bash
npm install
```

4. Start the development server:

``` bash
npm start
```
5. In a browser go to http://localhost:8080.  The app should be up and running.

# How is the App Put Together?

There are three files that central to how the app functions:

- src/store/counterStore.ts
- src/updaters/counterUpdaters.ts
- src/components/Counter.tsx

The above files fall into three categories stores, updaters and components.

## counterStore.ts

This app has a single store defined in counterStore.ts.  It contains a single property called "count".  The count property updates when the updaters get called.  Once the state updates, it will be passed to a react component that will rerender and display the new count.

## counterUpdaters.ts

The counterUpdaters.ts file defines two updaters "increment" and "decrement".  These functions describe how the state should update when they get called.  In the case of increment, the count increases by one.  Decrement decreases the count by one.

## Counter.tsx

Counter.tsx defines a react component that subscribes the store via a hook.  The component displays the count and has two buttons that call the increment and decrement updaters when clicked.