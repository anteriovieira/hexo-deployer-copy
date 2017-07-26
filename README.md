# Copy deployer plugin for [Hexo](http://zespia.tw/hexo/)

This plugin can deploy your blog via copy.

## Usage

### Install 

```
npm install hexo-deployer-copy --save
```

### Configure

Add `to` to `deploy` in `_config.yml`.

```yml
# You can use this:
deploy:
  type: copy
  to: <dir>
  clean_before: [true|false] 
```

| Option | Description | Default | Param |
|--------|-------------|---------|-------|
| to     | Destination directory | | Required
| clean_before | Clear the destination directory before copying | false | Optional


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