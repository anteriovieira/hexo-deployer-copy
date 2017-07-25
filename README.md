# Copy deployer plugin for [Hexo](http://zespia.tw/hexo/)

This plugin can deploy your blog via copy.

## Usage

### Install 

```
npm install hexo-deployer-copy --save
```

### Configure

Add `to` to `deploy` in `_config.yml`.

```
deploy:
  type: copy
  to: <dir>
```

> Note: The destination directory [to] will be removed if it exists. 

### Update

Execute the following command.

```
npm update
```

### Uninstall

Execute the following command. Don't forget to disable the plugin before uninstalling.

```
npm uninstall hexo-deployer-ftp
```

[Hexo]: http://zespia.tw/hexo

## License

The MIT License