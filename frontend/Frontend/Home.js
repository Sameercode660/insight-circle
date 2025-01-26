const getStartedButton = document.querySelector('.get-started')
const loginButton = document.querySelector('.btn-login')
const signupButton = document.querySelector('.btn-signup')

if(localStorage.getItem('login') == 'true') {
    loginButton.innerHTML = localStorage.getItem('name').toUpperCase()
    signupButton.innerHTML = 'Log Out'
} else {
    loginButton.innerHTML = "Login"
    signupButton.innerHTML = "Sign Up"
}

signupButton.addEventListener('click', () => {
    if(signupButton.innerHTML == 'Log Out') {
        localStorage.setItem('login', "false")
    }
})

loginButton.addEventListener('click', () => {
    if(loginButton.innerHTML != "Login") {
        window.location.href = './user/Profile.html'
    } else {
        window.location.href = './Auth/Login.html'
    }
})

getStartedButton.addEventListener("click", () => {
    if(localStorage.getItem('login') == "true") {
        window.location.href = './M-Services/mentorlist.html'
    } else {
        window.location.href = './Auth/Login.html'
    }
})