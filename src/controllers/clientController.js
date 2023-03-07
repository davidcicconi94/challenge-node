const Client = require("../model/Client");

exports.createClient = async (req, res, next) => {
  const client = new Client(req.body);
  try {
    await client.save();
    res.json({ msg: `Client ${client.name} was added succesfully.` });
  } catch (error) {
    res.json({ msg: "Error" });
    next();
  }
};

exports.kpideClient = async (req, res, next) => {
  try {
    const clients = await Client.find({});
    let ageList = [];

    for (let i = 0; i < clients.length; i++) {
      ageList.push(clients[i].age);
    }

    let prom = ageList.reduce((a, b) => a + b, 0) / ageList.length;

    const results = ageList.map((value) => Math.pow(value - prom, 2));

    const mediaresults =
      results.reduce((suma, value) => suma + value, 0) / results.length;

    const desv = Math.sqrt(mediaresults);

    res.json({ prom, desv });
  } catch (error) {
    res.json({ msg: "Error" });
    next();
  }
};

exports.listClients = async (req, res, next) => {
  const clients = await Client.find();

  try {
    const newClients = clients.map((client) => {
      const fecha = client.date;

      const yearDeath = fecha.getFullYear() + 100;
      const monthDeath = client.date.getMonth() + 1;
      const dayDeath = client.date.getDate() + 1;

      client.deathDate = new Date(
        `${yearDeath}-${monthDeath}-${dayDeath} `
      ).toISOString();

      return client.save();
    });

    const clientsTotal = await Promise.all(newClients);

    /*    console.log("Esto entra en Promise", newClients);
          console.log("Total", clientsTotal); */

    res.json(clientsTotal);
  } catch (error) {
    res.json({ msg: "Error" });
  }
};
