import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import { loginPersist } from "./redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    dispatch(loginPersist())
    setIsLoading(false)
  }, [dispatch])
 
  if (isLoading === true) {
    return (
      <h1>Page is Loading</h1>
    )
  } else {
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
}

export default App;
