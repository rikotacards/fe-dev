import { LocalStorageType } from "../localStorageUtil";

export const getCompletionProblemsByCategory = (categoryName: string, state: LocalStorageType) => {
 
  let val = 0;
  const totalQuestionsInCategory = Object.keys(state[categoryName]).length
    for(let problem in state[categoryName]){
      if(state[categoryName][problem]){
        val++
      }
    }
  return {count: val,completionRate: (val/totalQuestionsInCategory) * 100, total:totalQuestionsInCategory}
}

export const countCompletedProblems = (state: LocalStorageType) => {
  let completedCount = 0;
  let count = 0;
  for(let cat in state){
    for(let problem in state[cat]){
      count++
      if(state[cat][problem]){
        completedCount++
      }
    }
  }
  return {count: completedCount, completionRate: (completedCount/count)*100 || 0, total: count}
}
