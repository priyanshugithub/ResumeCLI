const chalk = require("chalk");
const CFonts = require("cfonts");
const Data = require("../data/data");

const Summary = () => {
    const SummaryHead = CFonts.render('Summary', "block");
    console.log(SummaryHead.string);
    console.log(chalk.blue(Data.summary));
};

module.exports = Summary;