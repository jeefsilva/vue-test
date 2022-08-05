import { createStore } from 'vuex'
import axios from "axios"

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_MY_API_KEY}`;

export const store = createStore({
    state: {
        articles: []
    },
    getters: {
        getArticles: (state) => state.articles
    },
    actions: {
        async fetchArticles({commit}, payload) {
            const params = {
                country: 'br',
            ...(payload && {category: payload.type})
            }
            try {
                const data = await axios.get('https://newsapi.org/v2/top-headlines', {params})
                commit('SET_ARTICLES', data.data.articles)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles
        }
    }
})
