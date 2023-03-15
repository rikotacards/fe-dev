import { categories, CategoriesType } from "./categories";

const localStorageKey = 'fedev'
// {categoryName: {problem: true}}
export type LocalStorageType = {
  [key: string]: {
    [key: string]: boolean;
  };
};

// used for when I update source of questions
export const merge = (appState: LocalStorageType) => {
  let newState = {} as LocalStorageType
  const localStorage = getLocalStorage();
  for(let key in localStorage){
    if(appState[key] !== undefined){
      newState[key] = localStorage[key]
    }
  }
  return  {...appState, ...newState}
  
}

export const createLocalStorageState = (
  categories: CategoriesType[]
): LocalStorageType => {
  let res: { [key: string]: { [key: string]: boolean } } = {};
  for (let cat of categories) {
    res[cat.categoryName] = {} 
  }
  for(let cat of categories){
    for(let prob of cat.problems){
      res[cat.categoryName][prob.name] = prob.status
    }
  }
  return res;
};

export const setLocalStorage = () => {
  const data = createLocalStorageState(categories)
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

export const toggleProblemStatus = (
  categoryName: string,
  problemName: string
) => {
  const state = getLocalStorage();
  state[categoryName][problemName] = !state[categoryName][problemName]
  localStorage.setItem(localStorageKey, JSON.stringify(state) )
};

export const getLocalStorage = (): LocalStorageType => {
  const stringifiedState = localStorage.getItem(localStorageKey);
  if (stringifiedState) {
    return JSON.parse(stringifiedState);
  }
  return {};
};

export const hasLocalStorageState = () => {
  return !!localStorage.getItem(localStorageKey);
};

export const getProblemsByCat = (categoryName: string): {[key: string]: boolean} => {
  const hasState = hasLocalStorageState();
  if (hasState) {
    return getLocalStorage()[categoryName];
  }
  return {};
};
