// const http = require('http');

// const url = require('url');

// const PORT = 4000

// var DATABASE = [
//     {
//         id : 1,
//         name : "Bhilai",
//         adventurePlaces : 0        
//     },
//     {
//         id : 2,
//         name : "Mumbai",
//         adventurePlaces : 10       
//     },
//     {
//         id : 3,
//         name : "Delhi",
//         adventurePlaces : 8      
//     }
// ]

// const serverHandler = (request, response)=>{

//     const {url : request_url, method} = request // we are getting url and method

//     const { pathname, query } = url.parse(request_url, true)


//     if(pathname==="/cities" && method==="GET"){

//         response.writeHead(200, {'Content-Type' : 'application/json'})

//         const result = {
//             success : true,
//             data : DATABASE
//         }

//         response.end(JSON.stringify(result))

//     }else if(pathname==="/cities/add" && method==="POST"){

//         let body = "";

//         request.on("data", (chunk)=>{
//             body+=chunk.toString()
//         })

//         request.on("end", ()=>{

//             const REQUEST_PAYLOAD = JSON.parse(body)

//             console.log(REQUEST_PAYLOAD)

//             const { name, adventurePlaces } = REQUEST_PAYLOAD

//             DATABASE.push({
//                 id : DATABASE.length + 1,
//                 name,
//                 adventurePlaces
//             })

//             response.writeHead(201, {'Content-Type' : 'application/json'})

//             const result = {
//                 success : true,
//             }

//             response.end(JSON.stringify(result))


//         })

//     }else if(pathname==="/cities/update" && method==="PUT"){

//         const { id } = query;

        

//     }else if(pathname==="/cities/delete" && method==="DELETE"){

//         const { id } = query;

//         if(!id){
//             response.writeHead(400, {'Content-Type' : 'application/json'})
//             const result = {
//                 success : false,
//                 message : "Invalid ID"
//             }
//             response.end(JSON.stringify(result))
//         }

//         const cityIndex = DATABASE.findIndex((element) => {
//             return element.id == id;
//         })

//         DATABASE.splice(cityIndex, 1);

//         response.writeHead(200, {'Content-Type' : 'application/json'})

//         const result = {
//             success : true
//         }
//         response.end(JSON.stringify(result));
        

//     }else{

//         response.writeHead(404, {'Content-Type' : 'application/json'})

//         const result = {
//             success : false,
//             message : "API NOT FOUND"
//         }

//         response.end(JSON.stringify(result))

//     }
// }

// // const server = http.createServer(serverHandler);

// // server.listen(PORT, ()=>{
// //     console.log("HTTP Server is running on port - ", PORT)
// // })

// // const http = require('http');
// // const url = require('url');

// // const PORT = 4000;

// // let DATABASE = [
// //     { id: 1, name: "Bhilai", adventurePlaces: 0 },
// //     { id: 2, name: "Mumbai", adventurePlaces: 10 },
// //     { id: 3, name: "Delhi", adventurePlaces: 8 }
// // ];

// // const serverHandler = (request, response) => {
// //     const { url: requestUrl, method } = request;
// //     const { pathname, query } = url.parse(requestUrl, true);

// //     response.setHeader('Content-Type', 'application/json');

// //     if (pathname === "/cities" && method === "GET") {
// //         const result = {
// //             success: true,
// //             data: DATABASE
// //         };
// //         response.writeHead(200);
// //         response.end(JSON.stringify(result));

// //     } else if (pathname === "/cities/add" && method === "POST") {
// //         let body = "";
// //         request.on("data", (chunk) => {
// //             body += chunk.toString();
// //         });
// //         request.on("end", () => {
// //             const requestPayload = JSON.parse(body);
// //             const { name, adventurePlaces } = requestPayload;
// //             const newCity = {
// //                 id: DATABASE.length + 1,
// //                 name,
// //                 adventurePlaces
// //             };
// //             DATABASE.push(newCity);
// //             const result = { success: true };
// //             response.writeHead(201);
// //             response.end(JSON.stringify(result));
// //         });

