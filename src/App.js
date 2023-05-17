import Cart from "./component/Cart";
import ListProduct from "./component/ListProduct";
import Title from "./component/Title";

function App() {
  return (
    <div className="container">
      <Title />
      <div className="row">
        <ListProduct />
        <Cart />
      </div>
    </div>
  );
}

export default App;
