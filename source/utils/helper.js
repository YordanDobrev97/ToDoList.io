export default {
    getDataWithId(d) {
        return {...d.data(), id: d.id};
    }
}