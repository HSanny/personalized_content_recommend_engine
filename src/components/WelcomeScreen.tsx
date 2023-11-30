import React from 'react';

/*
Using useDispatch from 'react-redux' directly and creating a custom hook like useAppDispatch are both valid approaches, but they serve slightly different purposes. Let's discuss why you might choose one over the other:

Using useDispatch from 'react-redux'
useDispatch is the hook provided by 'react-redux' for dispatching actions.
It's a straightforward approach and works well in many applications, especially if you don't need to add any custom functionality or typings to the dispatch function.
Using a Custom Hook like useAppDispatch
If you're using TypeScript, you might want to create a custom hook like useAppDispatch to automatically include your store's specific dispatch type. This adds TypeScript's static typing benefits to your dispatch function.
This approach can make your application more type-safe, as it ensures that the * * actions you dispatch are compatible with the types defined in your Redux store.
*/

import { useAppDispatch } from '../app/hooks';
import { setTheme } from '../reducers/themeSlice';

const WelcomeScreen: React.FC = () => {
    const dispatch = useAppDispatch();

    const handdleMoodChange = (theme: string) => {
        dispatch(setTheme(theme));
    };

    return (
        <div>
            <h1> Welcome to the App !</h1>
            <p> Select a Theme ! </p>
            <button onClick={() => handdleMoodChange('blue')}> Blue </button>
            <button onClick={() => handdleMoodChange('orange')}> Orange </button>
        </div>
    );
};

export default WelcomeScreen;