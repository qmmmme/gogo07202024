
    import { initializeApp } from 'firebase/app';
    // "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
    import { getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        onAuthStateChanged,
        signOut } from './node_module/firebase/auth';
    // "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
    // import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
    // import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
    // import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
    // import { signOut } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
       
     
    const txtEmail = document.querySelector('#txtEmail')
    const txtPassword = document.querySelector('#txtPassword')
    const btnLogin = document.querySelector('#btnLogin')
    const btnSignup = document.querySelector('#btnSignup')
    const btnLogout = document.querySelector('#btnLogout')

    const login = document.querySelector('#login')
    const app = document.querySelector('#app')

    const divAuthState = document.querySelector('#divAuthState')
    const lblAuthState = document.querySelector('#lbAuthState')

    const divLoginError = document.querySelector('#divLogginError')
    const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

    const showLoginForm = () => {
        login.style.display ='block'
        app.style.display = 'none'
    }
    const showApp = () => {
        login.style.display ='none'
        app.style.display = 'block'
    }
    const hideLoginError = () => {
        divLoginError.style.display ='none'
        lblLoginErrorMessage.innerHTML = ''

    }
    const showLoginError = (error) => {
        divLoginError.style.display ='block'
        if(error.code == AuthErrorCodes.INVALID_PASSWORD) {
            lblLoginErrorMessage.innerHTML = 'Wrong Password, try again.'
        }
        else {
            lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
        }
    
    }
    const showLoginState = (user) => {
        lbAuthState.innerHTML = `You are login as ${user.displayName} (uid: ${user.id}, email: ${user.email}`
    }

                    
    const firebaseConfig = {
        apiKey: "AIzaSyDrorYAMNWPUYwLni9GcwbFFlPqCElWRCE",
        authDomain: "go-go-31591.firebaseapp.com",
        projectId: "go-go-31591",
        storageBucket: "go-go-31591.appspot.com",
        messagingSenderId: "470863027693",
        appId: "1:470863027693:web:5ec21c4427b5b9d42a9be4",
        measurementId: "G-SH5H2TEHX7"
    };

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);
    const loginEmailAndPassword = async() => {
        console.log("we come here ... ")
        const userCredential = await signInWithEmailAndPassword(auth, txtEmail, txtPassword)
            .then((userCredential) => {
            // Signed in 
            console.log("We are signed in ")
                const user = userCredential.user;
                                 // ...
                })
            .catch((error) => {
                console.log("There was an error")
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        console.log("We come to an end .. ")
    }    
    const createAccount = async() => {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }      
    const monitorAuthState = async() => { 
        onAuthStateChanged(auth, user => { 
            if(user) {
                console.log("user");
                // showApp();
                // showLoginState(user);
                // hideLoginError();
            }
            else{
                // showLoginForm();
                // lblAuthState.innerHTML = "You are not logged i .";
                console.log("No user")
            }
	   });
    }    
    const logout = async () => {
    await signOut(auth);
    }
    btnLogin.addEventListener("click", loginEmailAndPassword);
    btnSignup.addEventListener("Click", createAccount);
    btnLogout.addEventListener("Click", signOut);      
// import "./styles.css"
// import {
// 	hideLoginError,
// 	showLoginState,
// 	showLoginForm,
// 	showApp,
// 	showLoginError,
// 	btnLogin,
// 	btnSignup,
// 	btnLogout,
// 	txtEmail,
// 	txtPassword
// } from './ui'
//  import { initializeApp } from 'firebase/app';
//  import {
//  	getAuth,
//  	connectAuthEmulator,
//  	signInWithEmailAndPassword
//  	createUserWithEmailAndPassword
//  	onAuthStateChanged
//  	signOut
//  } from 'firebase/auth';
//  const firebaseApp = initializeApp({
//     apiKey: "AIzaSyDrorYAMNWPUYwLni9GcwbFFlPqCElWRCE",
//     authDomain: "go-go-31591.firebaseapp.com",
//     projectId: "go-go-31591",
//     storageBucket: "go-go-31591.appspot.com",
//     messagingSenderId: "470863027693",
//     appId: "1:470863027693:web:5ec21c4427b5b9d42a9be4",
//     measurementId: "G-SH5H2TEHX7"
//  });
// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");//by the fault

// const loginEmailPassword = async () => {
// 	const loginEmail = txtEmail.value;
// 	const loginPassword = txtPassword.value;

// 	try {
// 	const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
// 	console.log(userCredential.user);
// 	}
// 	catch {
// 		console.log(error);
// 		showLoginError(error);
// 	}
// }
// //running emulator: firebase emulators: start -- only auth 
// btnLogin.addEventListener("click", loginEmailPassword);

// const createAccount = async () => {
// 	const loginEmail = txtEmail.value;
// 	const loginPassword = txtPassword.value;

// 	try {
// 	const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
// 		console.log(userCredential.user);
// 	}
// 	catch {
// 		console.log(error);
// 		showLoginError(error);
// 	}
// }
// btnSignup.addEventListener("Click", createAccount);
// const monitorAuthState = async () => {
// 	onAuthStateChanged(auth, user => { 
// 		if(user) {
// 			console.log(user);
// 			showApp();
// 			showLoginState(user);
// 			hideLoginError();
// 		}
// 		else{
// 			showLoginForm();
// 			lblAuthState.innerHTML = "You are not logged i .";
// 		}
// 	});
// }
// monitorAuthState();
// const logout = async () => {
// 	await signOut(auth);
// }
// btnLogout.addEventListener("Click", signOut);