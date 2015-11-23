import { Router5 } from 'router5'
import historyPlugin from 'router5-history';

export default function createRouter(routes) {
    const router = new Router5()
        .setOption('useHash', false)
        .setOption('defaultRoute', 'buttons')
        // Routes
        .addNode('buttons', '/buttons')
        .addNode('grids', '/grids')
        .addNode('menus', '/menus')
        .addNode('forms', '/forms')
        .addNode('tables', '/tables')
        // Plugins
        .usePlugin(Router5.loggerPlugin())
        .usePlugin(historyPlugin());

    return router;
};
