import { PATH_ADMIN } from "./routes/paths";

export const REACT_URL = process.env.REACT_APP_URL;

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

export const HEADER = {
    MOBILE_HEIGHT: 64,
    MAIN_DESKTOP_HEIGHT: 88,
    DASHBOARD_DESKTOP_HEIGHT: 92,
    DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
    BASE_WIDTH: 260,
    DASHBOARD_WIDTH: 280,
    DASHBOARD_COLLAPSE_WIDTH: 88,
    //
    DASHBOARD_ITEM_ROOT_HEIGHT: 48,
    DASHBOARD_ITEM_SUB_HEIGHT: 40,
    DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
    NAVBAR_ITEM: 22,
    NAVBAR_ITEM_HORIZONTAL: 20,
};

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN_ADMIN = PATH_ADMIN.dashboard;

export const DEFAULT_DATE = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
export const DEFAULT_COLOR = [
    '#54D62C', // theme.palette.success.main,
    '#04297A', // theme.palette.info.darker
    '#FF4842', // theme.palette.error.main
    '#FFC107', // theme.palette.warning.main,
    '#ed7d31', // Orange
    '#d0a5eb', // Light Purpal
    '#7030a0', // Dark Purpal
    '#f4b084', // Peach
    '#454F5B', // theme.palette.grey[700]
    '#000000', // theme.palette.grey[700]
    '#FFFFFF', // theme.palette.grey[700]
    '#00FFFF', // Cyan
];
export const DEFAULT_GENDER = [
    { id: '1', name: 'Male', value: 'male' },
    { id: '2', name: 'Female', value: 'female' },
    { id: '3', name: 'Other', value: 'other' },
];
export const DEFAULT_CURRENCY = 'CHF';
export const DATE_FORMAT = 'MM/dd/yyyy';
export const TIME_FORMAT = 'hh:mm a';


// SETTINGS
// Please remove `localStorage` when you set settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
    themeMode: 'light',
    themeDirection: 'ltr',
    themeColorPresets: 'default',
    themeLayout: 'horizontal',
    themeStretch: false,
};