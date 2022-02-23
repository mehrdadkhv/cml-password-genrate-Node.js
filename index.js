const program = require("commander");

program.version("1.0.0").description("Simple Password Generator");

program
  .command("genrate")
  .action(() => {
    console.log("generated");
  })
  .parse();
