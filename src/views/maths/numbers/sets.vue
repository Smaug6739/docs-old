<template>
	<main>
		<h1>Les ensembles mathématiques</h1>
		<p>
			En mathématiques, un ensemble de nombres est l'un des ensembles classiques construits à partir de l'ensemble des
			entiers naturels et munis d'opérations arithmétiques, apparaissant dans la suite d'inclusions croissante.
		</p>
		<div class="overflow">
			<table>
				<thead>
					<tr>
						<th>Nom</th>
						<th>Définition</th>
						<th>Notation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Entiers naturels</td>
						<td>Nombre entier, positif ou nul.</td>
						<td>
							<MathRender src="\mathbb{N}" />
						</td>
					</tr>
					<tr>
						<td>Entiers relatifs</td>
						<td>Formé de tous les entiers naturels et leuurs opposés.</td>
						<td>
							<MathRender src="\mathbb{Z}" />
						</td>
					</tr>
					<tr>
						<td>Décimaux</td>
						<td>Nombre pouvant s'écrire comme le quotient d'un entier relatif par une puissance de 10. <br />
							Il peut s'écrire sous forme décimale comprenant une partie entière, une virgule et une partie décimale
							finie.</td>
						<td>
							<MathRender src="\mathbb{D}" />
						</td>
					</tr>
					<tr>
						<td>Rationels</td>
						<td>Nombre pouvant s'écrire comme le quotient de deux entiers relatifs.</td>
						<td>
							<MathRender src="\mathbb{Q}" />
						</td>
					</tr>
					<tr>
						<td>Réels</td>
						<td>Nombres représentés par une partie entière et une partie décimale finie ou infinie.</td>
						<td>
							<MathRender src="\mathbb{R}" />
						</td>
					</tr>
					<tr>
						<td>Complexes</td>
						<td>Nombres représentés par une partie entière et une partie réelle et une partie immaginaire.</td>
						<td>
							<MathRender src="\mathbb{C}" />
						</td>
					</tr>
				</tbody>
			</table>
			<p>Chaque sur-ensemble inclu au moins les ensembles précédents. Par exemple l'ensemble des entiers naturels (
				<MathRender src="\mathbb{N}" />) est inclu dans l'ensemble des entiers relatifs (
				<MathRender src="\mathbb{Z}" />).
			</p>
			<p> Les ensembles sont construits les uns par dessus les autres. <br> Ainsi les ensembles se notent ainsi :
				<MathRender
					src="\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{D} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}" />
			</p>
		</div>
	</main>
</template>
<script lang="ts">
import MathRender from '../../../components/Math.vue';
export default {
	name: "Sets",
	components: {
		MathRender
	}
};
</script>
