const instance = axios.create();

instance.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
});

instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  return error.response;
});

function plugin(Vue) {
  if (plugin.installed) {
    return;
  }
  Vue.http = instance;
}

if (typeof  window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
