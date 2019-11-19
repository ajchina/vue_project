
export default {
    state: { // 购物车初始状态
        list: JSON.parse(localStorage.getItem("cart")) || []
    },
    mutations: {
        addcart(state, data) {
            const good = state.list.find(value => value.title == data.title)
            if(good) {
                good.cartCount += 1;
            } else {
                state.list.push({
                    ...data,
                    cartCount: 1
                });
            }
        },
        cartremove(state, index) {
            if(state.list[index].cartCount > 1) {
                state.list[index].cartCount -= 1
            }
        },
        cartadd(state, index) {
            state.list[index].cartCount += 1
        }
    },
    getters: {
        //总数
        cartTotal: state =>{
            let num = 0
            state.list.forEach(item => {
                num += item.cartCount;
            })
            return num;
        },
        // 总价
        total: state =>{
            return state.list.reduce(
                (total, item) => total + item.cartCount * item.price,
                0
            )
        },
    }
}