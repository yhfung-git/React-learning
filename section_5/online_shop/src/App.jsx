import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvider from "./store/CartContext.jsx";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
};

export default App;
