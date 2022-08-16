const houses = require("./db.json");
let nextHouse = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const id = Number(req.params.id);
        const index = houses.findIndex(element => element.id === id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let { id, address, price, imageURL } = req.body;
        rating = Number(rating);
        const newHouse = {
            id: nextHouse,
            address,   //same as typing address: address
            price,
            imageURL,
        };
        houses.push(newHouse);
        res.status(200).send();

        // increments the id of additional movies that are added later
        nextHouse++;
    },
    updateHouse: (req, res) => {
        let { id } = req.params;
        id = Number(id);
        const { type } = req.body;
        const index = houses.findIndex(element => element.id === id);

        // increments or decrements rating based on various conditions
        if (houses[index].rating === 5 && type === "plus") {
            res.status(400).send("rating cannot be higher than 5");
        } else if ([index].rating === 0 && type === "minus") {
            res.status(400).send("rating cannot go below 0");
        } else if (type === "plus") {
            houses[index].rating++;
            res.status(200).send(houses);
        } else if (type === "minus") {
            houses[index].rating--;
            res.status(200).send(houses);
        } else {
            res.sendStatus(400);
        }
    }
}