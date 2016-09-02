## 前端工程化学习

### webpack server hot module replacement

```
    $ webpack-dev-server --inline --hot
```
or

add HotModuleReplacementPlugin() in plugins:

```
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: true}
```
