import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// import Grocery from "./components/Grocery";



const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
  return (
    <Provider store = {appStore}>
    <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <Header />
      <Outlet />
      </main>
      <Footer />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
         path: "/grocery",
         element :<Suspense fallback ={<h1>Loading...</h1>}> <Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
