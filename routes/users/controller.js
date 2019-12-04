const { Users } = require("../../models");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Users.find({});
      res.status(200).json({ masage: "show data users", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const result = await Users.find({ _id: objectId(req.params.id) });
      res.status(200).json({ masage: "show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getAdd: async (req, res) => {
    try {
      const result = await Users.create(req.body);
      res.status(200).json({ masage: "show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  delOne: async (req, res) => {
    const id = req.params;
    try {
      const result = await Users.deleteOne({ _id: id.id }, function(err) {
        if (err) return handleError(err);
      });
      res.json({ masage: "delate data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const id = req.params;
    try {
      const result = await Users.updateOne({ _id: id.id }, req.body, function(
        err,
        res
      ) {});
      res.json({ masage: "show update todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getlogin: (req, res) => {
    get()
      .collection("users")
      .findOne({ email: req.body.email, password: req.body.password })
      .then(response => {
        const { email, firstName } = response;
        res.status(200).send({
          massage: "Login Successfully",
          data: { email, firstName }
        });
      })
      .catch(error => {
        Console.log(error);
      });
  }
};
