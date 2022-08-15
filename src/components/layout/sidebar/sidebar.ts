import { defineComponent } from "vue";
import config from "../../../../data";
export default defineComponent({
  name: "SidebarMenu",
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      default: true,
    },
    menuTitle: {
      type: String,
      default: "Docs",
    },
    menuLogo: {
      type: String,
      default: "",
    },
    menuIcon: {
      type: String,
      default: "bxs-graduation",
    },
    isPaddingLeft: {
      type: Boolean,
      default: true,
    },
    menuOpenedPaddingLeftBody: {
      type: String,
      default: "280px",
    },
    menuClosedPaddingLeftBody: {
      type: String,
      default: "78px",
    },

    //! Search
    isSearch: {
      type: Boolean,
      default: true,
    },
    searchPlaceholder: {
      type: String,
      default: "Search...",
    },
    searchTooltip: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return {
      isOpened: false,
      searchInput: "",
    };
  },
  mounted() {
    this.isOpened = this.isMenuOpen;
  },
  computed: {
    menuItems2(): MenuItem2[] {
      const subject = this.$route.path.split("/")[1];
      const data = config[subject];

      if (!data) return [];
      const items: MenuItem2[] = [];
      for (const theme in data.themes) {
        const childrens: Children[] = [];
        for (const child of data.themes[theme].chapters) {
          childrens.push({
            name: child.name,
            link: `/${child.path}`,
          });
        }
        items.push({
          name: data.themes[theme].name,
          icon: data.themes[theme].icon,
          childrens,
        });
      }

      // Handle search input
      if (this.searchInput) {
        const copy = items;
        copy.forEach((item) => {
          item.childrens = item.childrens.filter((child) =>
            child.name.toLowerCase().includes(this.searchInput.toLowerCase())
          );
        });
        return copy.filter((item) => item.childrens.length > 0);
      }
      return items;
    },
  },
  watch: {
    isOpened() {
      window.document.body.style.transition = "all 0.3s ease";
      window.document.body.style.paddingLeft =
        this.isOpened && this.isPaddingLeft
          ? this.menuOpenedPaddingLeftBody
          : this.menuClosedPaddingLeftBody;
    },
  },
  methods: {
    getSubjects(): Subject[] {
      const arr: Subject[] = [];
      for (const subject in config) {
        arr.push(config[subject]);
      }
      return arr;
    },
  },
  beforeUnmount() {
    window.document.body.style.paddingLeft = "0px";
  },
});
interface Subject {
  name: string;
  url: string;
}
interface MenuItem2 {
  name: string;
  icon: string;
  childrens: Children[];
}
interface Children {
  name: string;
  link: string;
}
