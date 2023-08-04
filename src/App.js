import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllOrders from "./components/OrderManagement/AllOrders";
import Neworder from "./components/OrderManagement/Neworder";
import OrderTracking from "./components/OrderManagement/OrdersTracking";
import RidersTracking from "./components/OrderManagement/RidersTracking";
import AllRiders from "./components/RidersManagement/AllRiders";
import Teams from "./components/RidersManagement/Teams";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      errorElement: <ErrorPage />,
      children: [
        //order management routes
        { path: "/AllOrders", element: <AllOrders /> },
        { path: "/neworder", element: <Neworder /> },
        { path: "/orderTracking", element: <OrderTracking /> },
        { path: "/ridersTracking", element: <RidersTracking /> },

        //rider management routes
        { path: "/AllRiders", element: <AllRiders /> },
        { path: "/teams", element: <Teams /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
