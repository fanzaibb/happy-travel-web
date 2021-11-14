import { createStore } from 'vuex';
import request from '@/utils/request.js';

export default createStore({
    state: {
        mainType: '',
        spot: [],
        restaurant: [],
        hotel: [],
        activity: [],
        navList: [
            { type: 'city', value: '', text: '' },
            { type: 'type', value: '', text: '' },
            { type: 'others', value: '', text: '' },
            { type: 'detail', value: '', text: '' }
        ],
        searchData: [],
        showDropdown: false,
        detail: []
    },
    mutations: {
        SET_MAIN_TYPE(state, payload) {
            state.mainType = payload;
        },
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
            state.navList = payload;
        },
        SHOW_DROPDOWN(state) {
            state.showDropdown = !state.showDropdown;
        },
        SET_SEARCH_DATA(state, payload) {
            state.searchData = payload;
        },
        SET_DETAIL(state, payload) {
            state.detail = payload;
        }
    },
    actions: {
        SET_MAIN_TYPE({ commit }, type) {
            commit('SET_MAIN_TYPE', type);
        },
        async GET_SPOT({ state, commit }, payload) {
            // const res = dataInCity;
            // const filter = {
            //     Name: '',
            //     City: '',
            //     Class1: '',
            //     Class2: '',
            //     Class3: ''
            // };
            const res = await request({
                url: `/ScenicSpot/${state.navList[0].value}?$top=${
                    payload?.page || 4
                }&$format=JSON`,
                method: 'get'
            });
            commit('SET_SPOT', res);
        },
        async GET_RESTAURANT({ state, commit }, payload) {
            const res = await request({
                url: `/Restaurant/${state.navList[0].value}?$top=${
                    payload?.page || 4
                }&$format=JSON`,
                method: 'get'
            });
            commit('SET_RESTAURANT', res);
        },
        async GET_HOTEL({ state, commit }, payload) {
            const res = await request({
                url: `/Hotel/${state.navList[0].value}?$top=${payload?.page || 4}&$format=JSON`,
                method: 'get'
            });
            commit('SET_HOTEL', res);
        },
        async GET_ACTIVITY({ state, commit }, payload) {
            const res = await request({
                url: `/Activity/${state.navList[0].value}?$top=${payload?.page || 2}&$format=JSON`,
                method: 'get'
            });
            commit('SET_ACTIVITY', res);
        },
        async GET_SEARCH_DATA({ commit }, url) {
            const res = await request({
                url: url,
                method: 'get'
            });
            commit('SET_SEARCH_DATA', res);
        },
        UPDATE_NAV({ state, commit }, payload) {
            let list = [...state.navList];
            if (!payload) {
                list = [
                    { type: 'city', value: '', text: '' },
                    { type: 'type', value: '', text: '' },
                    { type: 'others', value: '', text: '' },
                    { type: 'detail', value: '', text: '' }
                ];
            } else {
                list.forEach((e, index) => {
                    if (e.type === payload.type) {
                        list[index] = { ...payload };
                    } else if (payload.clear) {
                        console.log('clear');
                        list[index] = {
                            ...e,
                            value: '',
                            text: ''
                        };
                    }
                });
            }
            commit('SET_NAV', list);
        },
        SHOW_DROPDOWN({ commit }) {
            commit('SHOW_DROPDOWN');
        },
        SET_DETAIL({ commit }, payload) {
            commit('SET_DETAIL', payload);
        }
    },
    getters: {}
});
