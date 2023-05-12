import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Header, Title, MantineProvider, } from "@mantine/core";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
export const AppShell = ({ colorScheme, routes, title }) => (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: {
            colorScheme,
        } }, { children: _jsxs(MantineAppShell, Object.assign({ padding: "md", header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" }, styles: (theme) => ({
                    main: {
                        backgroundColor: theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                    },
                }) }, { children: _jsx(Title, { children: title }) })) }, { children: [_jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: _jsx(route.element, {}) }, route.path))) }), _jsx(Outlet, {})] })) })) }));
