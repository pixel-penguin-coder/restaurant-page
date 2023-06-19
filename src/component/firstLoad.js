import { header } from "../component/header";
import { home } from "../pages/home";
import { footer } from "../component/footer";

const firstLoad = () => {
  header();
  home();
  footer();
};

export { firstLoad };
