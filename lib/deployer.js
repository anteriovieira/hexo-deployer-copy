const rm = require('rimraf')
const copy = require('copy-dir')
const path = require('path')

function run (args, callback) {
    copy(path.resolve(hexo.public_dir), path.resolve(args.to), callback)
}

hexo.extend.deployer.register('copy', function(args, callback){
  if (!args.to){
    var help = [
      '',
      'You should argsure deployment settings in _config.yml first!',
      '',
      'Example:',
      '  deploy:',
      '    type: copy',
      '    to: <dir>',
      '    clean_before: [true|false]',
      '',
      'For more help, you can check the docs: ' + 'http://hexo.io/docs/deployment.html',
      ''
    ];

    console.log(help.join('\n'));
    return callback();
  }

  if (args.clean_before) {
    rm(args.to, function () {
      run(args, callback)
    })
  } else {
    run(args, callback)
  }

});

