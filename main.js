const { app, startServerApp } = require("./app");
const { allBlogs, blogById } = require("./connection/dataBaseConnection");

const port = 8888;

app.get("/", async (req, res) => {
  const blogs = await allBlogs();   
        res.json(blogs);
});
    
app.get("/detail/:id", async (req, res) => {
  const detail = await blogById(req.params.id);
  res.json(detail);
});

app.post("/addBlog", async (req, res) => {
  const newBlog = await addNewBlog()
});


startServerApp(port);
