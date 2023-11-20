#!/usr/bin/env node
const {readFile, writeFile} = require('fs');
const path = 'package.json';

readFile(path, (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    const parsedData = JSON.parse(data);

    delete parsedData.files;
    delete parsedData.dependencies;
    delete parsedData.devDependencies;

    parsedData.browser = 'index.html';
    parsedData.scripts = {};

    writeFile(`dist/${path}`, JSON.stringify(parsedData, null, 4), err => {
        if (err) {
            console.log('Failed to write updated data to file');
        }
    });
});
