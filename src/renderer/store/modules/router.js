import { routes } from '../../router'

export default {
    namespaced: true,
    state: {
        routes,
        currentTopRoute: routes[0]
    },
    mutations: {
        CHNAGE_TOP_BAR(state, path) {
            console.log(path);
            state.routes.forEach(item => {
                if (item.path === path) {
                    state.currentTopRoute = item;
                }
            });
            console.log('current', state.currentTopRoute)
        }
    },
    getters: {
        sideBar(state) {
            let sideBar = [];
            if(!state.currentTopRoute){
                return sideBar;
            }
            state.routes.forEach(item => {
                if (item.path === state.currentTopRoute.path) { 
                    sideBar = item.children;
                }
            });
            return sideBar;
        },
        topBar(state) {
            return state.routes.filter(item => {
                if (item.path !== '*') {
                    return true;
                }
            });
        }
    }
} 