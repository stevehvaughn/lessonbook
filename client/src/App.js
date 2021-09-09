import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import { loginPersist } from "./redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom'

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
        ?   
        <>
          <Switch>
              <Route path="/" exact component={() => <Home/>} />
          </Switch>
          <Switch>
              <Route path="/students" exact component={() => <Home/>} />
          </Switch>
          <Switch>
            <Route path="/teachers" exact component={() => <Home/>} />
          </Switch>
          <Switch>
            <Route path="/contact" exact component={() => <Home/>} />
          </Switch>
        </>
        : 
        <>
          <Switch>
            <Route path="/signup" exact component={() => <CreateAccount/>} />
          </Switch>
          <Switch>
            <Route path='/' exact component={() => <Login />} />
          </Switch>
        </>
        }
      </div>
    );
  }
}

export default App;
