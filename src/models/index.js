const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');
const app = express();

module.exports = {
    express,
    morgan,
    bcrypt,
    jwt,
    prisma,
    app,
    cors
}