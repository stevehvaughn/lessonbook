import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import { loginPersist } from "./redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginPersist())
  }, [])
 
  return (
    <div>
      <Navbar />
      {user.isLoggedIn 
      ? <Home />
      : <Login />
      }
    </div>
  );
}

export default App;
