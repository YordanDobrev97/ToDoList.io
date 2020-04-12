import notification from '../utils/notification.js';

export default {
    get: {
        register(context) {
           const {username, password,  repeatPassword} = context.params;
           
           if (password != repeatPassword) {
               notification.error('The passwords do not match');
               return;
           }
           firebase.auth().createUserWithEmailAndPassword(username, password);
           notification.success('Successful registration');
        }
    }
}