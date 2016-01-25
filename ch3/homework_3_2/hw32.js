var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

    console.log("Successfully connected to MongoDB.");
    
    var query = {};

    var cursor = db.collection('grades').find(query);
    cursor.skip(6);
    cursor.limit(2);
    cursor.sort({'grade': 1});
        
    cursor.toArray(function(err, docs) {
        
        docs.forEach(function(doc) {
            console.log( doc );
        });
        
        db.close();
        
    });   
 
});
