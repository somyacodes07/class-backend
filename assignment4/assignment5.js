const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  const nav = `
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/skills">Skills</a> |
      <a href="/projects">Projects</a> |
      <a href="/contact">Contact</a>
    </nav>
    <hr>
  `;

  if (req.url === "/") {

    res.end(`
      ${nav}
      <h1>Welcome to My Portfolio</h1>
      <p>Hello! I am a student and web developer.</p>
    `);

  } else if (req.url === "/about") {

    res.end(`
      ${nav}
      <h1>About Me</h1>
      <p>I am passionate about programming and technology.</p>
    `);

  } else if (req.url === "/skills") {

    res.end(`
      ${nav}
      <h1>My Skills</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
      </ul>
    `);

  } else if (req.url === "/projects") {

    res.end(`
      ${nav}
      <h1>My Projects</h1>
      <ul>
        <li>Student Management System</li>
        <li>Portfolio Website</li>
        <li>Node.js Server</li>
      </ul>
    `);

  } else if (req.url === "/contact") {

    res.end(`
      ${nav}
      <h1>Contact Details</h1>
      <p>Email: somyajeetsingh15@gmail.com</p>
      <p>Phone: +91 1234567890</p>
    `);

  } else {

    res.writeHead(404, {
      "Content-Type": "text/html"
    });

    res.end(`
      <h1>404 - Page Not Found</h1>
      <a href="/">Go Back Home</a>
    `);
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
