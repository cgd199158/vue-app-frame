/* jshint esversion: 6 */
/*
包含多个基于state的getter计算属性的对象
通过 this.$store.getters[xxx]来访问
 */
export default {
    totalCount: (state, getters) => {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    },

    totalPrice: (state) => {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    },

    positiveSize: (state) => {
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
    },

    // 传参, 调用:store.getters.getTodoById(2)
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
}