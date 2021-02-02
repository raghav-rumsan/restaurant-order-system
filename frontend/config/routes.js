const componentLocation = (loc) => `@/pages/${loc}`;

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user', 'super-admin'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },

              {
                path: '/admin',
                icon: 'crown',
                name: 'admin',
                authority: ['super-admin', 'admin'],
                routes: [
                  { path: './', redirect: './dashboard' },
                  {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: './admin/dashboard/Dashboard',
                    authority: ['super-admin', 'admin'],
                  },
                  {
                    path: 'clients',
                    name: 'clients',
                    authority: ['super-admin', 'admin'],
                    routes: [
                      { path: './', redirect: './list' },
                      {
                        name: 'list',
                        authority: ['super-admin', 'admin'],
                        path: 'list',
                        component: componentLocation('admin/clients/list/List'),
                      },
                      {
                        name: 'create',
                        authority: ['super-admin', 'admin'],
                        path: 'create',
                        component: componentLocation('admin/clients/create/Create'),
                      },
                    ],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
