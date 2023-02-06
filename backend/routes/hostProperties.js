var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET properties */
router.get("/", async function (req, res, next) {
  const hostProperties = await prisma.HostProperty.findMany();
  console.log("hostproperty", hostProperties);
  res.json(hostProperties);
});

module.exports = router;
