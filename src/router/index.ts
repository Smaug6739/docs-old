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
  const subjectPush: RouteRecordRaw = {
    path: `/${subject}`,
    name: subject,
    component: () => import(`../views/${subject}/index.vue`),
    children: [],
  };
  const themes = config[subject];
  for (const theme in themes) {
    for (const data of themes[theme].chapters) {
      const index = (await import(`../views/${subject}/index.vue`)).default;
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

      subjectPush.children.push({
        path: `/${data.path}`,
        name: data.name,
        components: {
          default: index,
          Content: page,
        },
      });
    }
  }
  routes.push(subjectPush);
}
console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
