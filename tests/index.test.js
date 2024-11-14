const request = require('supertest');
const app = require('../index');

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