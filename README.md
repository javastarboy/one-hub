<p align="right">
   <strong>中文</strong> | <a href="./README.en.md">English</a>
</p>

<p align="center">
   <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://github.com/MartialBE/one-hub/assets/42402987/c4125d1a-5577-446d-ba15-2a71c52140c1">
   <img height="90" src="https://raw.githubusercontent.com/MartialBE/one-api/main/web/src/assets/images/logo.svg">
   </picture>
</p>

<div align="center">

# One Hub

_本项目是基于[one-api](https://github.com/songquanpeng/one-api) 和 [one-hub](https://github.com/MartialBE/one-hub)二次开发而来的_

<p align="center">
  <a href="https://raw.githubusercontent.com/MartialBE/one-api/main/LICENSE">
    <img src="https://img.shields.io/github/license/MartialBE/one-api?color=brightgreen" alt="license">
  </a>
  <a href="https://github.com/MartialBE/one-hub/releases/latest">
    <img src="https://img.shields.io/github/v/release/MartialBE/one-api?color=brightgreen&include_prereleases" alt="release">
  </a>
  <a href="https://github.com/users/MartialBE/packages/container/package/one-api">
    <img src="https://img.shields.io/badge/docker-ghcr.io-blue" alt="docker">
  </a>
  <a href="https://hub.docker.com/r/martialbe/one-api">
    <img src="https://img.shields.io/badge/docker-dockerHub-blue" alt="docker">
  </a>
  <a href="https://goreportcard.com/report/github.com/MartialBE/one-api">
    <img src="https://goreportcard.com/badge/github.com/MartialBE/one-api" alt="GoReportCard">
  </a>
</p>

**请不要和原版混用，因为新增功能，数据库与原版不兼容**

**为了更加简洁，本项目之后，除了新增供应商时会更新程序自带的模型列表，平常不再更新程序自带的模型列表。**

**如果发现缺少新模型，请在`后台-模型价格-更新价格`中更新新增的模型**

[使用手册](https://www.yuque.com/lhyyh/ai/tool?singleDo) | [演示网站](https://javastarboy.com.cn/) | [AI工具集导航](https://tools.lhagi.com/)

</div>

> [!WARNING]
> 本项目为个人学习使用，不保证稳定性，且不提供任何技术支持，使用者必须在遵循 OpenAI 的使用条款以及法律法规的情况下使用，不得用于非法用途。根据[《生成式人工智能服务管理暂行办法》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm)的要求，请勿对中国地区公众提供一切未经备案的生成式人工智能服务。

## 功能变化

- 全新的 UI 界面
- 新增用户仪表盘
- 新增管理员分析数据统计界面
- 重构了中转`供应商`模块
- 支持使用`Azure Speech`模拟`TTS`功能
- 渠道可配置单独的 http/socks5 代理
- 支持动态返回用户模型列表
- 支持自定义测速模型
- 日志增加请求耗时
- 支持和优化非 OpenAI 模型的函数调用（支持的模型可以在 lobe-chat 直接使用）
- 支持完成倍率自定义
- 支持完整的分页和排序
- 支持`Telegram bot`
- 支持模型按次收费
- 支持模型通配符
- 支持使用配置文件启动程序
- 支持模型价格更新
- 支持自动获取供应商模型
- 支持仅聊天，开启后如果有传入`function call`参数会跳过该渠道
- 支持支付
- 支持配置用户组 RPM
- 支持`Prometheus`监控

## 文档

请查看[文档](https://github.com/javastarboy/one-hub/wiki)
- [部署](https://github.com/javastarboy/one-hub/wiki/%E9%83%A8%E7%BD%B2)
- [Docker自动更新容器](https://github.com/javastarboy/one-hub/wiki/Docker-%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%AE%B9%E5%99%A8)
- [环境变量](https://github.com/javastarboy/one-hub/wiki/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
- [命令行参数](https://github.com/javastarboy/one-hub/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0)
- [使用方法](https://github.com/javastarboy/one-hub/wiki/%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
- [消息推送配置](https://github.com/javastarboy/one-hub/wiki/%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5%E9%85%8D%E7%BD%AE)
- [常见问题](https://github.com/javastarboy/one-hub/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

## 当前支持的供应商

| 供应商                                                                | Chat                     | Embeddings | Audio  | Images      | 其他                                                             |
| --------------------------------------------------------------------- | ------------------------ | ---------- | ------ | ----------- | ---------------------------------------------------------------- |
| [OpenAI](https://platform.openai.com/docs/api-reference/introduction) | ✅                       | ✅         | ✅     | ✅          | -                                                                |
| [Azure OpenAI](https://oai.azure.com/)                                | ✅                       | ✅         | ✅     | ✅          | -                                                                |
| [Azure Speech](https://portal.azure.com/)                             | -                        | -          | ⚠️ tts | -           | -                                                                |
| [Anthropic](https://www.anthropic.com/)                               | ✅                       | -          | -      | -           | -                                                                |
| [Gemini](https://aistudio.google.com/)                                | ✅                       | -          | -      | -           | -                                                                |
| [百度文心](https://console.bce.baidu.com/qianfan/overview)            | ✅                       | ✅         | -      | -           | -                                                                |
| [通义千问](https://dashscope.console.aliyun.com/overview)             | ✅                       | ✅         | -      | -           | -                                                                |
| [讯飞星火](https://console.xfyun.cn/)                                 | ✅                       | -          | -      | -           | -                                                                |
| [智谱](https://open.bigmodel.cn/overview)                             | ✅                       | ✅         | -      | ⚠️ 图片生成 | -                                                                |
| [腾讯混元](https://cloud.tencent.com/product/hunyuan)                 | ✅                       | -          | -      | -           | -                                                                |
| [百川](https://platform.baichuan-ai.com/console/apikey)               | ✅                       | ✅         | -      | -           | -                                                                |
| [MiniMax](https://www.minimaxi.com/user-center/basic-information)     | ✅                       | ✅         | -      | -           | -                                                                |
| [Deepseek](https://platform.deepseek.com/usage)                       | ✅                       | -          | -      | -           | -                                                                |
| [Moonshot](https://moonshot.ai/)                                      | ✅                       | -          | -      | -           | -                                                                |
| [Mistral](https://mistral.ai/)                                        | ✅                       | ✅         | -      | -           | -                                                                |
| [Groq](https://console.groq.com/keys)                                 | ✅                       | -          | -      | -           | -                                                                |
| [Amazon Bedrock](https://console.aws.amazon.com/bedrock/home)         | ⚠️ 仅支持 Anthropic 模型 | -          | -      | -           | -                                                                |
| [零一万物](https://platform.lingyiwanwu.com/details)                  | ✅                       | -          | -      | -           | -                                                                |
| [Cloudflare AI](https://ai.cloudflare.com/)                           | ✅                       | -          | ⚠️ stt | ⚠️ 图片生成 | -                                                                |
| [Midjourney](https://www.midjourney.com/)                             | -                        | -          | -      | -           | [midjourney-proxy](https://github.com/novicezk/midjourney-proxy) |
| [Cohere](https://cohere.com/)                                         | ✅                       | -          | -      | -           | -                                                                |
| [Stability AI](https://platform.stability.ai/account/credits)         | -                        | -          | -      | ⚠️ 图片生成 | -                                                                |
| [Coze](https://www.coze.com/open/docs/chat?_lang=zh)                  | ✅                       | -          | -      | -           | -                                                                |
| [Ollama](https://github.com/ollama/ollama)                            | ✅                       | ✅         | -      | -           | -                                                                |
| [Suno](https://suno.com/)                                             | -                        | -          | -      | -           | [Suno-API](https://github.com/Suno-API/Suno-API)                 |

## 感谢

- 本程序使用了以下开源项目
  - [one-api](https://github.com/songquanpeng/one-api)、[one-hub](https://github.com/MartialBE/one-hub)为本项目的基础
  - [Berry Free React Admin Template](https://github.com/codedthemes/berry-free-react-admin-template)为本项目的前端界面
  - [minimal-ui-kit](https://github.com/minimal-ui-kit/material-kit-react),使用了其中的部分样式
  - [new api](https://github.com/Calcium-Ion/new-api)，Midjourney/Suno 模块的代码来源于此
  - [go-zero](https://github.com/zeromicro/go-zero) - Token 限流器的实现

感谢以上项目的作者和贡献者

## 联系我们（@AGI舰长，备注：new-hub）

<table>
  <tr>
    <td align="center">
      <picture>
        <img height="300" src="https://oss.javastarboy.com/agi/%E4%B8%AA%E4%BA%BA%E4%BC%81%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.png">
      </picture>
      <br/>
      （微信号）
    </td>
    <td align="center">
      <picture>
        <img height="300" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4.png">
      </picture>
      <br/>
      （AI全栈交流群）
    </td>
  </tr>
</table>

## 请我喝咖啡
如果您觉得对您有所帮助，欢迎您的赞助。您的支持将使我有更多的动力继续维护和改进这个项目。
您可以通过扫描下面的二维码来请我喝杯咖啡：


<table>
  <tr>
    <td align="center">
      <picture>
        <img height="400" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81.jpeg">
      </picture>
    </td>
    <td align="center">
      <picture>
        <img height="400" src="https://lobechat2vercel.oss-cn-beijing.aliyuncs.com/prod/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.jpeg">
      </picture>

    </td>
  </tr>
</table>


## 其他
<a href="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history?repo_id=689214770" target="_blank" style="display: block" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history/thumbnail.png?repo_id=689214770&image_size=auto&color_scheme=dark" width="721" height="auto">
    <img alt="Star History of MartialBE/one-api" src="https://next.ossinsight.io/widgets/official/analyze-repo-stars-history/thumbnail.png?repo_id=689214770&image_size=auto&color_scheme=light" width="721" height="auto">
  </picture>
</a>

