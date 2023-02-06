const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function seed(callback) {
  // EDIT BELOW HERE

  // DELETES
  console.log("REMOVING HOSTS");
  await db.host.deleteMany();
  console.log("REMOVING PROPERTIES");
  await db.property.deleteMany();

  // create properties
  console.log("CREATING PROPERTIES");
  for (let i = 0; i < 10; i++) {
    await db.property.create();
  }

  // create hosts
  console.log("CREATING HOSTS");
  for (let i = 0; i < 10; i++) {
    await db.host.create();
  }

  // EDIT ABOVE HERE

  callback();
}

seed(() => {
  console.log("Finished Seeding");
});
