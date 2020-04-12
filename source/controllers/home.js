export default {
    get: {
        async home(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs')
            }
            context.partial('../views/home/home.hbs');
        }
    }
}