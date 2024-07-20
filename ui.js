import { AuthErrorCodes } from 'firease/auth';

export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#btnLogout')

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lbAuthState')

export const divLoginError = document.querySelector('#divLogginError')
export const lblLoginErrorMessage = document.querySelector('lblLoginErrorMessage')

export const showLoginForm = () => {
	login.style.display ='block'
	app.style.display = 'none'
}
export const showApp = () => {
	login.style.display ='none'
	app.style.display = 'block'
}
export const hideLoginError = () => {
	divLoginError.style.display ='none'
	lblLoginErrorMessage.innerHTML = ''

}
export const showLoginError = (error) => {
	divLoginError.style.display ='block'
	if(error.code == AuthErrorCodes.INVALID_PASSWORD) {
		lblLoginErrorMessage.innerHTML = 'Wrong Password, try again.'
	}
	else {
		lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
	}
	
}
export const showLoginState = (user) => {
	lbAuthState.innerHTML = `You are login as ${user.displayName} (uid: ${user.id}, email: ${user.email}`
}
