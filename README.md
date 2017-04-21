



npm install jsonlint -g

npm install yamljs

npm install prettyjson

npm install json2yaml


ava

npm test
npm test -- --watch


babel

npm install nats-hemera
npm install nats



npm test --prefix api



curl -H "Content-Type: application/json" -X POST -d '{"graph":{},"name":"xyz"}' http://localhost:8182/api/graphtoyaml

curl -H "Content-Type: application/json" -X POST -d @./graph-service/test/bm.json http://localhost:8182/api/graphtoyaml
----

"nock": "^9.0.13",
"supertest": "^3.0.0"
