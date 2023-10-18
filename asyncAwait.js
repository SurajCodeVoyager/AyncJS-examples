const posts = [
    { title: "Post one", body: "This is post one" },
    { title: "Post two", body: "This is post two" },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li> ${index + 1} ${post.title} ${post.body}</>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong");
        }
      }, 2000);
    });
  }
  
  // Async Await
//   async function init(){
//       await createPost({title: 'Post Three', body: 'This is post three'});
//       getPosts();
//   }
//   init();
//   Async await fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}

fetchUsers();