const rm = require('rimraf')
const cp = require('copy-dir')

hexo.extend.deployer.register('copy', function(args, callback){
  if (!args.to){
    var help = [
      'You should argsure deployment settings in _config.yml first!',
      '',
      'Example:',
      '  deploy:',
      '    type: copy',
      '    to: <dir>',
      '',
      'For more help, you can check the docs: ' + 'http://hexo.io/docs/deployment.html'.underline
    ];

    console.log(help.join('\n'));
    return callback();
  }

  rm(args.to, function () {
    cp(hexo.public_dir, args.to, callback)
  })
});
