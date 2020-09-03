// ===============Callback example===============

// function printQuote(quote) {
//     console.log(quote);
// }

// function complementQuote(newQuote, callback) {
//     finalQuote = "Aristotles once said: " + ' ' + newQuote;
//     callback(finalQuote);
// }

// complementQuote('Dura lex, sed Lex', printQuote);


// ||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||

// ===============Promise example===============

// // callback form
// firstRequest(function(response) {  
//     secondRequest(response, function(nextResponse) {    
//         thirdRequest(nextResponse, function(finalResponse) {     
//             console.log('Final response: ' + finalResponse);    
//         }, failureCallback);  
//     }, failureCallback);
// }, failureCallback);

// // promise form
// firstRequest()
//   .then(function(response) {
//     return secondRequest(response);
// }).then(function(nextResponse) {  
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse) {  
//     console.log('Final response: ' + finalResponse);
// }).catch(failureCallback); 

// ||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||

// ===============Async Function example===============

// firstRequest()
//   .then(function(response) {
//     return secondRequest(response);
// }).then(function(nextResponse) {  
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse) {  
//     console.log('Final response: ' + finalResponse);
// }).catch(failureCallback); 

// async function firstRequest() {
//     const firstResponse = await function(response) {};
//     const secondRequest = await function(firstResponse) {};
//     const secondResponse = await function(secondRequest) {};
//     const thirdRequest = await function(secondResponse) {};
//     const finalResponse = await function(thirdRequest) {
//         console.log('Final Response');
//     };
// }