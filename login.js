const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const loginFrom = document.getElementById('loginForm');


loginButton.addEventListener('click',function(e){
  e.preventDefault()
  const loginemail = loginEmail.value
  const loginpassword = loginPassword.value
  let loggedIn = false
  console.log(userDb)
  const dblength =  userDb.length;
  for(let i = 0; i < dblength; i++){
    if(userDb[i].email === loginemail && userDb[i].password === loginpassword){
      loggedIn = true
      loggedInUserId = userDb[i].id
      sessionStorage.setItem('loggedInUserId',JSON.stringify(loggedInUserId))
      userDb[i].userCode = Math.random().toString(32).slice(2)
      loggedInUserCode = userDb[i].userCode
      sessionStorage.setItem('loggedInUserCode',JSON.stringify(loggedInUserCode))
      alert("Login successful")
      window.location.href = 'userdash.html'
    }
  }
   showMessage('Wrong Email or Password please try again','red') 
})
