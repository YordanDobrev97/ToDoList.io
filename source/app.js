import controllers from './controllers/home.js';
import models  from './models/user.js';

const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', controllers.get.home);
    this.get('#/login', controllers.get.login);
    this.get('#/register', controllers.get.register);

    this.post('#/register', models.post.register);
    this.post('#/login', models.post.login);
});

(() => {
    app.run('#/');
})();