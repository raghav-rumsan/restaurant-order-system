// [
//   {
//     title: "the title",
//     link: "route link",
//     authority: ["roles", "to ", "allow"],
//     // if menu has any children
//     children: [
//       {
//         title: "the title",
//         link: "route link",
//         authority: ["roles", "to ", "allow"],
//       },
//     ],
//   },
// ];

export const menuItems = [
  {
    title: "Home",
    link: "/home",
    authority: ["user", "super-admin", "admin"],
  },
  {
    title: "Admin",
    link: "/admin",
    authority: ["super-admin", "admin"],
    children: [
      {
        title: "Clients",
        authority: ["super-admin"],
        children: [
          {
            title: "List",
            link: "/clients/list",
            authority: ["super-admin"],
          },
          {
            title: "Create",
            link: "/clients/create",
            authority: ["super-admin"],
          },
        ],
      },
      {
        title: "Orders",
        authority: ["super-admin"],
        link: "/orders",
      },
      {
        title: "Menu",
        authority: ["super-admin", "admin"],
        children: [
          {
            title: "Add a new Item ",
            link: "/menu/add",
            authority: ["super-admin", "admin"],
          },
          {
            title: "Menu List",
            link: "/menu/list",
            authority: ["super-admin", "admin"],
          },
        ],
      },
    ],
  },
];
