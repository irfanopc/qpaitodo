import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './Todo/Todo';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="/todo" element={<Todo/>}> </Route>
         </Routes>
        
      </BrowserRouter>
   
    </div>
  );
}

export default App;
