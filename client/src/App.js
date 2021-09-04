import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user)

  console.log(user)
  
  return (
    <div>
      <Navbar />
      {user.isLoggedIn 
      ? <h1>You are logged in!</h1>
      : <Login />
      }
    </div>
  );
}

export default App;
