import { createStore } from 'vuex';
// import request from '@/utils/request.js';
import { dataInCity } from './mock.json';

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
            { type: 'others', value: '', text: '' }
        ],
        showDropdown: false
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
        }
    },
    SET_SPOT(state, payload) {
        state.spots = payload;
    },
    actions: {
        SET_MAIN_TYPE({ commit }, type) {
            commit('SET_MAIN_TYPE', type);
        },
        GET_SPOT({ commit }) {
            const res = dataInCity;
            // const filter = {
            //     Name: '',
            //     City: '',
            //     Class1: '',
            //     Class2: '',
            //     Class3: ''
            // };
            // res = await request({
            // url: `/ScenicSpot/${filter.City}?$filter=contains(Class1,'${keywordTxt}')&$top=${limitNum}&$format=JSON`,
            // method: 'get',
            // });
            commit('SET_SPOT', res);
        },
        UPDATE_NAV({ state, commit }, payload) {
            let list = [...state.navList];
            if (!payload) {
                list = [
                    { type: 'city', value: '', text: '' },
                    { type: 'type', value: '', text: '' },
                    { type: 'others', value: '', text: '' }
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
            console.log(list);
            commit('SET_NAV', list);
        },
        SHOW_DROPDOWN({ commit }) {
            commit('SHOW_DROPDOWN');
        }
    },
    getters: {}
});
