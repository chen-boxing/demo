var API = (function () {
  const BASE_URL = "https://study.duyiedu.com";

  async function get(url) {
    var token = localStorage.getItem("Token");
    var headers = {};
    if (token) {
      headers.authorization = c;
    }

    return await fetch(BASE_URL + url, { headers });
  }
  async function post(url, bodys) {
    var obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodys),
    };
    var token = localStorage.getItem("Token");
    if (token) {
      obj.headers.authorization = `Bearer ${token}`;
    }
    return await fetch(BASE_URL + url, obj);
  }

  async function login(bodys) {
    var data = await post("/api/user/login", bodys);
    var reg = await data.json();
    if (reg.code == 0) {
      const taken = data.headers.get("authorization");
      localStorage.setItem("Token", taken);
    }
    return reg;
  }

  async function profile() {
    var data = await get("/api/user/profile");
    return await data.json();
  }

  async function sendMessage(text) {
    var text = text;
    var data = await fetch(`https://developer.duyiedu.com/edu/turing/chat?text=${text}`);
    return await data.json();
  }
  return {
    login,
    profile,
    sendMessage,
  };
})();
