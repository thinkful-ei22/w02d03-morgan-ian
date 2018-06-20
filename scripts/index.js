/* global shoppingList, cuid */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((responseItems) => {
    responseItems.forEach( (responseItem) => store.addItem(responseItem) );
    shoppingList.render();
  });
});


// api.createItem('pears', () => {
//   api.getItems((items) => {
//     console.log(items);   //
//   });
// });

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// });