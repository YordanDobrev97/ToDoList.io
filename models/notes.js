export default {
    notes: {
        create(data) {
            return firebase.firestore().collection('notes').add(data);
        },
        getAll() {
            return firebase.firestore().collection('notes').get();
        }
    }
}