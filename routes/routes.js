var faker = require("faker");
var router = (app)=>{
    app.get("/",(req,res)=>{
        res.send("WELCOME");
    });
    app.get("/user",(req,res)=>{
        let data =({
            name: faker.name.firstName(),
            surename: faker.name.lastName(),
            user: faker.internet.userName(),
            email: faker.internet.email(),
            image: faker.internet.avatar()
        });
        res.send(data);
    });
    app.get("/user/:value",(req, res)=>{
        let users = [];
        let value = req.params.value;
        if(isFinite(value) && value>0){
        for (let i = 0; i < value; i++){
            users.push({
                name: faker.name.firstName(),
                surename: faker.name.lastName(),
                user: faker.internet.userName(),
                email: faker.internet.email(),
                image: faker.internet.avatar()
            });
        }
        res.send(users);
    }
});
}
module.exports = router;