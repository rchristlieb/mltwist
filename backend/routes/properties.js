var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET properties */
router.get("/", async function (req, res, next) {
  const properties = await prisma.Property.findMany();
  console.log("properties", properties);
  res.json(properties);
});

module.exports = router;
