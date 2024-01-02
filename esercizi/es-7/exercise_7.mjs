import figlet from "figlet";

figlet.defaults({ fontPath: "assets/fonts" });



function ready() {
    console.log(figlet.textSync("Stefano"));
    console.log(figlet.textSync("Sala", "Ghost"));
}

ready()
