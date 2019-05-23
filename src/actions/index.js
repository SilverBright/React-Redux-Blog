// import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// ACTION CREATORS with THUNK and AXIOS

  // create a function that can pass in dispatch and getState (if needed) 
  // so that Thunk can see the function and invoke 
  // the dispatch and getState properties in redux
  // we can also manually create a dispatch


  // FETCH POSTS AND USERS

  export const fetchPostsAndUsers = () => async dispatch => {
    console.log('about to fetch posts')
    await dispatch(fetchPosts()); 
    console.log('fetched posts')
  };

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

  export const fetchUser = (id) =>
    async dispatch => {
      const response = await jsonPlaceholder.get(`/users/${id}`);
    };

  // FETCH A USER with LODASH
  // Lodash is a helper function that only fetches an id ONCE instead of multiple times. 

  // pass in the ID of the user we want to fetch
  // export const fetchUser = (id) => dispatch => {
  //     _fetchUser(id, dispatch);
  // };
  //   // const _fetchUser is a private function because it starts with an underscore
  //   const _fetchUser = _.memoize(async (id, dispatch) => {
  //     const response = await jsonPlaceholder.get(`/users/${id}`);

  //   dispatch({ 
  //     type: 'FETCH_USER', 
  //     payload: response.data
  //   });
  // });
