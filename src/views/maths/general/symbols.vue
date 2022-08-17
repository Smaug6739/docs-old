<template>
	<main>
		<h1 id="symboles-g-n-raux">Symboles généraux</h1>
		<p>Voici une liste des symboles généraux utilisés dans des expressions mathématiques.</p>
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
