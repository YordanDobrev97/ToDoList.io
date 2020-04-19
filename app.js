import controllers from './controllers/home.js';
import models  from './models/user.js';

const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', controllers.get.home);
    this.get('#/login', controllers.get.login);
    this.get('#/register', controllers.get.register);
    this.get('#/completed', controllers.get.completed);
    this.get('#/upcoming', controllers.get.upcoming);
    this.get('#/logout', models.get.logout);
    this.get('#/create', models.get.create);
   

    this.post('#/register', models.post.register);
    this.post('#/login', models.post.login);
    this.post('#/create', models.post.create);
});

(() => {
    app.run('#/');
})();