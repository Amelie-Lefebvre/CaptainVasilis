// imports
import FormLogin from "../components/forms/FormLogin";
import "./_login.scss";

const Login = () => {
  return (
    <main id="login_page">
      <aside id="image_login_form">
        <img
          src="/src/assets/images/images_temporary/background_login.jpg"
          alt="beautiful view on a greek beach"
        />
      </aside>
      <div id="login_form_container">
        <FormLogin />
      </div>
    </main>
  );
};

export default Login;
