<template>
	<main>
		<h1>Les intervales sur
			<MathRender size="math-size" src="\mathbb{R}" />
		</h1>
		<p>
			Les intervales sont des ensemble de nombres qui sont construits par les bornes de l'intervalle.
		</p>
		<h2>Intervalles bornés</h2>
		<div class="overflow">
			<table>
				<thead>
					<tr>
						<th>Intervalle</th>
						<th>Encadrement</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<MathRender size="math-size" src="\lbrack a;b\rbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a \leq \mathit{x} \leq b" />
						</td>
						<td>Le nombre x est compris entre a et b inclus.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\lbrack a;b\lbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a \leq \mathit{x} < b" />
						</td>
						<td>Le nombre x est compris entre a inclus et b exclus.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\rbrack a;b\rbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a < \mathit{x} \leq b" />
						</td>
						<td>Le nombre x est compris entre a exclus et b inclus.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\rbrack a;b\lbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a < \mathit{x} < b" />
						</td>
						<td>Le nombre x est compris entre a et b exclus.</td>
					</tr>
				</tbody>
			</table>
		</div>
		<h2>Intervalles non bornés</h2>
		<div class="overflow">
			<table>
				<thead>
					<tr>
						<th>Intervalle</th>
						<th>Encadrement</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<MathRender size="math-size" src="\lbrack a;+\infin \rbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="\mathit{x} \geq a" />
						</td>
						<td>Le nombre x est supérieur ou égale à a.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\lbrack a;+\infin \lbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a \leq \mathit{x} < b" />
						</td>
						<td>Le nombre x est supérieur à a.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\rbrack -\infin;a\rbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="a \leq \mathit{x}" />
						</td>
						<td>Le nombre x est inférieur ou égale à a.</td>
					</tr>
					<tr>
						<td>
							<MathRender size="math-size" src="\rbrack -\infin;b\lbrack" />
						</td>
						<td>
							<MathRender size="math-size" src="\mathit{x} < a" />
						</td>
						<td>Le nombre x est inférieur à a.</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
</template>
<script lang="ts">
import MathRender from '../../../components/Math.vue';
export default {
	name: "Intervals",
	components: {
		MathRender
	}
};
</script>
