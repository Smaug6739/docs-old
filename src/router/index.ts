import type { DefineComponent } from "vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  /* {
    path: "/",
    name: "Home",
    component: () => import("../views/Index.vue"),
  },*/
];

import config from "../../data";
for (const subject in config) {
  routes.push({
    path: `/${subject}`,
    name: subject,
    component: () => import(`../views/${subject}/index.vue`),
  });
  const themes = config[subject];
  for (const theme in themes) {
    for (const data of themes[theme].chapters) {
      const spName = data.path.split("/");
      let page: any;
      if (spName.length === 1)
        page = (await import(`../views/${spName[0]}.vue`)).default;

      if (spName.length === 2)
        page = (await import(`../views/${spName[0]}/${spName[1]}.vue`)).default;

      if (spName.length === 3)
        page = (
          await import(`../views/${spName[0]}/${spName[1]}/${spName[2]}.vue`)
        ).default;

      routes.push({
        path: `/${data.path}`,
        component: () => page,
        name: data.name,
      });
    }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
