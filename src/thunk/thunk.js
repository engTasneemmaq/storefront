export const getRemoteData = () => {
    return async (dispatch) => {
        const raw = await fetch('https://jsonplaceholder.typicode.com/users');
        const results = await raw.json();
      dispatch(loadProducts(results.results));
    };
  };
  
  export const loadProducts = (payload) => {
    return {
      type: 'LOAD_PRODUCTS',
      payload,
    };
  };


// import superagent from 'superagent';
// const api = 'https://jsonplaceholder.typicode.com/users';
// export const getRemoteData = () => (dispatch) => {
//     return superagent.get(api).then((data) => {
//         dispatch(getAction(data.body));
//     })
// }
// const getAction = (payload) => {
//     return {
//         type: 'GET',
//         payload: payload
//     }
// }


