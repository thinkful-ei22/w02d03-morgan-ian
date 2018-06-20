'use strict';

const api = (function(){
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/ian";
  
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };


  const createItem = function(name, callback, errCallback){
    let newItem = JSON.stringify({ name: name,});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: errCallback
    });
  };

  const updateItem = function(id, updateData, callback, errCallback){
    $.ajax({
        url: `${BASE_URL}/items/${id}`,
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(updateData),
        success: callback,
        error: errCallback
    })
  }

  const deleteItem = function(id, callback){
    $.ajax({
        url: `${BASE_URL}/items/${id}`,
        method: 'DELETE',
        contentType: 'application/json',
        success: callback
    })
  }


  return {
    getItems, createItem, updateItem, deleteItem
  };
}());