const {model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel =  model("positons", PositionsSchema);

module.exports={PositionsModel}