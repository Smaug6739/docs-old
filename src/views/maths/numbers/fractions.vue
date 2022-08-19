<template>
	<main>
		<h1>Fractions</h1>
		<p>La fraction est un moyen d'écrire des nombres rationels sous forme d'un quotient de deux entiers. Dans une
			fraction
			<kt src="\frac{a}{b}" /> a désigne le
			<strong>numérateur</strong> et b le <strong>dénominateur.</strong>
		</p>
		<h2>Opérations sur des fractions</h2>
		<h3>Addition et soustraction</h3>
		<p>
			Pour additionner ou soustraire des fractions, elles doivent avoir le même dénominateur. On additionne alors
			uniquement les numérateurs. <br />
		<ul>
			<li>
				Addition :
				<kt src="\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}" />
			</li>
			<li>
				Soustraction :
				<kt src="\frac{a}{c} - \frac{b}{c} = \frac{a - b}{c}" />
			</li>
		</ul>
		</p>
		<h3>Multiplication de fractions</h3>
		<p>
			Pour multiplier des fractions on multiplie les numérateurs entre eux et les dénominateurs entre eux.
		<ul>
			<li>Multiplication
				<kt src="\frac{a}{c}\times\frac{b}{d} = \frac{a\times b}{c\times d}" />
			</li>
		</ul>
		</p>
		<h3>Division de fractions</h3>
		<p>
			Pour diviser par une fraction, on multiplie par son inverse.
		<ul>
			<li>Division
				<kt src="\frac{\frac{a}{b}}{\frac{c}{d}} = \frac{a}{b}\times\frac{d}{c}" />
			</li>
		</ul>
		</p>
		<h2>Passage sous le même dénominateur</h2>
		<p>Pour réaliser des opérations sur des fractions il est parfois nécéssaire de les placer sous le même dénominateur.
			Pour cela, on multiple le numérateur et le dénominateur de la fraction A par le dénominateur de la fraction B et
			on multiplie le numérateur et le dénominateur de la fraction B par le dénominateur de la fraction A.
		<ul>
			<li>Ilustration:
				<kt src="\frac{a}{b}" /> et
				<kt src="\frac{c}{d}" /> deviennent
				<kt src="\frac{a \htmlStyle{color: red;}{\times d}}{b \htmlStyle{color:
				red;}{\times d}}" /> et
				<kt src="\frac{c \htmlStyle{color: red;}{\times b}}{d \htmlStyle{color:
				red;}{\times b}}" />
			</li>
		</ul>
		Exemples :
		<ul>
			<li>
				<kt src="\frac{a}{b} + \frac{c}{d} = \frac{ad}{bd} + \frac{cb}{db} = \frac{ad + cb}{bd}" />
			</li>
		</ul>
		</p>
	</main>
</template>
<script lang="ts">
import kt from '../../../components/Math.vue';
export default {
	name: "Fractions",
	components: {
		kt
	}
};
</script>
