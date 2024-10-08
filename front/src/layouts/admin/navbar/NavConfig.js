// routes
import Iconify from 'src/components/Iconify';
import { PATH_ADMIN } from '../../../routes/paths';
// components

const getIcon = (name) => <Iconify width={16} height={16} icon={name} />;

const navConfig = [
    // GENERAL
    // ----------------------------------------------------------------------
    {
        subheader: '',
        items: [
            { title: 'dashboard', path: PATH_ADMIN.dashboard, icon: getIcon('mdi:monitor-dashboard') },
            {
                title: 'blog & news',
                path: PATH_ADMIN.category.root,
                icon: getIcon('game-icons:newspaper'),
                children: [
                    { title: 'Blogs & News', path: PATH_ADMIN.blog.list },
                    { title: 'Categories', path: PATH_ADMIN.category.list },
                ],
            }
        ],
    },
];

export default navConfig;
