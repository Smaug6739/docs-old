<template>
	<main>
		<h2 id="symboles-g-n-raux">Symboles généraux</h2>
		<div class="overflow">
			<table>
				<thead>
					<tr>
						<th>Symbole</th>
						<th>Signification</th>
						<th>Exemple</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\triangleq" />
						</td>
						<td data-label="Signification">Égaux par définition</td>
						<td data-label="Exemple"></td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\equiv" />
						</td>
						<td data-label="Signification">Équivalent</td>
						<td data-label="Exemple">
							<MathRender src="a + b \equiv b + a" />
						</td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\propto" />
						</td>
						<td data-label="Signification">Proportionnel</td>
						<td data-label="Exemple"></td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\lfloor \rfloor" />
						</td>
						<td data-label="Signification">Arrondi inférieur</td>
						<td data-label="Exemple">
							<MathRender src="\lfloor \pi \rfloor = 3" />
						</td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\lceil \rceil" />
						</td>
						<td data-label="Signification">Arrondi supérieur</td>
						<td data-label="Exemple">
							<MathRender src="\lceil \pi \rceil = 4" />
						</td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\forall" />
						</td>
						<td data-label="Signification">Pour tout/tous</td>
						<td data-label="Exemple">
							<MathRender src="\forall x \in \mathrm{R}" />
						</td>
					</tr>
					<tr>
						<td data-label="Symbole">
							<MathRender src="\exists" />
						</td>
						<td data-label="Signification">Il existe</td>
						<td data-label="Exemple">
							<MathRender src="\forall x \in \mathrm{N}, \exists y = x + 1" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
</template>
<script lang="ts">
import MathRender from '../../../components/Math.vue';
export default {
	name: "Symbols",
	components: {
		MathRender
	}
};
</script>
<style lang="scss" scoped>
.limiter {
	width: 100%;
	margin: 0 auto;
}

.container-table100 {
	width: 100%;
	min-height: 100vh;
	background: #c4d3f6;

	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 33px 30px;
}

.wrap-table100 {
	width: 960px;
	border-radius: 10px;
	overflow: hidden;
}

.table {
	width: 100%;
	display: table;
	margin: 0;
}


.row {
	display: table-row;
	background: #fff;
}

.row.header {
	color: #ffffff;
	background: #6c7ae0;
}

@media screen and (max-width: 768px) {
	.table {
		display: block;
	}

	.row {
		display: block;
	}

	.row.header {
		padding: 0;
		height: 0px;
	}

	.row.header .cell {
		display: none;
	}

	.row .cell:before {
		font-family: Poppins-Bold;
		font-size: 12px;
		color: #808080;
		line-height: 1.2;
		text-transform: uppercase;
		font-weight: unset !important;

		margin-bottom: 13px;
		content: attr(data-title);
		min-width: 98px;
		display: block;
	}
}

.cell {
	display: table-cell;
}

@media screen and (max-width: 768px) {
	.cell {
		display: block;
	}
}

.row .cell {
	font-family: Poppins-Regular;
	font-size: 15px;
	color: #666666;
	line-height: 1.2;
	font-weight: unset !important;

	border-bottom: 1px solid #f2f2f2;
}

.row.header .cell {
	font-family: Poppins-Regular;
	font-size: 18px;
	color: #fff;
	line-height: 1.2;
	font-weight: unset !important;
}

.cell {
	padding-bottom: 10px;
}

.row .cell:nth-child(1) {
	width: 360px;
	padding-left: 40px;
}

.row .cell:nth-child(2) {
	width: 160px;
}

.row .cell:nth-child(3) {
	width: 250px;
}

.row .cell:nth-child(4) {
	width: 190px;
}


.table,
.row {
	width: 100% !important;
}

.row:hover {
	background-color: #ececff;
	cursor: pointer;
}

@media (max-width: 768px) {
	.row {
		border-bottom: 1px solid #f2f2f2;
		padding-right: 15px;
		margin: 0;
	}

	.row .cell {
		border: none;
		padding-left: 30px;
	}

	.row .cell:nth-child(1) {
		padding-left: 30px;
	}

	.row .cell {
		font-family: Poppins-Regular;
		font-size: 18px;
		color: #555555;
		line-height: 1.2;
		font-weight: unset !important;
	}

	.table,
	.row,
	.cell {
		width: 100% !important;
	}
}
</style>
