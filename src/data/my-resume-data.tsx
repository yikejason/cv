export const MY_RESUME_DATA = {
  name: "余天雄",
  about: "我是一名前端工程师, 目前工作在成都, 如果看到我的简历请联系我",
  location: "四川,成都",
  email: "18215513386@163.com",
  tel: "18215513386",
  gitHub: {
    link: "https://github.com/yikejason",
    name: "yikejason",
  },
  avatarUrl: "/avatar.jpeg",
  avatarInit: "JA",
  summary:
    "作为一名前端工程师，我已经从0到1开发了多个产品。我领导过团队，构建过最好的前端项目。目前，我使用TypeScript、React、Vue、Next.js、uni-app、ant-design等开发项目。我已经拥有了6年的开发经验在前端开发的工作上。",
  personalStrengths: [
    "1.熟练掌握 JavaScript、TypeScript、CSS 以及 ES6 - ES10 的新特性",
    "2.擅长 React、Vue.js 技术栈及其生态，能快速运用相关技术完成项目的开发",
    "3.熟练使用 UmiJS NextJs 等框架",
    "4.熟悉 HTTP 协议，网络原理",
  ],
  workExperience: [
    {
      company: "新希望乳业",
      link: "https://www.newhopedairy.cn",
      title: "web前端开发工程师",
      start: "2022",
      end: "2024",
      description:
        "负责鲜活源项目监察微信小程序、鲜活源后台管理业务和对应业务组件的开发。技术：React、Vue、uni-app、TypeScript、ant-design",
    },
    {
      company: "博彦科技",
      link: "https://www.beyondsoft.com/",
      title: "web前端开发工程师",
      start: "2019",
      end: "2022",
      description:
        "负责香港支付宝小程序、公司内部流程工具的开发，就职期间，创建了一支内部流程工具开发小队。技术： React、TypeScript、ant-design、umi",
    },
    {
      company: "成都燃光科技",
      link: "",
      title: "web前端开发工程师",
      start: "2018",
      end: "2019",
      description:
        "负责类似telegram加密聊天web网页端开发。技术：React、ant-design",
    },
    {
      company: "成都福豆科技",
      link: "https://www.ucuxin.com/index.html",
      title: "web前端开发工程师",
      start: "2017",
      end: "2018",
      description:
        "负责优客优信教育app的功能迭代, 项目后台管理系统开发。技术： React、TypeScript、ant-design",
    },
    {
      company: "易客网络",
      link: "",
      title: "web前端开发工程师",
      start: "2016",
      end: "2017",
      description:
        "开发教育项目新功能，把旧项目从Angular迁移到React等。技术： React、Angular、ionic",
    },
  ],
  education: [
    {
      school: "电子科技大学",
      degree: "软件工程",
      start: "2020",
      end: "2018",
    },
    {
      school: "四川航天职业技术学院",
      degree: "物流管理",
      start: "2014",
      end: "2011",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Vue/Next.js",
    "Tailwind Css",
    "ant-design",
    "git",
    "Node.js",
    "express",
  ],
  projects: [
    {
      title: "个人简历",
      techStack: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind Css",
        "shadcn/ui",
      ],
      description:
        "这是一个关于我自己的简历项目，它可以支持修改我自己的简历内容。使用 create-next-app 脚手架初始一个 Next.js 项目，使用 Tailwind Css 做到内容和样式的分离，项目支持各个屏幕大小的适配(响应式设计)。Next.js 在构建时就生成了 Html 文件，所以它提供了出色的性能和最小的服务器负载。后续我的这个项目会增加国际化，简历内容按需定制，主题等功能。",
      link: {
        label: "jasontianyu.com",
        href: "https://jasontianyu.com",
      },
    },
    {
      title: "新希望乳业鲜活源",
      techStack: ["React", "TypeScript", "ant-design"],
      description:
        "这是一个关于新希望华西、白帝等各个工厂内部使用的后台管理系统，使用人数超过千人我主要负责项目中的可视化监控(dashboard)、监察中心、飞检中心等模块的开发。我主要的开发工作是 ant-design 组件的二次封装,封装适合公司项目的业务组件(快速提高项目开发效率30%)，抽离封装公共代码，减少项目体积10%，项目编写单元测试，提前预知到项目的bug做优化和调整。",
      link: {
        label: "fsl.newhopedairy.cn",
        href: "https://fsl.newhopedairy.cn/fsl/login",
      },
    },
    {
      title: "新希望乳业鲜活源（微信小程序）",
      techStack: ["Vue", "uni-app"],
      description:
        "这是一个关于新希望华西、白帝等各个工厂使用的监察中心小程序。我主要负责小程序所有模块的开发和调试。主要使用 uni-app 初始化项目，使用 Vuex 进行页面间数据的管理，手动封装适配项目的业务组件，如datePicker、tab、table等。",
    },
    {
      title: "集成运营小二工作台",
      techStack: ["React", "TypeScript", "ant-design"],
      description:
        "项目初期，我负责技术调研和需求收集，并使用 React 技术栈，配合 webpack 脚手架搭建项目，在开发过程中，遇到了大文件上传的问题（主要是上传文件太大，导致上传时卡顿，直到服务端抛出了一个网关超时504的错误），后面了解到大文件的上传都是采用分片的形式进行上传，然后我去调研了分片上传的原理，最终解决了大文件上传的这个问题。上线后，得到了运营同学的一致好评。",
    },
    {
      title: "Freshline 鲜食快线（支付宝小程序）",
      techStack: ["支付宝小程序原生api", "mini-ali-ui"],
      description:
        "这是一个关于泰国生鲜购买的小程序，日活上万。我主要负责小程序所有模块的开发和调试。主要使用支付宝小程序原生能力构建项目，使用 mini-ali-ui 构建项目的组件库，使用分包、抽离公共代码、删除冗余代码等方式，优化小程序体积20%，负责结算页等复杂页面的重构，重新设计数据结构及参数配置等。",
    },
    {
      title: "资讯平台",
      techStack: ["React", "ant-design"],
      description:
        "这是一个关于资讯收集的后台管理系统的项目，使用人数超过千人，我主要负责项目中所有模块的开发和调试，其中二次封装百度富文本编辑器，二次封装ant-design组件，优化首页加载速度。",
    },
    {
      title: "微课学堂",
      techStack: ["React", "ant-design"],
      description:
        "项目初期，我负责技术调研和需求收集，并使用 React 技术栈，配合 webpack  脚手架搭建项目，我负责整个项目的各个模块，在项目开发过程中，我发现各个页面的业务相似度很高，我开始着重封装对该项目的业务组件，实现通过配置 JSON  渲染各个页面，这不是单纯的后台管理系统，只要公司以后有业务相似的后台管理系统都能通过后台管理系统快速配置，这使得公司的后端同事和一些非研发同事能够快速上手前端开发（配置后台系统），从而提升了整体开发效率30%-40%，代码量减少60%，减少了人工写代码的成本。上线后，得到了用户和同事的一致好评。",
    },
    {
      title: "微课学堂H5",
      techStack: ["React", "Umi", "ant-design-mobile"],
      description:
        "项目初期，我负责技术调研和需求收集，并使用 React 技术栈，配合 webpack  脚手架搭建项目，在开发过程中，遇到了首屏加载速度缓慢的问题（主要是因为首屏页面请求太多和一些不必要的子组件的 render），后面通过 service-worker 浏览器缓存优先和本地数据存储一些不会更改的数据，CDN加速， React 避免多次render的一些hooks, 最终解决了首屏加载缓慢的问题。在项目过程中我主动和产品、后端沟通业务的实现，推进了项目的有序进行。",
    },
    {
      title: "串串大数据（webapp)",
      techStack: ["Angular", "ionic"],
      description:
        "项目初期，我负责技术调研和需求收集，并使用 Angular 技术栈，配合 ionic 脚手架搭建项目，二次封装ionic ui组件为业务通用组件，优化app首页加载速度，从而提高了app整体的访问速度和性能。",
    },
  ],
};
