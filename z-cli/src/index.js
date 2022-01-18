import { Command } from 'commander';
import { onCreate } from './command/create';

const program = new Command()

program
  // 注册 create 命令
  .command('create')
  // 添加命令描述
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option('-t --type <type>', `创建类型，可选值：component`)
  
  // 注册命令回调
  .action(onCreate)

// 执行命令行参数解析
program.parse()
