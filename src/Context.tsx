import React from 'react';
import { getLocalStorage, hasLocalStorageState, LocalStorageType, merge, setLocalStorage } from './localStorageUtil';
import { reducer } from './Reducer';
import {categories} from './categories'
import {createLocalStorageState} from './localStorageUtil'
import { countCompletedProblems } from './utils/countCompletion';
import { LinearProgress } from '@mui/material';
type ActionType = 'TOGGLE'
export type StateContextType = {
  state: LocalStorageType,
  dispatch: React.Dispatch<{type:ActionType, payload: any}>,
  completionRate: number,
  total: number, 
  count: number,
}

export const StateContext = React.createContext({} as StateContextType)

export const Context: React.FC<any> = (props) => {
  const [state, setState] = React.useState<LocalStorageType | null>(null)
  const [appState, dispatch] = React.useReducer(reducer, state, () => { return createLocalStorageState(categories)})
  console.log('appState start', appState)
  const {completionRate, total,count} = countCompletedProblems(getLocalStorage())

  React.useEffect(() => {
    if(hasLocalStorageState()){
      const newState = merge(appState)
      setState(newState)
      localStorage.setItem('fedev', JSON.stringify(newState));

      return
    } else {
      setState(appState)
      setLocalStorage();
    }
  }, [completionRate, appState])
 
  const context: {
    state: LocalStorageType, 
    dispatch: React.Dispatch<any>,
    completionRate: number,
    total: number, 
    count: number,
  } = {
    state: appState, 
    dispatch,
    completionRate,
    total,
    count
  }
  if(!hasLocalStorageState()){
    return (
      <LinearProgress/>
    )
  }

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  )
}