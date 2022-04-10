import {Command} from 'commander';

let program = new Command()
program
  .command('create [name...]')
  .option('--core', 'Include core when creating a component.')
  .option('--service', 'Include service when creating a component.')
  .option('--directive', 'Include service when creating a component.')
  .option('-f --force', 'For force overwriting.')
  .description('Create a component structure, library entry file or other...')
  .action((name, cmd) => {
    console.log(name, cmd);
    
  });
  
  program.parse(process.argv)
// if (!program.args.length) program.help();
console.log(program.opts());
