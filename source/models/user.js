import notification from '../utils/notification.js';

export default {
    post: {
        register(context) {
           const {username, password,  repeatPassword} = context.params;
           
           if (password != repeatPassword) {
               notification.error('The passwords do not match');
               return;
           }
           firebase.auth().createUserWithEmailAndPassword(username, password);
           notification.success('Successful registration');

           setTimeout(() => {
             context.redirect('#/login');
           }, 2000);
        },
        login(context) {
            const {username, password } = context.params;
            firebase.auth().signInWithEmailAndPassword(username, password)
                .then(userObject => {
                    const email = userObject.user.email;
                    const id = userObject.user.uid;
                    console.log(email, id);
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('id', id);
                    notification.success('Successful logged');
        
                    setTimeout(() => {
                        context.redirect('#/');
                    }, 2000);
                });
        }
    }
}