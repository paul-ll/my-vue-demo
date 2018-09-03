import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [// 定义插件
      (store) => {
        console.log('my plugin')
      }
    ],
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log(state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.count
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updateCount', rootState.count, {root: true})
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testActions ({commit}) {
            commit('a/updateText', 'textss', {root: true})
          }

        }
      }
    }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }
  return store
}
