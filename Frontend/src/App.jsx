import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { logout } from "./redux/slices/authSlice";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Explore = lazy(() => import("./pages/Explore"));
const Pantry = lazy(() => import("./pages/Pantry"))
const Quiz = lazy(() => import("./pages/Quiz"))
const Experimental = lazy(() => import("./pages/Experimental"))

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = false;

const App = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    axios.get("/profile", { withCredentials: true }).then((response) => {
      if (response.data == null && userInfo) {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="bg-cream">
      <BrowserRouter>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/experimental" element={<Experimental />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
