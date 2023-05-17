import { listProduct } from "../../assets/product";
let carts = JSON.parse(localStorage.getItem("list-cart")) || [];

const initState = {
  listProduct: listProduct,
  listCart: carts,
  notify: {
    color: "alert alert-primary",
    message: "Ready to buy",
  },
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (checkExistproduct(state.listCart, action.payload.pro.id)) {
        // da ton tai
        let updateCart = state.listCart.map((cart) => {
          if (cart.pro.id == action.payload.pro.id) {
            cart.quantity += action.payload.quantity;
          }
          return cart;
        });
        state = { ...state, listCart: updateCart };
      } else {
        //  chua ton tai
        let id =
          state.listCart.length == 0
            ? 1
            : state.listCart[state.listCart.length - 1].id + 1;
        state = {
          ...state,
          listCart: [...state.listCart, { id, ...action.payload }],
        };
      }
      state = {
        ...state,
        notify: { color: "alert alert-success", message: "Add success" },
      };
      localStorage.setItem("list-cart", JSON.stringify(state.listCart));
      return state;
    case "CHANGEQUANTITY":
      let updateCart = state.listCart.map((cart) => {
        if (cart.id == action.payload.id) {
          cart.quantity = action.payload.quantity;
        }
        return cart;
      });
      state = {
        ...state,
        notify: { color: "alert alert-warning", message: "Update success" },
        listCart: updateCart,
      };

      localStorage.setItem("list-cart", JSON.stringify(state.listCart));
      return state;
    case "DELETEITEM":
      let deleteCart = state.listCart.filter(
        (cart) => cart.id !== action.payload
      );
      state = {
        ...state,
        notify: { color: "alert alert-danger", message: "Delete success" },
        listCart: deleteCart,
      };
      localStorage.setItem("list-cart", JSON.stringify(state.listCart));
      return state;

    default:
      return state;
  }
};

const checkExistproduct = (listCart, idpro) => {
  let check = false;
  listCart.forEach((cart) => {
    if (cart.pro.id == idpro) {
      check = true;
    }
  });
  return check;
};
