else if (args.length == 2) {
    if (args[0] == "-e") {
      let rl = readline.createInterface({
        input: fs.createReadStream(args[1], "utf8"),
      });
  
      rl.on("line", function (line) {
        console.log(line + "$");
      });
  
    } 
    else {
      console.log("Commande fausse");
    }
  }