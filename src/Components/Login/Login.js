import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import loginimage from "./../Image/loginform.png";
import "./Login.css";

const Login = () => {
  const { loginuser, googlelogin, githublogin } = useContext(AuthContext);
  const [accept, setaccept] = useState(false);
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const ClickHundleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        seterror("");
        navigate(from, { replece: true });
        toast.success("LogIn Successful!");
      })
      .catch((error) => {
        console.error(error);
        seterror(error.message);
      });
    console.log(email, password);
  };

  const Handlecheaked = (event) => {
    setaccept(event.target.checked);
  };
  const HandlegoogleClick = () => {
    googlelogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful!");
      })
      .catch((error) => console.error(error));
  };
  const HandleGithubClick = () => {
    githublogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Registration Successful!");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="6">
            <Image className="w-100" src={loginimage} alt="" />
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <Form onSubmit={ClickHundleSubmit} className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-5 fw-semibold">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fs-5 fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  onClick={Handlecheaked}
                  label={
                    <>
                      Accept <Link to="/tearms">Tearms and Conditions</Link>
                    </>
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!accept}>
                Submit
              </Button>
              <div className="mt-4 d-lg-flex justify-content-center">
                <div onClick={HandlegoogleClick} className="google-btn me-2">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt=""
                    />
                  </div>
                  <p className="btn-text">Sign in with google</p>
                </div>
                <div onClick={HandleGithubClick} className="github-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt=""
                    />
                  </div>
                  <p className="btn-text">Sign in with GitHub</p>
                </div>
              </div>
              <div className="text-center">
                <Link to="/register">Don't Have Account!</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
