import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-7e89ae65","/configuration/config.html","Configuration options",["/configuration/config","/configuration/config.md"]],
  ["v-10906a20","/essentials/updates.html","Updates",["/essentials/updates","/essentials/updates.md"]],
  ["v-2d0a8b4a","/fr/","",["/fr/index.html","/fr/README.md"]],
  ["v-07bef54e","/getting-started/install.html","Installation",["/getting-started/install","/getting-started/install.md"]],
  ["v-5f3cc9ce","/getting-started/requirements.html","Requirements",["/getting-started/requirements","/getting-started/requirements.md"]],
  ["v-19e585f0","/getting-started/usage.html","How to use",["/getting-started/usage","/getting-started/usage.md"]],
  ["v-72a86334","/fr/configuration/config.html","Options de configuration",["/fr/configuration/config","/fr/configuration/config.md"]],
  ["v-5b2406af","/fr/essentials/updates.html","Mise à jour",["/fr/essentials/updates","/fr/essentials/updates.md"]],
  ["v-eddc4bc2","/fr/getting-started/install.html","Installation",["/fr/getting-started/install","/fr/getting-started/install.md"]],
  ["v-703bde30","/fr/getting-started/requirements.html","Prérequis",["/fr/getting-started/requirements","/fr/getting-started/requirements.md"]],
  ["v-fa75bbce","/fr/getting-started/usage.html","Utilisation",["/fr/getting-started/usage","/fr/getting-started/usage.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
