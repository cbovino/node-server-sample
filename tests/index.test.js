const request = require('supertest');
const app = require('../main');

var server;

beforeAll(() => {
    // Start the server before tests
    server = app.listen(4000); // Or use the port your app listens on
});

afterAll(async () => {
    // Close the server to stop async operations
    await server.close();
});

describe('GET /', () => {
    it('should return 200 and valid: true when auth header is present', async () => {
        const response = await request(app)
            .get('/hello-world')
            .set('auth', 'some-value');
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ valid: true });
    });

    it('should return 404 when auth header is missing', async () => {
        const response = await request(app).get('/hello-world');
        
        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('Not Found');
    });
});