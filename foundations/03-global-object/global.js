#!/usr/bin/env node

var ver = process;

var {versions: {v8: v8V}, versions: {node: nodeV}} = ver

getVersions = () => {
    console.log(`Node.js version: v${nodeV}\nV8 version: v${v8V}`);
    }
getVersions();