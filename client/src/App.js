import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import About from "./components/About/About";
import { getUsersStudents, loginPersist } from "./redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom'
import CreateLesson from "./components/Lessons/CreateLesson";

const App = () => {
  const user = useSelector(state => state.user)
  const [isLoading, setIsLoading] = useState(false)
  
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(loginPersist(setIsLoading))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUsersStudents())
  }, [])
 
  if (isLoading === true) {
    return (
      <h1></h1>
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
              <Route path="/create-lesson" exact component={() => <CreateLesson/>} />
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
              <Route path="/about" exact component={() => <About />} />
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
