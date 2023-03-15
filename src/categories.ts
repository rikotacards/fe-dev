import { questionPrompts } from "./questionPrompts";

export type ProblemType = {
  name: string;
  url: string;
  questionPrompts: string[];
  status: boolean;
  difficulty?: string;
  studyResources: {
    resourceName: string;
    resourceUrl: string;
  }[];
};

export type CategoriesType = {
  categoryName: string;
  problems: ProblemType[];
};

export const categories: CategoriesType[] = [
  {
    categoryName: "React Concepts",
    problems: [
      {
        name: "useState Example",
        url: "https://codesandbox.io/s/usestate-example-by-max-u7ny2j?file=/src/App.js",
        status: false,
        questionPrompts: questionPrompts.useState,
        difficulty: "easy",
        studyResources: [
          {
            resourceName: "w3 Schools",
            resourceUrl: "https://www.w3schools.com/react/react_usestate.asp",
          },
        ],
      },
      {
        name: "useEffect Example",
        url: "https://codesandbox.io/s/useeffect-example-gkpey8?file=/src/App.js",
        status: false,
        questionPrompts: questionPrompts.useEffect,
        difficulty: "easy",
        studyResources: [
          {
            resourceName: 'w3, useEffect', 
            resourceUrl: 'https://www.w3schools.com/react/react_useeffect.asp'

          },
          {
            resourceName: "React Docs, useEffect",
            resourceUrl: "https://reactjs.org/docs/hooks-effect.html",
          },
        ],
      },
      {
        name: "useMemo Example",
        url: "https://codesandbox.io/s/usememo-example-by-max-forked-u4nv16",
        status: false,
        difficulty: 'medium',
        questionPrompts: questionPrompts.useMemo,
        studyResources: [
          {
            resourceName: 'w3, React useMemo Hook',
            resourceUrl: 'https://www.w3schools.com/react/react_usememo.asp'
          }
        ],
      },
      {
        name: "useCallback Example",
        url: "https://codesandbox.io/s/usecallback-example-by-max-b1ib72?file=/src/App.js",
        status: false,
        difficulty: 'medium',
        questionPrompts: questionPrompts.useCallback,
        studyResources: [
          {
            resourceName: 'w3 React useCallback', 
            resourceUrl: 'https://www.w3schools.com/react/react_usecallback.asp'
          }
        ],
      },
      {
        name: "useContext Example",
        url: "https://codesandbox.io/s/usecontext-example-gf13uo?file=/src/App.js",
        status: false,
        questionPrompts: questionPrompts.useContext,
        difficulty: "medium",
        studyResources: [
          {
            resourceName: "w3,React useContext Hook",
            resourceUrl: "https://www.w3schools.com/react/react_usecontext.asp",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Hoisting",
    problems: [
      {
        name: "What is Hoisting?",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.whatIsHoisting,
        studyResources: [
          {
            resourceName: "MDN, Hoisting",
            resourceUrl:
              "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Scope",
    problems: [
      {
        name: "What is a scope?",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.whatIsAScope,
        studyResources: [
          {
            resourceName: "MDN, Scope",
            resourceUrl:
              "https://developer.mozilla.org/en-US/docs/Glossary/Scope",
          },
        ],
      },
      {
        name: "For loops and Logging 'i'",
        url: "",
        status: false,
        difficulty: 'medium',
        questionPrompts: questionPrompts.forLoopsAndLoggingI,
        studyResources: [
          {
            resourceName: "MDN",
            resourceUrl:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#lexical_declarations_in_the_initialization_block",
          },
        ],
      }
    ],
  },
  {
    categoryName: "Promises",
    problems: [
      {
        name: "Implement a Promise",
        url: "",
        difficulty: 'hard',
        status: false,
        questionPrompts: questionPrompts.implementPromise,
        studyResources: [{
          resourceName: 'Implementing a simple promise in Js', 
          resourceUrl: 'https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a'
        }],
      },
      {
        name: "Implement promise.all",
        url: "",
        difficulty: 'hard',
        status: false,
        questionPrompts: questionPrompts.implementPromiseAll,
        studyResources: [{
          resourceName: 'Implementing Promise.all', 
          resourceUrl: 'https://medium.com/@copperwall/implementing-promise-all-575a07db509a'
        }],
      },
      {
        name: "Using Fetch and Async Await",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.usingFetchAndAsyncAwait,
        studyResources: [{
          resourceName: 'Using the Fetch API, mdn', 
          resourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
        }],
      },
    ],
  },
  {
    categoryName: "Debounce",
    problems: [
      {
        name: "Debounce",
        url: "",
        status: false,
        questionPrompts: questionPrompts.debounce,
        difficulty: "hard",
        studyResources: [
          {
            resourceName:
              "Webdev simplified: Implementing a debounce wrapper in Javascript",
            resourceUrl:
              "https://blog.webdevsimplified.com/2022-03/debounce-vs-throttle/",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Throttle",
    problems: [
      {
        name: "Implement throttle",
        url: "",
        status: false,
        difficulty: 'hard',
        questionPrompts: questionPrompts.throttle,
        studyResources: [
          {
            resourceName: "webdev simplified",
            resourceUrl:
              "https://blog.webdevsimplified.com/2022-03/debounce-vs-throttle/",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Closure",
    problems: [
      {
        name: "What is Closure?",
        url: "",
        difficulty: 'medium',
        status: false,
        questionPrompts: questionPrompts.closure,
        studyResources: [
          {
            resourceName: "MDN, Closures",
            resourceUrl:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          },
        ],
      },
    ],

  },
  {
    categoryName: "Eventloop",
    problems: [
      {
        name: "Macrotask & Microtask Queue event ordering",
        url: "",
        difficulty: 'hard',
        status: false,
        questionPrompts: questionPrompts.eventLoop,
        studyResources: [
          {
            resourceName: "Microtasks and (Macro)tasks in Event Loop",
            resourceUrl:
              "https://medium.com/@saravanaeswari22/microtasks-and-macro-tasks-in-event-loop-7b408b2949e0",
          },
          {
            resourceName: "What is difference between Microtask Queue and Callback Queue in asynchronous JavaScript?",
            resourceUrl: "https://www.tutorialspoint.com/what-is-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript#:~:text=Difference%20between%20Microtask%20Queue%20and%20Callback%20Queue,-Some%20points%20of&text=the%20callback%20queue.-,The%20Callback%20queue%20is%20handled%20by%20the%20JavaScript%20engine%20after,the%20microtask%20queue%20is%20empty."
          }
        ],
      },
  
    ],
  },
  {
    categoryName: "CSS",
    problems: [
      {
        name: "CSS Selectors",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.cssSelectors,
        studyResources: [
          {
            resourceName: "Learn all CSS selectors in 20 minutes",
            resourceUrl:
              "https://www.youtube.com/watch?v=l1mER1bV0N0",
          },
        ],
      },
      {
        name: "What are pseudo-classes and pseudo-elements",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.pseudoElementClass,
        studyResources: [
          {
            resourceName: "Pseudo-classes vs pseudo-elements",
            resourceUrl:
              "https://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html",
          },
        ],
      },
      {
        name: "Element Positioning",
        url: "",
        difficulty: 'medium',
        status: false,
        questionPrompts: questionPrompts.elementPositioning,
        studyResources: [
          {
            resourceName: "Absolute, Relative, Fixed Positioning, How Do They Differ?",
            resourceUrl:
              "https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/",
          },
        ],
      },
      {

        name: "Absolute Positioning Inside Relative Positioning",
        url: "",
        difficulty: "easy",
        status: false, 
        questionPrompts: questionPrompts.absolutePositioningInsideRelative,
        studyResources: [{
          resourceName: 'Absolute Positioning Inside Relative Postioning',
          resourceUrl: 'https://css-tricks.com/absolute-positioning-inside-relative-positioning/'
        }]
      },
    ],
  },
  {
    categoryName: "Webpack",
    problems: [
      {
        name: "Why is webpack needed",
        url: "",
        difficulty: 'medium',
        status: false,
        questionPrompts: questionPrompts.whyIsWebpackNeeded,
        studyResources: [
          {
            resourceName: "Youtube",
            resourceUrl:
              "https://www.youtube.com/watch?v=5IG4UmULyoA",
          },
          {
            resourceName: 'List of webpack interivew Qs',
            resourceUrl: 'https://github.com/styopdev/webpack-interview-questions/blob/master/answers.md'
          }
        ],
      },
      {
        name: "What is a loader in context of webpack",
        url: "",
        difficulty: 'medium',
        status: false,
        questionPrompts: questionPrompts.whatIsALoadingInContextOfWebpack,
        studyResources: [
          {
            resourceName: "Webpack Loaders",
            resourceUrl:
              "https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a",
          },
        ],
      },
      {
        name: "Difference between Common JS and ES Modules",
        url: "",
        difficulty: 'easy',
        status: false,
        questionPrompts: questionPrompts.differenceBetweenCommonJSandESModules,
        studyResources: [
          {
            resourceName: "LogRocket",
            resourceUrl:
              "https://blog.logrocket.com/commonjs-vs-es-modules-node-js/",
          },
        ],
      }
    ],
  },
  {
    categoryName: "Authentication / Security",
    problems: [
      {
        name: "XSS (Cross site scripting)",
        url: "",
        status: false,
        questionPrompts: questionPrompts.xss,
        difficulty: "easy",
        studyResources: [
          {
            resourceName:
              "Youtube",
            resourceUrl:
              "https://www.youtube.com/watch?v=M_nIIcKTxGk",
          },
        ],
      },
      {
        name: "Session vs Token Based Authentication",
        url: '',
        status: false,
        difficulty: 'easy',
        questionPrompts: questionPrompts.sessionVsTokenBasedAuthenticaion,
        studyResources: [
          {
            resourceName:
              "Geeks for geeks",
            resourceUrl:
              "https://www.geeksforgeeks.org/session-vs-token-based-authentication/",
          },
        ],
      },
      {
        name: "Cookies vs Local Storage",
        url: "",
        status: false,
        questionPrompts: questionPrompts.cookiesVsLocalStorage,
        difficulty: "medium",
        studyResources: [
          {
            resourceName:
              "Stackoverflow",
            resourceUrl:
              "https://stackoverflow.com/questions/3220660/local-storage-vs-cookies",
          },
        ],
      },
    ],
  },
];
