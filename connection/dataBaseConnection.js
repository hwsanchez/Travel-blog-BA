//Get the client
const mysql = require("mysql2/promise");

//Create connectiomn to DB
const options = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: "3306",
  database: "travel_blog_final_project"
};

async function connectDB() {
  return await mysql.createConnection(options);
}


async function getAllBlogs() {
  const connect = await connectDB();
  const [resultado, _] = await connect.query(
    "SELECT id, title, city, country, cityImage, DATE_FORMAT(visitingDate, '%M %d, %Y') AS visitingDate, author, authorsImage, authorsEmail, blog FROM blogs"
  );
  return resultado;
}





async function getBlogByID(id) {
  const connect = await connectDB();
  const [resultado, _] = await connect.execute("SELECT * FROM blogs WHERE id = ?", [id]);
  return resultado;
}




exports.allBlogs = getAllBlogs;
exports.blogById = getBlogByID;