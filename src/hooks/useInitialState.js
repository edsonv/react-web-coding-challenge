import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const goToFirst = () => {
    setState({
      ...state,
      currentPage: 1,
    });
  };

  const goToLast = () => {
    setState({
      ...state,
      currentPage: state.pages,
    });
  };

  const goToPrev = () => {
    if (state.currentPage !== 1) {
      setState({
        ...state,
        currentPage: state.currentPage - 1,
      });
    }
  };

  const goToNext = () => {
    if (state.pages !== state.currentPage) {
      setState({
        ...state,
        currentPage: state.currentPage + 1,
      });
    }
  };

  const changePage = (e) => {
    const number = Number(e.target.innerText);
    setState({
      ...state,
      currentPage: number,
    });
  };

  const setCounter = async (input) => {
    await setState({
      ...state,
      counter: input,
    });
  };

  const setPages = async (input) => {
    let pages = Math.round(input / 10);
    await setState({
      ...state,
      pages: pages,
    });
  };

  // const setData = async (input) => {
  //   await setState({
  //     ...state,
  //     data: input,
  //   });
  // };

  return {
    state,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
    changePage,
    setCounter,
    setPages,
    // setData,
  };
};
