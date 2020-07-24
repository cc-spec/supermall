import {
  ADD_COUNTER,
  ADD_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    // state.cartList.push(payload)

    // 1. 创建一个变量oldPruduct用来保存以前的商品, 初始值为null
    // 2. 遍历已保存的cartList, 如果cartList某项的iid与oldProduct某项的iid相等, 就把该项赋值给oldProduct
    // 3. 判断如果oldProduct有该项, 该项的count+1, 如果oldProduct中没有该项, 传过来的payload的count赋值为1, 并将该payload push到state.cartList中

    // 查找之前数组(cartList)中是否有该商品
    // 方法1
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // 方法2 find方法
    return new Promise((res, rej) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        res('当前的商品数量加一')
      } else {
        context.commit(ADD_CART, payload)
        payload.count = 1
          // state.cartList.push(payload)
        res('添加购物车成功! ')
      }
    })
  }
}