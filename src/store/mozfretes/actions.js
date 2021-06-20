
import router from "../../router/index";
import AuthServices from "src/Services/AuthServices";

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
        commit("SET_ERROR", getError(error));
      });
  },
  async getAuthUser({ commit }) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.getAuthUser();
      commit("SET_USER", response.data.data);
      commit("SET_LOADING", false);
      return response.data.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_USER", null);
      commit("SET_ERROR", getError(error));
    }
  },
  setGuest(context, { value }) {
    window.localStorage.setItem("guest", value);
  },
}

