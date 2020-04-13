export default {
    notes: {
        create(data) {
            return firebase.firestore().collection('notes').add(data);
        }
    }
}