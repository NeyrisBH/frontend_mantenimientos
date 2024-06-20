import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    loginTime: localStorage.getItem('loginTime') || '',
    tokenApi: localStorage.getItem('tokenApi') || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);

      const loginTime = new Date().getTime();
      state.loginTime = loginTime;
      localStorage.setItem('loginTime', loginTime);
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token');
      state.loginTime = '';
      localStorage.removeItem('loginTime');
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    isTokenExpired: state => {
      const now = new Date().getTime();
      const sessionDuration = 2700000; // 45 minutos
      return (now - state.loginTime) > sessionDuration;
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('clearToken');
    },
    async refreshToken({ commit, state }) {
      const authorization = "Bearer " + state.token;
      const opciones = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Authorization": authorization
        }
      };
      try {
        const response = await fetch("http://localhost:8080/api/token/refresh", opciones);
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.json = await response.json();
          console.log(error.message);
          throw error;
        }
        const data = await response.json();
        commit('setToken', data.token);
      } catch (error) {
        commit('clearToken');
        throw new Error('Unable to refresh token');
      }
    }
  }
});

export default store;