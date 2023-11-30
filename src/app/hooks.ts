import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/*
*   Define Typed Hooks...
*
*   Note: it's possible to import `RootState` and `AppDispatch` types into each
*   component, it's better to create a pre-typed version of `useDispatch` and `useSelector`
*   hooks for usage in the application.
*   
*   For `useSelector`, it saves you the need to type (state: RootState) every time
*
*   For `useDispatch`, the default `Dispatch` type does not know about thunks or
*   other middleware. In order to correctly dispatch thunks, you need to use the
*   specific customized `AppDispatch` type from the store that includes the thunk
*   middleware types, and use that with `useDispatch`. Adding a pre-typed `useDispatch`
*   hook keeps you from forgetting to import `AppDispatch` where it's needed.
*
*   Since theses are actual variables, not types. It's important to define them in a 
*   separate file such as `app/hooks.ts`, not the `store` setup file. 
*   This allows you to import them into any component files that need to use the hook,
*   and avoid potential circular import dependency issues.
*/

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// or you can type your hooks manually

// interface RootState {
//     isOn: boolean
//   }
  
//   TS infers type: (state: RootState) => boolean
//   const selectIsOn = (state: RootState) => state.isOn
  
//   TS infers `isOn` is boolean
//   const isOn = useSelector(selectIsOn)

// one liner: const isOn = useSelector((state: RootState) => state.isOn)