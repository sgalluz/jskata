const jsdom = require('jsdom');

const dom = new jsdom.JSDOM(`<html><body></body></html>`, { url: 'http://localhost' });

global.window = dom.window;
global.document = dom.window.document;
