import React, {useReducer} from 'react';

const StateContext = React.createContext();

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'toggleSignin':
      return {...state, signin: !state.signin};
    case 'toggleTeacherUI':
      return {...state, teacherUI: !state.teacherUI};
    default:
      return state;
  }
};

export const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(stateReducer, {
    signin: true,
    teacherUI: true,
  });

  const toggleSignin = () => {
    dispatch({type: 'toggleSignin'});
  };

  const toggleTeacherUI = () => {
    dispatch({type: 'toggleTeacherUI'});
  };

  return (
    <StateContext.Provider value={{data: state, toggleSignin, toggleTeacherUI}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
