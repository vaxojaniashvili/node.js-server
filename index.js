// const fs = require("fs");

// const { read } = require("fs");

// const { write, read } = require("fs");

// fs.readFile("./start.txt", "utf-8", (err, nextFileName) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.readFile(`${nextFileName}.txt`, "utf-8", (err, result) => {
//       console.log("result is => ", result);
//     });
//   }
// });

// const fs = require("fs").promises;

// async function main() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fs.readFile("./data.json", "utf-8", (err, data) => {
//           const parsedData = JSON.parse(data);
//           if (err) {
//             console.log(err);
//           }
//           const findUser = parsedData.find((user) => user.id === 3);
//           console.log(findUser);
//           // fs.unlink("./data.json", (err) => {
//           //   if (err) {
//           //     console.log(err);
//           //   } else {
//           //     console.log("deleted success");
//           //   }
//           // });
//         });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// fs.appendFile("text.txt", "Hello world", (error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("success");
//   }
// });

// fs.appendFile("text.txt", "Hello world ==--->")
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("oops,Error");
//   });

// const createFile = async () => {
//   try {
//     await fs.writeFile("text.txt", "Hello World");
//     console.log("Success");
//   } catch (error) {
//     console.log("Error");
//   }
// };
// createFile();
// console.log(123);

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const readFile = async () => {
//   try {
//      fs.readFile("text.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

// readFile();

// fs.rename("newText.txt", "text.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// if (!fs.existsSync("assets")) {
//   fs.mkdir("assets", { recursive: false }, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Success");
//     }
//   });
// }

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile(`${data}.txt`, "Hello World", (error) => {
//       if (error) {
//         console.log(err);
//       } else {
//         fs.readFile(`${data}.txt`, "utf-8", (err, res) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("result is ==>", res);
//           }
//         });
//       }
//     });
//   }
// });

// const writeFileFileHardCode = async (note) => {
//   try {
//     fs.readFile("text.txt", "utf-8").then((res) => {
//       fs.writeFile(`${res}.txt`, note).then(() => {
//         fs.readFile(`${res}.txt`, "utf-8")
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// writeFileFileHardCode("guja");

// const writeFile = async (note) => {
//   try {
//     fs.writeFile("text.txt", note);
//     console.log("note created successfully");
//     console.log("note is ==>", note);
//   } catch (error) {
//     console.log(error);
//   }
// };
// writeFile("Hello gela");

// const readFile = async (note) => {
//   try {
//     fs.readFile("text.txt", "utf-8")
//       .then((data) => {
//         fs.writeFile(`${data}.txt`, note).then(() => {
//           fs.readFile(`${data}.txt`, "utf-8")
//             .then((result) => {
//               console.log(result);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
// readFile("vaxovaxo123");

// import fetch from "node-fetch";
// import fs from "fs";

// const readFile = async () => {
//   try {
//     fs.readFile("text.txt", "utf-8")
//       .then((data) => {
//         console.log(`Data is ==> ${data}`);
//       })
//       .catch(() => {
//         console.log("Data is undefined");
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// readFile();


