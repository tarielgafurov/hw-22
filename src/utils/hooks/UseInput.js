import { useReducer } from "react";

let ENTERED = "ENTERED"
let TOUCHED = 'TOUCHED'

const reducerFn = (state , action) =>  {
    if(action.type === ENTERED){
        return {
            ...state,
            value : action.enteredValue,
        }
    }
    if(action.type === TOUCHED){
        return {
            ...state ,
            isTouched : true,
        }
    }
}

export const useInput = (validateState) => {
    const [state , dispatchFn] = useReducer(reducerFn , {
        value : "",
        isTouched : false
    })

  const valueIsValid = validateState(state.value) // true || false
  const hasError = !valueIsValid && state.isTouched 

  const valueChangeHandler = (e) => {
      dispatchFn({type : ENTERED , enteredValue:e.target.value})
  }

  const inputBlurHandler = (e) => {
      dispatchFn({type : TOUCHED , isTouched : false})
  }

  return {
      value: state.value,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
  }

};
