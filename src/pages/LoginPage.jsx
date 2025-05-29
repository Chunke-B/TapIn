import LoginForm from "../components/LoginForm";
import Logo from "../components/LogoHeader";
import Footer from "../components/Footer";
import "../styles/Authentication/LoginPage.scss";

function LoginPage() {
  return (
    <div className="login-page">
      <Logo />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
