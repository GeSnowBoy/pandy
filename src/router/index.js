import Vue from 'vue';
import Router from 'vue-router';
import RankPage from '../pages/rank/rank';
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/rank',
      name: 'Rank',
      component: RankPage
    }
  ]
});
