import notification from '../utils/notification.js';
import notes from './notes.js';

export default {
    get: {
        logout(context) {
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('email');
            context.redirect('#/');
        },
        async create(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            //extract function
            context.isLogin = sessionStorage.getItem('id');
            context.email = sessionStorage.getItem('email');

            context.partial('../views/user/create.hbs');
        }
    },

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
        },
        create(context) {
            const {title, content} = context.params;
            const userId = sessionStorage.getItem('id');
            const data = {
                title,
                content,
                userId
            };

            notes.notes.create(data);
            context.redirect('#/');
        }
    }
}