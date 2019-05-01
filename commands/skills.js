const chalk = require("chalk");
const CFonts = require("cfonts");
const Data = require("../data/data");

const Skills = () => {
    const SkillsHead = CFonts.render('Skills', "block");
    console.log(SkillsHead.string);
    console.log(Data.techstack);
};

module.exports = Skills;