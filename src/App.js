import { Provider } from "react-redux";
import Router from "./router/router";
import store from "./redux/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
