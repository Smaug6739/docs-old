<template>
	<div>
		<Sidebar />
		<div class="view">
			<router-view name="Content" />
		</div>
	</div>
</template>
<style lang="scss">
@import "./index.scss";
</style>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/layout/sidebar/Sidebar.vue";
export default defineComponent({
	name: "Subject",
	components: {
		Sidebar,
	},
});
</script>
