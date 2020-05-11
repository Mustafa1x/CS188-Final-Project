const {
    getAllItems,
    getItemByItemId,
    addItem,
    updateItem,
    deleteItemByItemId
} = require('../services/item-service');

const getItems = (server) => {
    server.get('/items', (req, res, next) => {
        res.send(200, getAllItems());
        return next();
    })
};

const getItemsByItemId = (server) => {
    server.get('/items/:itemId', (req, res, next) => {
        try {
            const item = getItemByItemId(req.params.itemId);
            res.send(200, item);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addItems = (server) => {
    server.post('/items', (req, res, next) => {
        const item = req.params;
        addItem(item);
        res.send(201);
        return next();
    })
};

const updateItemroute = (server) => {
    server.put('/items/:itemId', (req, res, next) => {
        updateItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteItem = (server) => {
    server.del('/items/:itemId', (req, res, next) => {
        removeItemByItemId(req.params.itemId);
        res.send(204);
        return next();
    })
};

const initItemControllers = (server) => {
    getItems(server);
    getItemByItemId(server);
    addItems(server);
    updateItemroute(server);
    deleteItem(server);
};

module.exports = {
    initItemControllers
};