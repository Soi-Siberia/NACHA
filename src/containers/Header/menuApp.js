export const adminMenu = [
    // { //hệ thống
    //     name: 'menu.system.header', menus: [
    //         {
    //             name: 'menu.system.system-administrator.header',
    //             subMenus: [
    //                 { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
    //                 { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
    //                 { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
    //             ]
    //         },
    //         // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    //     ]
    // },
    { //systeam quản lý người dùng
        name: 'menu.system.header', menus: [
            { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
            // { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
            // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },

    { //systeam quản lý category
        name: 'menu.system.system-category.header', menus: [
            { name: 'menu.system.system-category.manage-category', link: '/system/manage-category' },
        ]
    },

    { //systeam quản lý nproduct
        name: 'menu.system.system-product.header', menus: [
            { name: 'menu.system.system-product.manage-product', link: '/system/product-manage' },
        ]
    },
];
