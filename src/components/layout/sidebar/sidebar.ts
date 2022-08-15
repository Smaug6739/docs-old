import { defineComponent } from "vue";
import config from "../../../../data"
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

    //! Menu items
    menuItems: {
      type: Array<MenuItem>,
      default: (): MenuItem[] => [
        {
          link: "#",
          name: "Dashboard",
          icon: "bx-grid-alt",
        },
        {
          link: "#",
          name: "User",
          icon: "bx-user",
        },
        {
          link: "#",
          name: "Messages",
          icon: "bx-chat",
        },
        {
          link: "#",
          name: "Analytics",
          icon: "bx-pie-chart-alt-2",
        },
        {
          link: "#",
          name: "File Manager",
          icon: "bx-folder",
        },
        {
          link: "#",
          name: "Order",
          icon: "bx-cart-alt",
        },
        {
          link: "#",
          name: "Saved",
          icon: "bx-heart",
        },
        {
          link: "#",
          name: "Setting",
          icon: "bx-cog",
        },
      ],
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


    //! Styles
    bgColor: {
      type: String,
      default: "#11101d",
    },
    secondaryColor: {
      type: String,
      default: "#1d1b31",
    },
    homeSectionColor: {
      type: String,
      default: "#e4e9f7",
    },
    logoTitleColor: {
      type: String,
      default: "#fff",
    },
    iconsColor: {
      type: String,
      default: "#fff",
    },
    itemsTooltipColor: {
      type: String,
      default: "#e4e9f7",
    },
    searchInputTextColor: {
      type: String,
      default: "#fff",
    },
    menuItemsHoverColor: {
      type: String,
      default: "#fff",
    },
    menuItemsTextColor: {
      type: String,
      default: "#fff",
    },
    menuFooterTextColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  mounted() {
    this.isOpened = this.isMenuOpen;
  },
  computed: {
    menuItems2():MenuItem2[] {
      const subject = this.$route.path.split('/')[1];
      const data = config[subject];
      
      if(!data) return [];
      const items : MenuItem2[] = [];
      for(const theme in data) {
        const childrens:Children[]= [];
        for(const child of data[theme].chapters) {
          childrens.push({
            name: child.name,
            link: `/${child.path}`,
          });
        }
        items.push({
          name: data[theme].name,
          icon: data[theme].icon,
          childrens,
        })
      }
      
      return items;
    }
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
  beforeUnmount() {
    window.document.body.style.paddingLeft = "0px"
  },
});
interface MenuItem {
  link: string;
  name: string;
  icon: string;
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