const app = require("fastify")({
    logger:true
});
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1', // Replace with your region
    accessKeyId: 'your-access-key-id', // Replace with your AWS Access Key
    secretAccessKey: 'your-secret-access-key' // Replace with your AWS Secret Key
  });
app.get("/", (request , reply)=>{
    reply.send({msg:"server is live ---"})
})

const s3 = new AWS.S3();
const server = async()=>{
    app.listen({port:3002});
}

server();