<template>
	<div>
		<Sidebar />
		<div class="view">x
			<router-view name="Content" />
		</div>
	</div>
</template>
<style>
.view {
	width: 90%;
	max-width: 1000px;
	margin: auto;
}
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
