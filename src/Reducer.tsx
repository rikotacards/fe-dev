import { LocalStorageType } from "./localStorageUtil";

export const reducer = (state: LocalStorageType, action: {type: string, payload: {categoryName: string, problemName: string}}) => {
  const {type, payload}  = action
  switch (type){
    case "TOGGLE": 
      return {
        ...state, 
        [payload.categoryName]: {
          ...state[payload.categoryName],
          [payload.problemName]: !state[payload.categoryName][payload.problemName]
        }
      }
    default: 
      return state
  }
}