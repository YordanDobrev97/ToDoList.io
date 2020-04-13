import models from '../models/notes.js';
import helper from '../utils/helper.js';

export default {
    get: {
        async home(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            context.isLogin = sessionStorage.getItem('id');
            context.email = sessionStorage.getItem('email');
            let data = await models.notes.getAll();
            data = data.docs.map(helper.getDataWithId);
            
            context.notes = data;
            context.partial('../views/home/home.hbs');    
            //context.notes = [1, 2, 3];
        },
        async login(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            context.partial('../views/user/login.hbs');
        },
        async register(context) {
            context.partials = {
                header: await context.load('../views/home/header.hbs'),
                footer: await context.load('../views/home/footer.hbs')
            }
            context.partial('../views/user/register.hbs');
        }
    }
}