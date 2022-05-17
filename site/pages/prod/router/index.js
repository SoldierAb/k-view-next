import Home from '../views/Home.vue';
import compJson from '../../../../components.json';

/**
 * @description 路由获取设置
 * @param {Object} dataSource 数据源 
 * @param {String} sep 分隔符 
 * @returns {Array<Route>} routes
 */
 const getComponentsRoutes = (dataSource, sep = '/', routeBase='Components', initRoutes = []) => {
  const dpFn = (data, parentKey = '') =>
    Object.keys(data).reduce((prev, key) => {
      const nodeKey = `${parentKey ? parentKey + sep : ''}${key}`;
      const { label, icon, children } = data[key];
      const item = {
        label,
        icon,
        name: key,
        key: nodeKey,
        path: `/${routeBase}/${nodeKey}`,
      };
      if (!children) {
        item.component = ()=>import(`../../../../components/${key}/README.zh-CN.md`);
        prev.push(item);
      }else {
        prev.push(...dpFn(children, key));
      }
      return prev;
    }, [...initRoutes]);
  return dpFn(dataSource);
};

export const navMenuDataSource = {
  Documents: {
    label: '文档',
  },
  Components: {
    label: '组件',
  },
  CHANGELOG: {
    label: '更新日志',
    link: 'https://github.com/SoldierAb/k-view-next/releases',
  },
  Github: {
    label: 'Github',
    icon: 'github',
    link: 'https://github.com/SoldierAb/k-view-next',
  },
  Typescript: {
    label: 'Typescript',
    icon: 'Typescript',
    link: `${process.env.BASE_URL}ppt/typescript.html`,
  }
};


export const documentsDataSource = {
  Production: {
    label: '简介',
  },
  Contribute: {
    label: '贡献指南',
  },
  FAQ: {
    label: 'FAQ',
  }
};

export const menuDataSource = (()=>{
  return {
    Architecture: {
      label: '架构设计',
      icon: 'sketch',
    },
      ...compJson,
    };
})();


/**
 * @description 基础路由
 */
export const routes = [
  {
    name: 'Components',
    path: '/Components',
    redirect: '/Components/Architecture',
    component: ()=> import('../views/Components.vue'),
    children: [
        {
          path: '/Components/Architecture',
          name: 'Architecture',
          component: ()=> import('../../../../docs/Architecture.md'),
        },
    ].concat(
      getComponentsRoutes(compJson),
    ),
  },
  {
    path:'/Home',
    name: 'Home',
    component: Home, 
  },
  {
    name: 'Documents',
    path: '/Documents',
    redirect: '/Documents/Production',
    component: ()=> import('../views/Documents.vue'),
    children: [
      {
        path: '/Documents/Production',
        name: 'Production',
        component: ()=> import('../../../../README.md'),
      },
      {
        path: '/Documents/Contribute',
        name: 'Contribute',
        component: ()=> import('../../../../docs/Contribute.md'),
      },
      {
        path: '/Documents/FAQ',
        name: 'FAQ',
        component: ()=> import('../../../../docs/FAQ.md'),
      }
    ],
  },
  {
    path: '/CHANGELOG',
    name: 'CHANGELOG',
    component: ()=> import('../views/CHANGELOG.vue'),
  },
  {
    path:'/',
    redirect: '/Home',
  }
];
  
console.log(routes);
