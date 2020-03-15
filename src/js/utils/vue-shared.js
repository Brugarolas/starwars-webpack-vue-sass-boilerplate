const shared = {};

shared.install = (Vue, options) => {
  Vue.prototype.$shared = new Vue({ // https://vuejs.org/v2/guide/reactivity.html#For-Objects
    data: {
      hasPreviousRoute: false
    }
  });
};

export default shared;
