/* global shoppingList, cuid */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach( (item) => store.addItem(item) );
    shoppingList.render();
  });
});


// api.createItem('pears', () => {
//   api.getItems((items) => {
//     console.log(items);   //
//   });
// });