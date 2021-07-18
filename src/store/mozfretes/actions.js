
import router from "../../router/index";
import AuthService from "src/Services/AuthServices";

export default {
  logout({ commit, dispatch }) {
    return AuthService.logout()
      .then(() => {
        commit("SET_USER", null);
        dispatch("setGuest", { value: "isGuest" });
        if (router.currentRoute.name !== "login")
          router.push({ path: "/login" });
      })
      .catch((error) => {

      });
  },
  async getAuthUser({ commit }) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.getAuthUser();
      console.log(response.data)

      commit("SET_USER", response.data);
      commit("SET_LOADING", false);
      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_USER", null);
    }
  },
  setGuest(context, { value }) {
    window.localStorage.setItem("guest", value);
  },
}

