// imported useLocation from react-router-dom to get the current location
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// imported the main applications routes
import AppRoutes from "./routes/AppRoutes";
// imported the global components
import Header from "./Components/GlobalComponents/Header";
import Footer from "./Components/GlobalComponents/Footer";
// imported the SEO function to set the SEO for the website
import SEO from "./utils/SEO";
const App = () => {
  // get the current location
  const location = useLocation();
  const { pathname } = location;


  let titleData;

  if (pathname === "/") {
    titleData = {
      title: "Hems-To-Fit - Homepage",
      metaDescription:
        "Discover Hems-To-Fit, the platform that connects tailors with customers, showcasing bespoke tailoring services and custom fashion designs.",
    };
  } else if (pathname === "/about") {
    titleData = {
      title: "Hems-To-Fit - About Us",
      metaDescription:
        "Learn more about Hems-To-Fit, the platform dedicated to connecting customers with skilled tailors for personalized, high-quality tailoring services.",
    };
  } else if (pathname === "/blog") {
    titleData = {
      title: "Hems-To-Fit - Blogs",
      metaDescription:
        "Stay informed with the latest fashion trends, tailor stories, and helpful tips for customers and tailors alike at Hems-To-Fit Blog.",
    };
  } else if (pathname === "/shop") {
    titleData = {
      title: "Hems-To-Fit - Shop",
      metaDescription:
        "Explore a wide range of tailor-made clothing and accessories at Hems-To-Fit Shop, featuring unique designs and high-quality craftsmanship.",
    };
  } else if (pathname === "/academy") {
    titleData = {
      title: "Hems-To-Fit - Academy",
      metaDescription:
        "Join the Hems-To-Fit Academy to enhance your tailoring skills and learn new techniques from professionals in the fashion industry.",
    };
  } else {
    titleData = {
      title: "Error 404 - Page Not Found",
      metaDescription:
        "Oops! The page you're looking for cannot be found. Return to Hems-To-Fit to explore tailoring services, designs, and more.",
    };
  }

  SEO(titleData);

  return(
    <>
    {/* Apps Navbar */}
      <Header />
      {/* App boby */}
      <main>
        <AppRoutes />
      </main>
      {/* Apps footer */}
      <Footer />
    </>
  )
  
  
};

export default App;
