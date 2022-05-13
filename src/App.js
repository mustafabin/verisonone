import Navbar from "./components/Navbar.jsx";
import Project from "./components/Project.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import github from "./assets/github.svg";
import email from "./assets/gmail.svg";
import linkdin from "./assets/linkdin.svg";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div id="about-me" className="App">
        <div className="about-me">
          <h1>Hello 👋 Im Mustafa Binalhag</h1>
          <h2>About me</h2>
          <p>
            I'm a Software Engineer looking to keep learning in my field. I've
            always loved programatic thinking and realized in high school when I
            took a course in Assembly coding language that software development
            was a career that could allow me to spend my days solving complex
            problems and challenging myself to be better. Each day I work on
            self improvement and my ultimate goal is to watch myself change for
            the better. In my hobbies I feel this change in my physical
            abilities at the gym, and as a software engineer I see it in my
            ability to learn new languages and debug faster while creating more
            complex projects.
          </p>
        </div>
        <Project></Project>
      </div>
      <div id="contact-info" className="contact-page">
        <h1>Contact Me : </h1>
        <div className="image-array">
          <a href="mailto:mbin828@gmail.com">
            <img src={email} alt="gmail" />
          </a>
          <a href="https://github.com/mustafabin">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/mustafabinalhag/">
            <img src={linkdin} alt="Linkdin" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
