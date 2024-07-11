// constants.js
export const blogPosts = [
  {
    id: 1,
    title: "HTML Syntax",
    description:
      "The syntax of a language is how it works. How to actually write it. Learn HTML syntax…",
    date: "6 Oct 2017",
    tags: ["HTML"],
    imageUrl:
      "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg",
    link: "/blog/1", // Updated to internal link
    content: (
      <>
        <p>
          The syntax of a language is how it works. How to actually write it.
          Learn HTML syntax…wefewffffffeeeeeeeeeeeee The syntax of a language is
          how it works. How to actually write it. Learn HTML
          syntax…wefewffffffeeeeeeeeeeeee
        </p>
        {/* Add more content here */}
      </>
    ),
    tableOfContents: [
      { title: "Introduction" },
      { title: "Basic Syntax" },
      { title: "Examples" },
    ],
  },
  // Add other blog posts with unique IDs
];
