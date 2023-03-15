export const questionPrompts = {
  useState: [
    "Explain useState.",
    "Be able to give an example of useState.",
    "Know that state changes cause components to re-render.",
  ],
  useEffect: [
    "Explain what useEffect does.",
    "Know how to use the dependency array.",
    "Know how to use the cleanup function.",
    "Know what causes infinity renders."
  ],
  useMemo: [
    "Explain the purpose of useMemo.",
    "Know that useMemo is used for caching values.",
  ],
  useCallback: [
    "Explain the purpose of useCallback.",
    "Be able to debug components that re-render due to lack of useCallback.",
    "Know how the lack of this can cause infinity renders."
  ],
  useContext: [
    "Explain the purpose useContext.",
    "Give an example.",
    "Explain if useContext should be used as primary state management tool.",
  ],
  debounce: [
    "Explain what debounce does.",
    "Be able to implement a debounce function.",
  ],
  throttle: ["Explain what throttle does.", "Be able to implement a throttle."],
  implementPromise: [
    "know how to implement a promise.",
    "explain what a promise is.",
  ],
  implementPromiseAll: [
    "Explain what Promise.all is used for.",
    "Know how to implement it.",
  ],
  whatIsHoisting: [
    "Explain hoisting.",
    "Understand how hoisting works for functions vs var/let/const.",
    "Understand why sometimes hoisting leads to refernce errors or varibles being undefined.",
    "Difference between function declaration vs functoin expression in context of hoisting.",
  ],
  whatIsAScope: [
    "Explain scopes.", "What is function / global / block scopes ?"
  ],
  forLoopsAndLoggingI: [
    "Explain why logging of 'i' in loop with setTimeout results in same value.",
    "Be able to fix the issue of 'i' being logged as same value."
  ],
  eventLoop: [
    'Determine the logging orders of setTimeout and Promises.', 
    'Know the difference between micro and macro task queues.'
  ], 
  cssSelectors: [
    "Know the various css selectors, eg: class name, ID, element, etc."
  ],
  pseudoElementClass: [
    "Know the difference between pseudo classes and elements.",
  ],
  elementPositioning: [
    "Be comfortable at explaining what relativ / fixed positionings do."
  ],
  absolutePositioningInsideRelative: [
    "Know what happens when placing an aboslute positioned child in a relative parent."
  ],
  whyIsWebpackNeeded: [
    "Explain why webpack is needed."
  ],
  whatIsALoadingInContextOfWebpack: [
    "Explain what a loader is and why it is used."
  ],
  differenceBetweenCommonJSandESModules: [
    "Explain the difference."
  ],
  closure: [
    "Explain what is Closure.",
    "Provide examples of how closure can be used."
  ],
  cookiesVsLocalStorage: [
    "Explain in what scenarioes each should be used. Understand the differences."
  ],
  usingFetchAndAsyncAwait: [
    "Demonstrate how to use the Fetch api.",
    "Know that It returns a Promise that resolves to the Response."
  ],
  sessionVsTokenBasedAuthenticaion: [
    "Know the differences.", 
    "Know the pros/cons of each."
  ],
  xss: [
    'Explain what cross site scripting attack is.',
    'Explain what precautions one can take to prevent XSS attack.'
  ]
};
