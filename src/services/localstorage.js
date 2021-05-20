import Vue from "vue";

const keysAllowed = ["application-token"];

const setItem = (key, value) => {
  if (keysAllowed.includes(key)) {
    localStorage.setItem(key, value);
  } else {
    throw new Error(
      `Chave de local storage inválida. Permitidas: ${keysAllowed}`
    );
  }
};

const getItem = (key) => {
  if (keysAllowed.includes(key)) {
    localStorage.getItem(key);
  } else {
    throw new Error(
      `Chave de local storage inválida. Permitida(s): ${keysAllowed}`
    );
  }
};
const clear = () => localStorage.clear();

const localStorageModified = {
  setItem,
  getItem,
  clear,
};

Vue.use({
  install(Vue) {
    Vue.prototype.$storage = localStorageModified;
  },
});
