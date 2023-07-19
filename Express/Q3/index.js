const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost/blogdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

// Add Blog
app.post("/api/blogs", (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  newBlog.save().then((blog) => res.json(blog));
});

// Delete Blog
app.delete("/api/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => blog.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// Update Blog
app.put("/api/blogs/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

// Replace Blog
app.put("/api/blogs/replace/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
