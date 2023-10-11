require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('colors')
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');
const api = require('./api');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/api/', api);

if (process.env.NODE_ENV === 'production'){

    app.use(express.static(path.join(__dirname, '/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/build/index.html'))
    });
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-stack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(connection => console.log("Connected to"), colors.blue(`MongoDB`));

app.use('/api/graphql', graphqlHTTP({
  schema: new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'Hello, GraphQL!';
          },
        },
      },
    }),
  }),
  graphiql: true,
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port`, colors.blue(`${PORT}`));
});