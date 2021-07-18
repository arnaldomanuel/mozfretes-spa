

  const SET_USER = (state, user) => {
    window.localStorage.setItem("user", user)
    console.log("setting user", user)
    state.user = user;
  }
  const SET_META =(state, meta) =>{
    state.meta = meta;
  }
  const SET_LINKS = (state, links) =>{
    state.links = links;
  }
  const SET_LOADING = (state, loading) => {
    state.loading = loading;
  }
  const SET_ERROR = (state, error) =>{
    state.error = error;
  }

export default {
  SET_USER, SET_META, SET_LINKS, SET_LOADING, SET_ERROR
}
