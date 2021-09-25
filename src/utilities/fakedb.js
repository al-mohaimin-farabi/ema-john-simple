// use local storage as your db for now
const addToDb = (id) => {
  // console.log(id);
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
};

const getDb = () => localStorage.getItem("shopping cart");
const updateDb = (cart) => {
  localStorage.setItem("shopping cart", JSON.stringify(cart));
};

// const removeFromDb = (id) => {
//   const exists = getDb();
//   if (!exists) {
//   } else {
//     const shopping_cart = JSON.parse(exists);
//     delete shopping_cart[id];
//     updateDb(shopping_cart);
//   }
// };

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

// const clearTheCart = () => {
//   localStorage.removeItem("shopping cart");
// };

export { addToDb, getStoredCart };