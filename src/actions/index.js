import jsonPlaceholder from '../apis/jsonPlaceholder';

// ACTION CREATORS with THUNK

  // create a function that passes in dispatch and getState so that Thunk can see the function and invoke 
  // the dispatch and getState properties in redux
  // we can also manually create a dispatch

export const fetchPosts = () => 
  // use a return function for thunk
  // below is an ES6 abbreviated function passing in dispatch
   async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ 
      type: 'FETCH_POSTS', 
      payload: response 
    });
  };