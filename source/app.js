import controllers from './controllers/home.js';

const app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', controllers.get.home);
});

(() => {
    app.run('#/');
})();