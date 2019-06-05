
importScripts('./dependency/require.js');

/*
* Script for parsing large csv files
* Web Worker
*/


requirejs.config({
  baseUrl: './dependency/'
});

requirejs(
    ["require", "pako.min"],
    (require, pako) => {
    function messageHandler(event){ 
        let data1 = pako.gzip("dasastaa");
        
        let data = 1;
        for(let i = 1; i < event.data.value; i++){
            data*=i;
        }
        postMessage({message: data, gzip: data1})
    }

    self.onmessage = messageHandler;
});

