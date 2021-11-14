import { createStore } from 'vuex';
// import request from '@/utils/request.js';
import { dataInCity } from './mock.json';

export default createStore({
    state: {
        spot: [],
        restaurant: [],
        hotel: [],
        activity: [],
        navList: {
            city: { key: '', label: '台北', to: '/search' },
            type: { key: '', label: '景點' }
        },
        showDropdown: false
    },
    mutations: {
        SET_SPOT(state, payload) {
            state.spot = payload;
        },
        SET_RESTAURANT(state, payload) {
            state.restaurant = payload;
        },
        SET_HOTEL(state, payload) {
            state.hotel = payload;
        },
        SET_ACTIVITY(state, payload) {
            state.activity = payload;
        },
        SET_NAV(state, payload) {
            state.navList[payload.key].key = payload.subKey;
            state.navList[payload.key].label = payload.label;
        },
        SHOW_DROPDOWN(state) {
            state.showDropdown = !state.showDropdown;
        }
    },
    SET_SPOT(state, payload) {
        state.spots = payload;
    },
    actions: {
        GET_SPOT({ commit }) {
            const res = dataInCity;
            // const searchParam = {
            //     Name: '',
            //     City: '',
            //     Class1: '',
            //     Class2: '',
            //     Class3: '',
            //     top: 4
            // };
            // res = await request({ url: '/ScenicSpot?$top=30&$format=JSON', method: 'get' });
            commit('SET_SPOT', res);
        },
        UPDATE_NAV({ commit }, navInfo) {
            commit('SET_NAV', navInfo);
        },
        SHOW_DROPDOWN({ commit }) {
            commit('SHOW_DROPDOWN');
        }
    },
    getters: {}
});
