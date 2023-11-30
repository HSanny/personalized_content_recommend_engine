import { configureStore } from "@reduxjs/toolkit";

/*
*   Why use React Redux
*
*   Redux itself is a standalone library that can be used with any UI layer,
*   such as React, Angular, Vue, Ember, vanilla JS. 
*   
*   If you are using Redux with any kind of UI framework, you will normally use
*   a 'UI binding' library to tie Redux together with your UI framework, rather
*   than directly interacting with the store from your UI code.
*   
*   Redux is used to maintain and update data across the application for multiple
*   components to share, all while remaining independent of the components.
*   source: https://blog.logrocket.com/understanding-redux-tutorial-examples/#introduction-redux
*   
*   Pass data from a parent to a child deep down the tree can be accomplished by React Context
*   When it comes to share state between components on the same level, Redux is inevitable.
*   
*   3 core components in Redux = action + store + reducers
*   
*   store : A container that holds the application state, and the only way state can
*       change is through actions dispatched to the store. Redux allows individual
*       components to connect to the store.
*       It's recommend to keep only 1 store in application, you can access the stored
*       state, update the state, and register / unregister listeners via helper methods.
*
*
*
*
*   action: events, the only way data can be sent from application to store.
*       the data can be from user interaction, API calls, submission, etc...
*       Action must have
*       - a `type` : property to indicate the type of action to be carried out
*       - a `payload` : object that contains the info that should be used to change the state
*       Action are created via an action creator, which is a function that returns an action.
*       Action are executed using `dispatch()` method, which sends action to the store
*  
*   reducer: pure functions that takes the current state of an application, perform     
*       an action, and return a new state. Reducer handles how the state will change
*       in response to an action.
*/

/*
*  creates a redux store, and automatically configure the Redux DevTools
*  extension so that you can inspect the store while developing.
*/

import themeReducer from '../reducers/themeSlice';

// In this case, themeReducer is just the name you've chosen for the default export from themeSlice.ts. It doesn't need to match the name of the exported item in themeSlice.ts. This is because you're not importing a named export, but the default export, and the name themeReducer is just an alias you're giving it in your store.ts file.


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;