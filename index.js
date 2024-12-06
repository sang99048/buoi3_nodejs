const { rejects } = require('assert');
const http = require('http');
const { resolve } = require('path');

// Tạo server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! This is your web server.\n');
});

// Đặt cổng server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

// function getUserPostID(data, callback) {

//   setTimeout(() => {
//       const postID = 101;
//       callback(postID);
//   }, 1000); 
// }

// function getCommentUserPost(postID, callback) {
 
//   setTimeout(() => {
//       const comment = `Comment for post ID: ${postID}`; 
//       callback(comment);
//   }, 1000); 
// }


// let pr = new Promise((resolve, reject) => {
//   resolve("User data"); 
// });

// pr.then((data) => {
//   return new Promise((resolve) => {
//       getUserPostID(data, function (postID) {
//           resolve(postID);
//       });
//   });
// }).then((postID) => {
//   return new Promise((resolve) => {
//       getCommentUserPost(postID, function (comment) {
//           resolve(comment); 
//       });
//   });
// }).then((comment) => {
//   console.log(comment); 
// }).catch((err) => {
//   console.log(err); 
// });


function getUserPostID(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const postID = 101;
            resolve(postID);
        }, 1000);
    });
}

function getCommentUserPost(postID) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const comment = `Comment for post ID: ${postID}`;
            resolve(comment);
        }, 1000);
    });
}

async function processUserData() {
    try {
        const data = "User data";
        const postID = await getUserPostID(data); 
        const comment = await getCommentUserPost(postID); 
        return[data,postID,comment];
        // console.log(comment); 
    } catch (err) {
        console.log(err); 
    }
}
Promise.all([getUserPostID(),getCommentUserPost()]).then((values)=>{
  console.log("all",values);
})
processUserData();
async function abc() {
    return "Hello abc"; 
}

abc().then("ASYNC",console.log); 

