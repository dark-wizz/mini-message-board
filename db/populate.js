#!/usr/bin/env node

const { Client } = require("pg");

require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
  user_name VARCHAR(255) NOT NULL,
  text text,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  time TIME NOT NULL DEFAULT CURRENT_TIME
);

INSERT INTO messages values('Akram', 'Hi there!');
INSERT INTO messages values('Jessie', 'Hello world!');

`;

async function main() {
  console.log("seeding...");
  const client = new Client();
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();