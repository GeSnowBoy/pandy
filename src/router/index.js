import Vue from 'vue';
import Router from 'vue-router';
import RankPage from '../pages/rank/rank';
import CatePage from '../pages/cate/cate';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/rank'
    },
    {
      path: '/rank',
      name: 'Rank',
      component: RankPage
    },
    {
      path: '/cate',
      name: 'Cate',
      component: CatePage
    }
  ]
});
