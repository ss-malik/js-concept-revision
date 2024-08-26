// console.log("start");

// function Action (){
//     setTimeout(()=>{
//         return 5
//     }, 500 )
// }

// let message = Action();
// console.log(message);

// console.log("finish");

// promise

// let vaada = new Promise((res,rej)=>{
//     let hasEaten = false;
//     setTimeout(()=>{
//         if (hasEaten)  res("can Play")
//         else rej("Eat first then Play");
//     },500)

// })

// vaada
// .then(ans=>console.log(ans))
// .catch(err=>console.log(err)
// );

// console.log("start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let result = true;
//         if(result) resolve("Resolved")
//         else reject( new Error("it's an Error")
//         )
//     }, 500);
// })

// console.log(sub);

// sub.then(ans=>console.log(ans)
// ).catch(err=>console.log(err)
// )

// console.log("finish");

function action(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${userName}`);
    }, 600);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like this ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share this ${video} video.`);
    }, 1500);
  });
}

// action("Roadside Coder")
//   .then((ans) => {
//     console.log(ans);
//     likeTheVideo("javaScript async part")
//       .then((ans) => {
//         console.log(ans);
//         shareTheVideo("javaScript async part").then((ans) => {
//           console.log(ans).catch((err) => console.log(err));
//         });
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

//   promise chaining

// action("roadSide Coder")
//   .then((ans) => {
//     console.log(ans);
//     return likeTheVideo("js async part");
//   })
//   .then((ans) => {
//     console.log(ans);
//     return shareTheVideo("js async part");
//   })
//   .then((ans) => {
//     console.log(ans);
//   });

// action("roadSide Coder");
// likeTheVideo("js async part");
// shareTheVideo("js async part");

//   promise combinator

// Promise.all([
//   action("roadSide Coder"),
//   likeTheVideo("js async part"),
//   shareTheVideo("js async part"),
// ])
//   .then((ans) => {
//     console.log(ans);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Make maggi

const addWaterandMasalla = () => {
  return new Promise((resolve, reject) => {
    const addWater = true;
    setTimeout(() => {
      if (addWater) {
        resolve("water is boiling with masala.");
      } else {
        reject("water is not available");
      }
    }, 1000);
  });
};

const addNoodles = () => {
  return new Promise((resolve, reject) => {
    const addnoodle = false;
    setTimeout(() => {
      if (addnoodle) {
        resolve("Add noodle in boiling mixture");
      } else {
        reject("noodle is not present");
      }
    }, 2000);
  });
};

const addmagicMasala = () => {
  return new Promise((resolve, reject) => {
    const addmagicmasala = true;
    setTimeout(() => {
      if (addmagicmasala) {
        resolve("Add magic masala and stir.");
      } else {
        reject("Not Available");
      }
    }, 2500);
  });
};

const makeNoodles = async () => {
  try {
    const stepOne = await addWaterandMasalla();
    console.log(stepOne);

    const stepTwo = await addNoodles();
    console.log(stepTwo);
    const stephree = await addmagicMasala();
    console.log(stephree);

    console.log("Enjy Your Maggi");
  } catch (error) {
    console.log(error);
  }
};

// makeNoodles();

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
