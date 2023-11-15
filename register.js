const registrationForm = document.getElementById("registrationPageForm");
const registrationEmail = document.getElementById("registrationEmail");
const registrationName = document.getElementById("registrationName");
const registrationPassword = document.getElementById("registrationPassword");
const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  const name = registrationName.value;
  const email = registrationEmail.value;
  const password = registrationPassword.value;
  let registered = false;

  let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let passResult = passRegex.test(password);
  let result = emailRegex.test(email);
  if (!result) {
    showMessage("Email is not valid", "red");
    return false;
  } else if (!passResult) {
    showMessage("weak password", "red");
    return false;
  } else {
    const user = {
      id: 0,
      name: name,
      email: email,
      password: password,
      userCode: Math.random().toString(32).slice(2),
    };

    // check if user already exist in userDb
    if (userDb.length != 0) {
      userDb.forEach((user) => {
        if (user.email === email) {
          showMessage("User already registered", "red");
          registered = true;
          return false;
        }
      });
    }

    // check if user already exist in userDb
    adminDb.forEach((user) => {
      if (user.email === email) {
        showMessage("User already registered", "red");
        registered = true;
        return false;
      }
    });

    if (registered == false) {
      userDb.push(user);
      localStorage.setItem("user", JSON.stringify(userDb));

      if (userDb.length == 1) {
        userDb[userDb.length - 1].id = 1;
      } else {
        let hold = userDb[userDb.length - 2].id;
        hold++;
        userDb[userDb.length - 1].id = hold;
      }
      alert("User created");
      localStorage.setItem("user", JSON.stringify(userDb));

      location.href = 'login.html'
    }
  }
});