import jsonPlaceholder from '../apis/jsonPlaceholder';

// ACTION CREATORS with THUNK

  // create a function that can pass in dispatch and getState (if needed) 
  // so that Thunk can see the function and invoke 
  // the dispatch and getState properties in redux
  // we can also manually create a dispatch

  // FETCH POSTS

export const fetchPosts = () => 
  // use a return function for thunk
  // below is an ES6 abbreviated function passing in dispatch
   async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ 
      type: 'FETCH_POSTS', 
      payload: response.data 
    });
  };

  // FETCH A USER

  // pass in the ID of the user we want to fetch
  export const fetchUser = (id) => 
    async dispatch => {
      const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ 
      type: 'FETCH_USER', 
      payload: response.data
    });
  };

