export default {
    get: {
        async home(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            context.partial('../views/home/home.hbs');
        },
        async login(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            context.partial('../views/user/login.hbs');
        }
    }
}