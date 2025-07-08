import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { JobsLoader } from "./pages/Jobs";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="products" element={<Products />} />

        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={JobsLoader}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    // <div>
    //   <Navbar />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/products" element={<Products />} />
    //     </Routes>
    //   </div>
    // </div>

    <RouterProvider router={router} />
  );
};

export default App;
