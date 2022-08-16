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
for (const subject of config) {
  const subjectPush: RouteRecordRaw = {
    path: subject.url,
    name: subject.name,
    component: () => import(`../views/index.vue`),
    children: [],
  };
  const themes = subject;
  for (const theme of themes.themes) {
    for (const chapter of theme.chapters) {
      const index = (await import(`../views/index.vue`)).default;
      const spName = chapter.path.split("/");
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
        path: `/${chapter.path}`,
        name: chapter.name,
        components: {
          default: index,
          Content: page,
        },
      });
    }
  }
  routes.push(subjectPush);
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
