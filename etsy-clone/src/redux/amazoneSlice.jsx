// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   products: [],
//   userInfo: [],
// };

// export const amazonSlice = createSlice({
//   name: "amazon",
//   initialState,
//   reducers: {
//     // ============= Product Reducers Start here ===============
//     // Add to cart
//     addToCart: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity += action.payload.quantity;
//       } else {
//         state.products.push(action.payload);
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//     },
//     // Delete item from cart
//     deleteItem: (state, action) => {
//       state.products = state.products.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//     // Reset cart to initial state
//     resetCart: (state) => {
//       state.products = [];
//     },
//     // ============= Product Reducers End here =================
//     // ============= UserInfo Reducers Start here ==============
//     // User authentication
 
//     // ============= UserInfo Reducers End here ================
//   },
// });

// export const {
//   addItemToCart,
//   deleteItem,
//   resetCart,
//   increaseQuantity,
//   decreaseQuantity,

// } = amazonSlice.actions;
// export default amazonSlice.reducer;









// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   products: [],
//   userInfo: [],
//   status: 'idle',
//   error: null
// };

// // Async actions
// export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
//   const response = await axios.get(`/api/cart/${userId}`);
//   return response.data;
// });

// export const addItemToCart = createAsyncThunk(
//   "cart/addItemToCart",
//   async ({ userId, productId, quantity }) => {
//     const response = await axios.post(`/api/cart`, { userId, productId, quantity });
//     return response.data;
//   }
// );

// export const removeItemFromCart = createAsyncThunk(
//   "cart/removeItemFromCart",
//   async ({ userId, itemId }) => {
//     const response = await axios.delete(`/api/cart/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const increaseQuantity = createAsyncThunk(
//   "cart/increaseQuantity",
//   async ({ userId, itemId }) => {
//     const response = await axios.put(`/api/cart/increase/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const decreaseQuantity = createAsyncThunk(
//   "cart/decreaseQuantity",
//   async ({ userId, itemId }) => {
//     const response = await axios.put(`/api/cart/decrease/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const amazonSlice = createSlice({
//   name: "amazon",
//   initialState,
//   reducers: {
//     resetCart: (state) => {
//       state.products = [];
//     },
//     addToCart: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity += action.payload.quantity;
//       } else {
//         state.products.push(action.payload);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload.items;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addItemToCart.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       })
//       .addCase(removeItemFromCart.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       })
//       .addCase(increaseQuantity.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       })
//       .addCase(decreaseQuantity.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       });
//   },
// });

// export const { resetCart, addToCart } = amazonSlice.actions;

// export default amazonSlice.reducer;






















// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   products: [],
//   userInfo: [],
//   status: 'idle',
//   error: null
// };

// // Async actions
// export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
//   const response = await axios.get(`/api/cart/${userId}`);
//   return response.data;
// });

// export const addItemToCart = createAsyncThunk(
//   "cart/addItemToCart",
//   async ({ userId, productId, quantity }) => {
//     const response = await axios.post(`/api/cart`, { userId, productId, quantity });
//     return response.data;
//   }
// );

// export const removeItemFromCart = createAsyncThunk(
//   "cart/removeItemFromCart",
//   async ({ userId, itemId }) => {
//     const response = await axios.delete(`/api/cart/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const increaseQuantity = createAsyncThunk(
//   "cart/increaseQuantity",
//   async ({ userId, itemId }) => {
//     const response = await axios.put(`/api/cart/increase/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const decreaseQuantity = createAsyncThunk(
//   "cart/decreaseQuantity",
//   async ({ userId, itemId }) => {
//     const response = await axios.put(`/api/cart/decrease/${userId}/${itemId}`);
//     return response.data;
//   }
// );

// export const amazonSlice = createSlice({
//   name: "amazon",
//   initialState,
//   reducers: {
//     resetCart: (state) => {
//       state.products = [];
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.products = action.payload.items;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addItemToCart.fulfilled, (state, action) => {
//         const item = state.products.find((item) => item.id === action.payload.id);
//         if (item) {
//           item.quantity += action.payload.quantity;
//         } else {
//           state.products.push(action.payload);
//         }
//       })
//       .addCase(removeItemFromCart.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       })
//       .addCase(increaseQuantity.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       })
//       .addCase(decreaseQuantity.fulfilled, (state, action) => {
//         state.products = action.payload.items;
//       });
//   },
// });

// export const { resetCart } = amazonSlice.actions;

// export default amazonSlice.reducer;







// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunks for async actions
// export const fetchCart = createAsyncThunk("amazon/fetchCart", async (userId) => {
//   const response = await fetch(`/api/cart/${userId}`);
//   return response.json();
// });

// export const addItemToCart = createAsyncThunk("amazon/addItemToCart", async ({ userId, productId, quantity }) => {
//   const response = await fetch(`/api/cart/${userId}/add`, {
//     method: "POST",
//     body: JSON.stringify({ productId, quantity }),
//   });
//   return response.json();
// });

// export const removeItemFromCart = createAsyncThunk("amazon/removeItemFromCart", async ({ userId, itemId }) => {
//   const response = await fetch(`/api/cart/${userId}/remove/${itemId}`, {
//     method: "DELETE",
//   });
//   return response.json();
// });

// export const increaseQuantity = createAsyncThunk("amazon/increaseQuantity", async ({ userId, itemId }) => {
//   const response = await fetch(`/api/cart/${userId}/increase/${itemId}`, {
//     method: "PATCH",
//   });
//   return response.json();
// });

// export const decreaseQuantity = createAsyncThunk("amazon/decreaseQuantity", async ({ userId, itemId }) => {
//   const response = await fetch(`/api/cart/${userId}/decrease/${itemId}`, {
//     method: "PATCH",
//   });
//   return response.json();
// });

// // Initial state
// const initialState = {
//   products: [],
//   status: "idle",
//   error: null,
// };

// const amazonSlice = createSlice({
//   name: "amazon",
//   initialState,
//   reducers: {
//     resetCart: (state) => {
//       state.products = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(addItemToCart.fulfilled, (state, action) => {
//         state.products.push(action.payload);
//       })
//       .addCase(removeItemFromCart.fulfilled, (state, action) => {
//         state.products = state.products.filter((item) => item.id !== action.payload.id);
//       })
//       .addCase(increaseQuantity.fulfilled, (state, action) => {
//         const item = state.products.find((item) => item.id === action.payload.id);
//         if (item) {
//           item.quantity += 1;
//         }
//       })
//       .addCase(decreaseQuantity.fulfilled, (state, action) => {
//         const item = state.products.find((item) => item.id === action.payload.id);
//         if (item) {
//           item.quantity -= 1;
//         }
//       });
//   },
// });

// export const { resetCart } = amazonSlice.actions;

// export default amazonSlice.reducer;




























import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // ============= Product Reducers Start here ===============
    // Add to cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // Delete item from cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // Reset cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
    // ============= Product Reducers End here =================
    // ============= UserInfo Reducers Start here ==============
    // User authentication
 
    // ============= UserInfo Reducers End here ================
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,

} = amazonSlice.actions;
export default amazonSlice.reducer;













