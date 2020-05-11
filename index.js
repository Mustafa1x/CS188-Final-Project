const restify = require('restify');

const port = 5555;

const {initCartItemControllers} = require('./controllers/cart-item-controller');

const {initCartControllers} = require('./controllers/cart-controller');

const {initItemControllers} = require('./controllers/item-controller');

const {initCustomerControllers} = require('./controllers/customer-controller');

const server = restify.createServer({
    name: 'Server'
});

server.pre((req, res, next) => {
    console.info('%s - %s', req.method, req.url);
    return next();
});

server.use(restify.plugins.bodyParser({mapParams: true}));

CartItemControllers(server);

CartControllers(server);

ItemControllers(server);

CustomerControllers(server);


server.listen(port, () => {
	
    console.info('%s looking forport %s', server.name, port);

});