import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";



export const localStorageMiddlerware = ( state: MiddlewareAPI ) => {
    return ( next: Dispatch ) => ( action: Action ) =>  {

        next(action);

        console.log({ state: state.getState() });



    }
}