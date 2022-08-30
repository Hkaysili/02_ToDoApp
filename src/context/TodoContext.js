import React, {createContext, useContext, useReducer} from "react";

// * Yeni bir context oluşturalım...
export const TodoLayerContext = createContext();

// * Bir Provider oluşturalım.
// Provider 3 parametre alır ;
// 1. param => initialState (reducer için gerekli)
// 2. param => reducer
// 3. param => children (Provider arasında yer alacak componentleri ifade eder.)   
export const TodoLayer = ({initialState, reducer, children}) => (
    <TodoLayerContext.Provider  value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
);

// * Oluşturmuş olduğumuz provider'ı tüketmek için bir method tanımlayalım.
// Böylelikle componentler içerisinde süreli import yapmamış oluruz..
export const useTodoLayerValue = () => useContext(TodoLayerContext);