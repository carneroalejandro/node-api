import {
    addNewItem,
    getItems,
    getItemWithID,
    updateItem,
    deleteItem
} from '../controllers/apiController';

const routes = (app) => {
    app.route('/item')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getItems)

        // POST endpoint
        .post(addNewItem);

        app.route('/item/:itemId')
        // get specific item
        .get(getItemWithID)
        
        // put request
        .put(updateItem)
    
        // delete request
        .delete(deleteItem);
    }
    
    export default routes;
    