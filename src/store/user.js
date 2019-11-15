import us from '../serves/user'

export default {
    state: {
        isLogin: !!localStorage.getItem('token')
    },
    mutations: {
        setLoginState (state, val) {
            state.isLogin = val
        }
    },
    actions: {
        login({commit}, userInfo) {
            return us.login(userInfo).then(({ token }) => {
                if(token) {
                    commit('setLoginState',true)
                    localStorage.setItem('token', token)
                    return true
                }
                return false
            })
        },
        logout({commit}) {
            localStorage.removeItem('token')
            commit('setLoginState', false)
        }
    }
}