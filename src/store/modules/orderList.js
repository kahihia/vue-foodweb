import Vue from 'vue'

const state = {
	// 存放数据
	orderList: [],
	params: {}
}

const getters = {
	// 页面调用state里面的值
	getOrderList: state => state.orderList  // 返回orderList

}

const actions = {
	// 异步请求
	fetchOrderList({commit, state}){
		Vue.http.post('/api/getOrderList', state.params)
		.then((res) => {
			commit('updateOrderList', res.date.list)
		}, (err) => {
			console.log(err)
		})
	}
}

const mutations = {
	// 同步操作 把orderList复写为orderList
	updateOrderList (state, payload){
		state.orderList = payload
	},
	updateParams (state, {key,val}){
		state.params[key] = val
		console.log(state.params)
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}