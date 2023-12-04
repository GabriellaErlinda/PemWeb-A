// createBlogPost.js

const payload = require('payload');
const Blogs = require('./Menu');

// Initialize Payload with your configuration
payload.init({
  secret: 'your-api-secret-key',
  collections: [Blogs],
});

// Example data for creating a new blog post
const newBlog = {
  name: "My Blog Post Title",
  content: [
    {"type": "Text", "data": "This is the introduction."},
    {"type": "Image", "data": "https://example.com/image.jpg"},
    {"type": "Text", "data": "More text goes here."},
    {"type": "Video", "data": "https://youtube.com/watch?v=example"},
    {"type": "Link", "data": "https://example.com"},
    {"type": "Section", "data": "Conclusion"}
  ]
};

// Creating a new blog post using Payload
payload.create({
  collection: "Blogs",
  data: newBlog,
})
  .then((result) => {
    console.log('Blog post created successfully:', result);
  })
  .catch((error) => {
    console.error('Error creating blog post:', error);
  });
