// imports
import FormLogin from "../components/forms/FormLogin";
import "./_login.scss";

const Login = () => {
  return (
    <main id="login_page">
      <aside id="image_login_form"></aside>
      <div id="login_form_container">
        <FormLogin />
      </div>
    </main>
  );
};

export default Login;