// //     } else if (pathname === "/cities/update" && method === "PUT") {
// //         let body = "";
// //         request.on("data", (chunk) => {
// //             body += chunk.toString();
// //         });
// //         request.on("end", () => {
// //             const requestPayload = JSON.parse(body);
// //             const { id, name, adventurePlaces } = requestPayload;
// //             const cityIndex = DATABASE.findIndex(city => city.id === parseInt(id));
// //             if (cityIndex !== -1) {
// //                 DATABASE[cityIndex] = { id: parseInt(id), name, adventurePlaces };
// //                 const result = { success: true };
// //                 response.writeHead(200);
// //                 response.end(JSON.stringify(result));
// //             } else {
// //                 const result = { success: false, message: "City not found" };
// //                 response.writeHead(404);
// //                 response.end(JSON.stringify(result));
// //             }
// //         });

// //     } else if (pathname === "/cities/delete" && method === "DELETE") {
// //         const { id } = query;
// //         if (id) {
// //             const cityIndex = DATABASE.findIndex(city => city.id === parseInt(id));
// //             if (cityIndex !== -1) {
// //                 DATABASE.splice(cityIndex, 1);
// //                 const result = { success: true };
// //                 response.writeHead(200);
// //                 response.end(JSON.stringify(result));
// //             } else {
// //                 const result = { success: false, message: "City not found" };
// //                 response.writeHead(404);
// //                 response.end(JSON.stringify(result));
// //             }
// //         } else {
// //             const result = { success: false, message: "ID parameter is missing" };
// //             response.writeHead(400);
// //             response.end(JSON.stringify(result));
// //         }

// //     } else {
// //         const result = { success: false, message: "API NOT FOUND" };
// //         response.writeHead(404);
// //         response.end(JSON.stringify(result));
// //     }
// // };

// // const server = http.createServer(serverHandler);

// // server.listen(PORT, () => {
// //     console.log(`HTTP Server is running on port ${PORT}`);
// // });


const http = require('http');
const url = require('url');

const PORT = 4000;

let DATABASE = [
    { id: 1, name: "Bhilai", adventurePlaces: 0 },
    { id: 2, name: "Mumbai", adventurePlaces: 10 },
    { id: 3, name: "Delhi", adventurePlaces: 8 }
];

const serverHandler = (request, response) => {
    const { url: requestUrl, method } = request;
    const { pathname, query } = url.parse(requestUrl, true);

    response.setHeader('Content-Type', 'application/json');

    if (pathname === "/cities" && method === "GET") {
        const result = {
            success: true,
            data: DATABASE
        };
        response.writeHead(200);
        response.end(JSON.stringify(result));

    } else if (pathname === "/cities/add" && method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", () => {
            const requestPayload = JSON.parse(body);
            const { name, adventurePlaces } = requestPayload;
            const newCity = {
                id: DATABASE.length + 1,
                name,
                adventurePlaces
            };
            DATABASE.push(newCity);
            const result = { success: true };
            response.writeHead(201);
            response.end(JSON.stringify(result));
        });

    } else if (pathname === "/cities/update" && method === "PUT") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", () => {
           
            const requestPayload = JSON.parse(body);
            const { id, name, adventurePlaces } = requestPayload;
            const cityIndex = DATABASE.findIndex(city => city.id === id);
            if (cityIndex!== -1) {
                DATABASE[cityIndex] = { id: id, name, adventurePlaces };
                const result = { success: true };
                response.writeHead(200);
                response.end(JSON.stringify(result));
            } else {
                const result = { success: false, message: "City not found" };
                response.writeHead(404);
                response.end(JSON.stringify(result));
    }
    

        });

    } else if (pathname === "/cities/delete" && method === "DELETE") {
        const { id } = query;
        if (id) {
            const cityIndex = DATABASE.findIndex(city => city.id === parseInt(id));
            if (cityIndex !== -1) {
                DATABASE.splice(cityIndex, 1);
                const result = { success: true };
                response.writeHead(200);
                response.end(JSON.stringify(result));
            } else {
                const result = { success: false, message: "City not found" };
                response.writeHead(404);
                response.end(JSON.stringify(result));
            }
        } else {
            const result = { success: false, message: "ID parameter is missing" };
            response.writeHead(400);
            response.end(JSON.stringify(result));
        }

    } else {
        const result = { success: false, message: "API NOT FOUND" };
        response.writeHead(404);
        response.end(JSON.stringify(result));
    }
};

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
    console.log(`HTTP Server is running on port ${PORT}`);
});
