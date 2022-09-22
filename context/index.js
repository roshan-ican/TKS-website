import { useReducer, createContext } from "react"

//initial state

const initialState = {
  cart: {},
}

const Context = createContext({})
export const CartStateContext = createContext();

function cartReducer(state, action) {

  switch (action.type) {
    case 'TOGGLE_CART_POPUP':
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      }
    case "ADD_TO_CART":
      const item = state.cart[action.payload.productid]
      return {
        cart: {
          ...state.cart,
          [action.payload.productid]: item
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      }
    case "REMOVE_FROM_CART":
      let newCart = { ...state.cart }
      delete newCart[action.payload.productid]
      console.log(action.payload, 'action.payload')
      console.log(newCart, 'newcart')
      return {
        ...state,
        cart: newCart,
      }
    default:
      return state
  }
}
// for pop up
const toggleCartPopup = (dispatch) => {
  return dispatch({
    type: "TOGGLE_CART_POPUP"
  });
};
//context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { Context, Provider, toggleCartPopup }
