#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const computePassword = require('./utils/passwordgenerator');
const savepassword = require('./utils/savepassword');
// const clipboard = require('clipboardy');
program.version('1.0.0')
    .description('A simple password generator')
    .option('-l, --length <number>', 'sets the length of the password', '8')
    .option('-s, --save', 'saves the password to passwords,txt')
    .option('-ns, --no-symbols', 'generates a password without symbols')
    .option('-nn, --no-numbers', 'generates a password without numbers')
    .parse()

const { length, save, symbols, numbers } = program.opts();

//Get the generated password
const generatedPassword = computePassword(length, symbols, numbers);
//save the password to a file if the save flag is provided
if(save){
    savepassword(generatedPassword);
}
//clipboard.writeSync(generatedPassword);
console.log(chalk.bold(`Your password has been generated: ${chalk.yellowBright(generatedPassword)}`));
// console.log(chalk.magentaBright('Password has been copied to the clipboard'))