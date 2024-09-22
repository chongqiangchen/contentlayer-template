import { SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "软件简介",
      items: [
        {
          title: "我们能干什么",
          href: "/docs",
          items: [],
        },
        {
          title: "会员相关",
          href: "/docs/installation",
          items: [],
        }
      ],
    },
    {
      title: "使用指南",
      items: [
        {
          title: "开始使用",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "更新日志",
          href: "/docs/installation/remix",
          items: [],
        }
      ],
    },
    {
      title: "项目功能",
      items: [
        {
          title: "撸毛",
          href: "/docs/components/accordion",
          items: [],
          label: "New",
        },
        {
          title: "推文监听",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "其他高效工具",
          href: "/docs/components/alert-dialog",
          items: [],
        }
      ],
    },
    {
      title: "项目-电报",
      items: [
        {
          title: "01",
          href: "/docs/accordion",
          items: [],
        },
        {
          title: "02",
          href: "/docs/alert",
          items: [],
        },
        {
          title: "03",
          href: "/docs/alert-dialog",
          items: [],
          label: "New",
        }
      ],
    },
    {
      title: "项目-xxx",
      items: [
        {
          title: "01",
          href: "/docs/accordion",
          items: [],
        },
        {
          title: "02",
          href: "/docs/alert",
          items: [],
        },
        {
          title: "03",
          href: "/docs/alert-dialog",
          items: [],
          label: "New",
        }
      ],
    },
  ]
}