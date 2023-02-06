var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET hosts */
router.get("/", async function (req, res, next) {
  const hosts = await prisma.Host.findMany();
  console.log("hosts", hosts);

  res.json(hosts);
});

module.exports = router;
