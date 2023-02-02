// vendors
import { createSlice } from '@reduxjs/toolkit'

// types
import type { CartItem, Product } from '@/typings/product'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<Product>) => {
      const id = payload.id

      state.items.forEach((_, index) => {
        if (id === state.items[index].id) {
          state.items[index].amount += 1
        }
      })
    },

    decrement: (state, { payload }: PayloadAction<Product>) => {
      const id = payload.id

      state.items.forEach((_, index) => {
        if (id === state.items[index].id) {
          if (state.items[index].amount <= 1) {
            state.items[index].amount = 1
          } else {
            state.items[index].amount -= 1
          }
        }
      })
    },

    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const newProduct = {
        ...payload,
        amount: 1,
      }

      let isItemInCart = false
      for (const cartItemIndex in state.items) {
        const cartItem = state.items[cartItemIndex]
        if (cartItem.id === newProduct.id) {
          state.items[cartItemIndex].amount += 1
          isItemInCart = true
        }
      }
      if (!isItemInCart) {
        state.items.push(newProduct)
      }
    },

    removeFromCart: (state, { payload }: PayloadAction<Product>) => {
      const newProduct = state.items.filter((productCart) => productCart.id !== payload.id)
      state.items = newProduct
    },
  },
})

export const { increment, decrement, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
