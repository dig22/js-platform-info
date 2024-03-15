import { describe } from 'node:test';
import { PlatformInfo } from '../index';

describe('PlatformInfo', () => {
    it('Check for environment node', () => {
        expect(PlatformInfo.environment).toBe('node');
    });

    //TODO: other tests
});
