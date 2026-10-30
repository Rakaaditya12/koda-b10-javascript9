const URL = "https://jsonplaceholder.typicode.com/users";

// with built-in method
function BuiltIn(users) {
  let res = [];
  for (let i = 0; i < users.length; i++) {
    const getEmail = users[i].email;

    res[i] = getEmail.toLowerCase();
  }

  return res;
}

// without built-in method
function NoBuiltIn(str) {
  const huruf = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
  };

  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (typeof huruf[char] !== "undefined") {
      res += huruf[char];
    }

    res += char;
  }

  return res;
}

// fetch dengan then - catch
fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log("built-in method dengan then-catch");
    console.log(BuiltIn(res));

    console.log("tanpa built-in method dengan then-catch");
    let hasil = [];

    for (let i = 0; i < res.length; i++) {
      const user = res[i];

      hasil[hasil.length] = NoBuiltIn(user.email);
    }

    console.log(hasil);
  })
  .catch((err) => {
    console.log(err.message);
  });

// fetch dengan async await
async function fetchUrl() {
  try {
    const getUrl = await fetch(URL);
    const resUrl = await getUrl.json();

    console.log("built-in method dengan async-await");
    console.log(BuiltIn(resUrl));

    let hasil = [];

    for (let i = 0; i < resUrl.length; i++) {
      const user = resUrl[i];

      hasil[hasil.length] = NoBuiltIn(user.email);
    }

    console.log("tanpa built-in method dengan async-await");
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
}
fetchUrl();
