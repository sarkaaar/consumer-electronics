
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{value: []},
  reducers: {

    addToCart: (state,action) => {
     state.value.push(action.payload)
    //  console.log(state.value)
    },
    removeFromCart: (state,action) => {
      state.value -= 1
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { addToCart, removeFromCart } = counterSlice.actions

export default counterSlice.reducer















// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState:{value: 0},
//   reducers: {
//     increment: (state) => {
//      state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer