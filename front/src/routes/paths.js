// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/';
const ROOTS_ADMIN = '/admin';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, 'login'),
    resetPassword: path(ROOTS_AUTH, 'reset-password'),
};

export const PATH_PAGE = {
    page404: '/404',
    page500: '/500',
    comingSoon: '/coming-soon',
};

export const PATH_ADMIN = {
    root: ROOTS_ADMIN,
    dashboard: path(ROOTS_ADMIN, '/dashboard'),
    setting: {
        root: path(ROOTS_ADMIN, '/setting'),
        account: path(ROOTS_ADMIN, '/setting/update/account-setting'),
        settingView: (tabKey) => path(ROOTS_ADMIN, `/setting/update/${tabKey}`),
    },
    blog: {
        root: path(ROOTS_ADMIN, '/blogs'),
        list: path(ROOTS_ADMIN, '/blogs/list'),
        new: path(ROOTS_ADMIN, '/blogs/add'),
        blogEdit: (id) => path(ROOTS_ADMIN, `/blogs/edit/${id}`),
    },
    category: {
        root: path(ROOTS_ADMIN, '/categories'),
        list: path(ROOTS_ADMIN, '/categories/list'),
        new: path(ROOTS_ADMIN, '/categories/add'),
        categoryEdit: (id) => path(ROOTS_ADMIN, `/categories/edit/${id}`),
    },
};