const { describe, demandOption } = require("yargs");
const yargs = require("yargs");
const {
  listContact,
  showDetailContact,
  saveContactFile,
  deleteContact,
  updateContact,
} = require("./contact");
// const { writeContactFile } = require("./contact");

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Contact email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile,
    };

    saveContactFile(contact);
  },
});

yargs.command({
  command: "list",
  describe: "see contact list",
  handler() {
    listContact();
  },
});

yargs.command({
  command: "detail",
  describe: "show detail contact",
  builder: {
    name: {
      describe: "name of contact",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    showDetailContact(argv.name);
  },
});

yargs.command({
  command: "delete",
  describe: "show detail contact",
  builder: {
    name: {
      describe: "name of contact",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.name);
  },
});

yargs.command({
  command: "update",
  describe: "update contact",
  builder: {
    oldName: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    newName: {
      describe: "Contact name",
      demandOption: false,
      type: "string",
    },
    email: {
      describe: "Contact email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Contact mobile phone number",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    updateContact(argv.oldName, argv.newName, argv.email, argv.mobile);
  },
});

yargs.parse();
