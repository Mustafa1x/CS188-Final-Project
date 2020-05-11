const {
    deleteItemByItemId,
    insertItem,
    selectItemByItemId,
    selectItems,
    updateItem
} = require('../repos/item-repository');

const mapToModel = (item) => ({
    description: item['description'],
    name: item['name'],
    itemId: item['item_id'],
    price: item['price']
});

const mapToDTO = (item) => ({
    'description': item.description,
    'name': item.name,
    'item_id': item.itemId,
    'price': item.price
});

const getAllItems = () => {
    const {rows} = selectItems();

    return rows.map(mapToModel);
};

const getItemByItemId = (itemId) => {
    const item = selectItemByItemId(itemId);

    if (!item) {
        return null;
    }

    return mapToModel(item);
};

const addItem = (item) => insertItem(mapToDTO(item));
const updateItem = (item) => updateItem(mapToDTO(item));
const removeItemByItemId = (itemId) => deleteItemByItemId(itemId);

module.exports = {
    addItem,
    getAllItems,
    getItemByItemId,
    updateItem,
    deleteItemByItemId
};