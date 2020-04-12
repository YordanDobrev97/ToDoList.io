import controllers from './controllers/home.js';
import models  from './models/notes.js';

const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', controllers.get.home);
    this.get('#/login', controllers.get.login);
    this.get('#/register', controllers.get.register);

    this.post('#/register', models.get.register);
});

(() => {
    app.run('#/');
})();