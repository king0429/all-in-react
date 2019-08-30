import Table from '../page/table.js';
import Detail from '../page/detail.js';
export default [
  {
    path: '/',
    component: Table,
    name: 'index',
    meta: {
      title: '数据中心',
      nav: true,
      level: 1
    }
  },
  {
    path: '/document',
    component: Detail,
    name: 'doc',
    meta: {
      title: '管理中心',
      nav: true,
      level: 1
    }
  }
]