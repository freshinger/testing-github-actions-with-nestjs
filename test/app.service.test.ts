import { AppService } from "../src/services/app.service";

describe('App Service Test', () => {
    test('output', () => {
        const service = new AppService();
        expect(service.generateMessage()).toBe('Hello World');
    });
});