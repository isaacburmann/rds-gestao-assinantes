var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var EMPRESAS_COLLECTION = "empresas";
var PRODUTOS_COLLECTION = "produtos";
var ASSINATURAS_COLLECTION = "assinaturas";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

//For running locally only
var MONGO_URI = "mongodb://heroku_j0k144n5:ge6buss098frbfnnv4ulbcesjk@ds243798.mlab.com:43798/heroku_j0k144n5"
app.use(cors());

//For running on Heroku
//var MONGO_URI = process.env.MONGODB_URI

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(MONGO_URI, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

// EMPRESAS API ROUTES BELOW

/*  "/api/empresas"
 *    GET: finds all empresas
 *    POST: creates a new empresa
 */

app.get("/api/empresas", function(req, res) {
    db.collection(EMPRESAS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get empresas.");
        } else {
            res.status(200).json(docs);
        }
    });
});


app.get("/api/empresas/assinantes", function(req, res) {
    db.collection(EMPRESAS_COLLECTION).find({assinante: true}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get empresas.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.get("/api/empresas/pagantes", function(req, res) {
    db.collection(EMPRESAS_COLLECTION).find({pagadora: true}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get empresas.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/empresas", function(req, res) {
    var newEmpresa = req.body;

    if (!req.body.nome) {
        handleError(res, "Invalid user input", "Must provide a name.", 400);
    }

    db.collection(EMPRESAS_COLLECTION).insertOne(newEmpresa, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new empresa.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

/*  "/api/empresas/:id"
 *    GET: find empresa by id
 *    PUT: update empresa by id
 *    DELETE: deletes empresa by id
 */

app.get("/api/empresas/:id", function(req, res) {
    db.collection(EMPRESAS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get empresa");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put("/api/empresas/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(EMPRESAS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update empresa");
        } else {
            updateDoc._id = req.params.id;
            res.status(200).json(updateDoc);
        }
    });
});

app.delete("/api/empresas/:id", function(req, res) {
    db.collection(EMPRESAS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete empresa");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});


// PRODUTOS API ROUTES BELOW

/*  "/api/produtos"
 *    GET: finds all produtos
 *    POST: creates a new produto
 */

app.get("/api/produtos", function(req, res) {
    db.collection(PRODUTOS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get produtos.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/produtos", function(req, res) {
    var newProduto = req.body;

    if (!req.body.nome) {
        handleError(res, "Invalid user input", "Must provide a name.", 400);
    }

    db.collection(PRODUTOS_COLLECTION).insertOne(newProduto, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new produto.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

/*  "/api/produtos/:id"
 *    GET: find produto by id
 *    PUT: update produto by id
 *    DELETE: deletes produto by id
 */

app.get("/api/produtos/:id", function(req, res) {
    db.collection(PRODUTOS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get produto");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put("/api/produtos/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(PRODUTOS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update produto");
        } else {
            updateDoc._id = req.params.id;
            res.status(200).json(updateDoc);
        }
    });
});

app.delete("/api/produtos/:id", function(req, res) {
    db.collection(PRODUTOS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete produto");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});

// ASSINATURAS API ROUTES BELOW

/*  "/api/assinaturas"
 *    GET: finds all assinaturas
 *    POST: creates a new assinatura
 */

app.get("/api/assinaturas", function(req, res) {
    db.collection(ASSINATURAS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get assinaturas.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/assinaturas", function(req, res) {
    var newAssinatura = req.body;

    db.collection(ASSINATURAS_COLLECTION).insertOne(newAssinatura, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new assinatura.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

/*  "/api/assinaturas/:id"
 *    GET: find assinatura by id
 *    PUT: update assinatura by id
 *    DELETE: deletes assinatura by id
 */

app.get("/api/assinaturas/:id", function(req, res) {
    db.collection(ASSINATURAS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get assinatura");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put("/api/assinaturas/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(ASSINATURAS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update assinatura");
        } else {
            updateDoc._id = req.params.id;
            res.status(200).json(updateDoc);
        }
    });
});

app.delete("/api/assinaturas/:id", function(req, res) {
    db.collection(ASSINATURAS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete assinatura");
        } else {
            res.status(200).json(req.params.id);
        }
    });
});