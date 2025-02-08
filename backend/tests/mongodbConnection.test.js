// backend/tests/mongodbConnection.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('MongoDB Connection', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should connect to MongoDB', async () => {
    expect(mongoose.connection.readyState).toBe(1); // 1 means connected
  });
});