import Vue from 'vue'
import iView from 'iview';
const instance = function ($this, subConfig) {
  const self = $this;
  if (!subConfig.formName) {
    sub_($this, subConfig);
  } else {
    self.$refs[subConfig.formName].validate(function (valid) {
      if (valid) {
        sub_($this, subConfig);
      } else {
        self.$Message.error("内容填写不正确，请重试！");
      }
    });
  }
};

function sub_(self, subConfig) {
  loadingStatus(self, subConfig, true);
  iView.LoadingBar.start();
  let url = subConfig.url.path;
  //设置地址参数
  if (subConfig.params) {
    for (let key in subConfig.params) {
      url = url.replace('{' + key + '}', subConfig.params[key])
    }
  }
  let config = {
    url: url,
    method: subConfig.url.method,
  };
  if (subConfig.url.method === 'GET') {
    config['params'] = subConfig.data
  } else {
    config['data'] = subConfig.data
  }
  Vue.http.request(config).then(data => {
    loadingStatus(self, subConfig, false);
    if (data.flag == 200) {
      if (subConfig.callback != undefined) {
        subConfig.callback(data.result);
      }
      if (subConfig.noTips) {
        self.$Message.success(data.msg);
      }
    }else if (data.flag == 400) {
      let message = data.msg;
      self.$Modal.info({
        title: '提示',
        content: message
      });
      error(subConfig, data);
    } else {
      if (subConfig.noTips) {
        self.$Message.error(data.msg);
      }
      error(subConfig, data.msg);
    }
    iView.LoadingBar.finish();
  }).catch(err => {
    loadingStatus(self, subConfig, false);
    iView.LoadingBar.finish();
    error(subConfig, err);
    self.$Message.error(err.msg);
  });
}

function error(subConfig, err, data) {
  if (subConfig.error) {
    subConfig.error(err, data);
  }
}

function loadingStatus(self, subConfig, status) {
  if (subConfig.loading) {
    if (subConfig.loading != "no"){
      self[subConfig.loading] = status
    }
  } else {
    self.ifSub = status;
  }
}


function plugin(Vue) {
  if (plugin.installed) {
    return;
  }
  Vue.submit = instance;
}

if (typeof  window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
