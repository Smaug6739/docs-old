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
						<td>
							<MathRender src="\triangleq" />
						</td>
						<td>Égaux par définition</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<MathRender src="\equiv" />
						</td>
						<td>Équivalent</td>
						<td>
							<MathRender src="a + b \equiv b + a" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\propto" />
						</td>
						<td>Proportionnel</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<MathRender src="\lfloor \rfloor" />
						</td>
						<td>Arrondi inférieur</td>
						<td>
							<MathRender src="\lfloor \pi \rfloor = 3" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\lceil \rceil" />
						</td>
						<td>Arrondi supérieur</td>
						<td>
							<MathRender src="\lceil \pi \rceil = 4" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\forall" />
						</td>
						<td>Pour tout/tous</td>
						<td>
							<MathRender src="\forall x \in \mathbb{R}" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\exists" />
						</td>
						<td>Il existe</td>
						<td>
							<MathRender src="\forall x \in \mathbb{N}, \exists y = x + 1" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\subseteq" />
						</td>
						<td>Inclusion</td>
						<td>
							<MathRender src="\mathbb{N} \subseteq \mathbb{R}" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\nsubseteq" />
						</td>
						<td>Négation de l'inclusion</td>
						<td>
							<MathRender src="\mathbb{R} \nsubseteq \mathbb{N}" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\in" />
						</td>
						<td>Appartenance</td>
						<td>
							<MathRender src="5 \in E" />
						</td>
					</tr>
					<tr>
						<td>
							<MathRender src="\notin" />
						</td>
						<td>Négation de l'appartenance</td>
						<td>
							<MathRender src="5 \notin E" />
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
