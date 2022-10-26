import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center m-4 fw-bold text-success">
        Welcome to Blog page
      </h2>
      <hr />
      <div className="container mx-auto">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is cors?</Accordion.Header>
            <Accordion.Body>
              An HTTP-header based system called Cross-Origin Resource Sharing
              (CORS) enables a server to specify any origins (domain, scheme, or
              port) other than its own from which a browser should be able to
              load resources. When domainy.com receives the request, it will
              often reply either: URL: http://domainx.com.
              Access-Control-Allow-Origin Authentication-Control-Allow-Origin: *
              (meaning all domains are allowed) If the cross-origin requests are
              not authorized, an error will occur.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why are you using firebase?</Accordion.Header>
            <Accordion.Body>
              To assist you in creating and distributing apps for Android, iOS,
              the web, C++, and Unity, Firebase offers thorough documentation
              and cross-platform SDKs. Firebase is excellent for quick projects
              because it's quick, simple to set up, and frequently only needs
              front-end logic. It enables you to concentrate on developing your
              app rather than setting up custom authentication, web sockets, or
              database connections.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What other options do you have to implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              A user name and password are typically required for server
              authentication. Card-based authentication, retinal scanning, voice
              recognition, and fingerprint authentication are further options.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              The only differences between the private route component and the
              public route are the redirect URL and the authenticate condition.
              The user may only access the authenticated routes if he is
              authenticated, else he will be sent to the login page (Logged in).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is Node?</Accordion.Header>
            <Accordion.Body>
              Since its introduction in 1995, Javascript has replaced HTML as
              the primary language used for web development. JavaScript was
              primarily utilized for client-side scripting inside script tags
              that were executed in web browsers for a large portion of its
              existence. Due to this constraint, developers had to often switch
              between many languages and frameworks while working on a web
              application's front-end (client-side) and back-end (server-side)
              components. Based on the open-source V8 JavaScript engine, which
              also powers JS in browsers like Google Chrome, Node.js is
              developed in C, C++, and JavaScript. New JavaScript features are
              added to Node as V8 supports them.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How does Node work?</Accordion.Header>
            <Accordion.Body>
              It serves as a backend service for applications that use
              javascript on the server. Javascript is utilized in this fashion
              for both the front end and the back end. Node. js is extremely
              scalable, light, quick, and data-intensive. It uses the Chrome v8
              engine, which turns javascript code into machine code.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="https://media.tenor.com/7jaVOs1ETVUAAAAM/bunny-cute.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blogs;
