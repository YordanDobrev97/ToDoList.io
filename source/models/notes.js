export default {
    get: {
        register(context) {
           const {username, password,  repeatPassword} = context.params;
           
           if (password != repeatPassword) {
               //TODO.. add notifications
               return;
           }
           firebase.auth().createUserWithEmailAndPassword(username, password);
        }
    }
}