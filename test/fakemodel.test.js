'use strict';

const FakeModel = require('../lib/fakemodel.js');
const assert = require('assert');

describe('Fake model', () => {
    let model;
    beforeEach(() => {
        model = new FakeModel();
    });

    describe('list feature', () => {
        it('should list no items when empty db', () => {
            assert.strictEqual(model.list().length, 0, 'empty db and items founds');
        });

        it('should list present items', () => {
            model._db.foo = {};
            model._db.bar = {};
            model._db.foobar = {};
            assert.strictEqual(model.list().length, 3, 'expected three items after three additions');
        });
    });

    describe('insert feature', () => {
        it('should include the item added', () => {
            model.insert({});
            assert.strictEqual(Object.keys(model._db).length, 1, 'expected one item after one addition');
        });

        it('should include the item added with specific id', () => {
            model.insert({id: 'foo'});
            assert.strictEqual(Object.keys(model._db).length, 1, 'expected one item after one addition');
            const item = model._db['foo'];
            assert.strictEqual(item.id, 'foo', 'id is not foo');
        });
    });

    describe('get by id feature', () => {
        it('should return the item', () => {
            model._db[13] = { id: 13, name: 'hello' };
            model._db[23] = { id: 23, name: 'foo' };
            model._db[33] = { id: 33, name: 'bar' };
            const item = model.getById(23);
            assert.strictEqual(item.id, 23, 'wrong id returned');
            assert.strictEqual(item.name, 'foo', 'wrong item returned');
        });
    });

    describe('delete by id feature', () => {
        it('should delete the item', () => {
            model._db[13] = { id: 13, name: 'hello' };
            model._db[23] = { id: 23, name: 'foo' };
            model._db[33] = { id: 33, name: 'bar' };
            
            model.deleteById(23);
            assert.strictEqual(Object.keys(model._db).length, 2, 'incorrect number of items after deletion');
        });
    });

    describe('update by id feature', () => {
        it('should update the item', () => {
            model._db[13] = { id: 13, name: 'hello' };
            const item = model.updateById(13, { id: 13, name: 'goodbye' });
            assert.strictEqual(item.id, 13, 'wrong id returned');
            assert.strictEqual(item.name, 'goodbye', 'wrong content returned');
        });
    });
});
