const { bcrypt, prisma } = require("../src/models");

const hasedPassword = bcrypt.hashSync('123456', 10);
console.log('DB seed .....');

async function run() {
    await prisma.user.create({data:{"email":"admin@mail.com","password":hasedPassword,"name":"admin","phone":"0212345678","role":"ADMIN","birthDate":new Date("1990-01-01 00:00:00")}});
}

run()