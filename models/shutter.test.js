const shutter = require('./shutter');
const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const global = db.collection('ShutterSchema');

    const mockSchema = {_id: 'some-id', title: 'some-title', location: 'some-location', description: 'some-description'};
    await global.insertOne(mockSchema);

    const insertedSchema = await global.findOne({_id: 'some-id'});
    expect(insertedSchema).toEqual(mockSchema);
  });
});