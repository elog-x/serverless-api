# serverless-api
本项目提供了一个调用Github Dispatches 接口
基于Vercel + Serverless 部署  
你也可以 Fork 此仓库部署到自己的 Vercel 上
## 参数说明
- user: Github用户名
- repo: Github仓库名
- token: [Github Token](https://elog.1874.cool/notion/gvnxobqogetukays#token-2)
- event_type: 配置在 [Github workflows](https://github.com/LetTTGACO/elog-docs/blob/master/.github/workflows/main.yaml) 中的`repository_dispatch.types`的值
```yaml
on:
  # 允许手动push触发
  push:
    branches:
      - main
  # 允许外部仓库事件触发
  repository_dispatch:
    types:
      - deploy // event_type就是这个
```

## 接口调用方式：
- 浏览器直接发起Get请求
```shell
https://serverless-api-elog.vercel.app/api/github?user=xxx&repo=xxx&event_type=xxx&token=xxx
```
- curl 发起Get/Post请求
```shell
curl --location --request POST 'https://serverless-api-elog.vercel.app/api/github?user=xxx&repo=xxx&event_type=xxx&token=xxx'
```

```shell
curl --location --request POST 'https://serverless-api-elog.vercel.app/api/github' \
--data-raw '{
    "user": "xxx",
    "repo": "xxx",
    "token": "xxx"
    "event_type": "xxx",
}'
```
