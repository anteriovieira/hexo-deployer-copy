const rm = require('rimraf')
const copy = require('copy-dir')
const path = require('path')

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
      'For more help, you can check the docs: ' + 'http://hexo.io/docs/deployment.html'
    ];

    console.log(help.join('\n'));
    return callback();
  }

  rm(args.to, function () {
    copy(path.resolve(hexo.public_dir), path.resolve(args.to), callback)
  })
});

