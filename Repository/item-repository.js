let items = [
  {
    'description': 'Drake Sweatshirt',
    'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
    'price': 40
  }
];

const selectItems = () => ({
rows: items
});

const selectItemByItemId = (itemId) =>
items.find((item) => item['item_id'] === itemId);

const insertItem = (item) => items.push(item);

const updateItem = (updatedItem) => {
const itemsDontMatch = items.filter((item) =>
item['item_id'] !== updatedItem['item_id']
);

items = [
...itemsThatDontMatch,
updatedItem
];
};

const deleteItemByItemId = (itemId) => {
items = items.filter((item) =>
item['item_id'] !== itemId
);
};

module.exports = {
deleteItemByItemId,
insertItem,
selectItemByItemId,
selectItems,
updateItem
};