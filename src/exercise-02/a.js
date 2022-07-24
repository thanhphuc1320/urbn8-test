
api().then(function(result){ console.log('result: ', result); return api2();
}).then(function(result2){ console.log('result2: ', result2); return api3();
}).then(function(result3){ 
    console.log('result3: ', result3)
});

api(1);
api2(2);
api3(3);