<template>
	<main>
		<h1>Produit scalaire</h1>
		<h2>I Définition géométrique du produit scalaire</h2>
		<p>
			<Info name="Définition" color="red">
				Le <strong>produit scalaire</strong> d'un vecteur <kt src="\vec{u}" /> par un vecteur <kt src="\vec{v}" /> est le nombre réel noté <kt src="\vec{u} \cdot \vec{v}" /> (se lit " <kt src="\vec{u}" />scalaire <kt src="\vec{v}" />"), défini par :
				<ul>
					<li><kt src="\vec{u}\cdot\vec{v} = \lVert\vec{u}\rVert \times \lVert\vec{v}\rVert \times \cos(\theta)" /> où <kr src="\theta" /> est l'angle entre les deux vecteurs.</li>
					<li><kt src="\vec{u}\cdot\vec{v} = 0" /> si <kt src="\vec{u} = \vec{0}" /> ou que <kt src="\vec{v} = \vec{0}" />.</li>
				</ul>
			</Info>
			<strong>Remarque:</strong> Si <kt src="\vec{u} = \vec{v}" /> alors <kt src="\vec{u} \cdot \vec{v} = \lVert\vec{u}\rVert^2" /> qui est noté <kt src="\vec{u}^2" /> et que l'on appel carré scalaire du vecteur <kt src="\vec{u}" />.
		</p>
		<h2>II Produit scalaire et orthogonalité</h2>
		<h3>Vecteurs orthogonaux</h3>
		<p>
			<Info name="Définition:" color="red">
				Soit deux vecteurs non nuls <kt src="\vec{u}" /> et <kt src="\vec{v}" />. <br/>
				Il existe deux points A et B tel que <kt src="\vec{u} = \overrightarrow{OA}"/> et <kt src="\vec{v} = \overrightarrow{OB}"/>. <br/>
				On dit que <kt src="\vec{u}"/> et <kt src="\vec{v}"/> sont orthogonaux si les droites (OA) et (OB) sont perpendiculaires. On note <kt src="\vec{u} \perp \vec{v}" />.
			</Info>
		</p>
		<p>
			<Info name="Propriété:">
				Deux vecteurs <kt src="\vec{u}" /> et <kt src="\vec{v}" /> sont orthogonaux si <kt src="\vec{u} \cdot \vec{v} = 0" />.
			</Info>
		</p>
		<h3>Projection orthogonale</h3>
		<p>
			<Info name="Définition:" color="red">
				On appelle <strong>projeté orthogonal d'un vecteur <kt src="\vec{u}"/></strong> représenté par représenté par <kt src="\overrightarrow{MN}" /> sur un axe <kt src="\Delta" /> le vecteur <kt src="\vec{u'}" /> représenté par <kt src="\overrightarrow{M'N'}" /> où M' et N' sont les projetés orthogonaux de M et N sur <kt src="\Delta" />.
			</Info>
		</p>
		<p>
			<Info name="Théorème" color="turquoise">
				Soit <kt src="\vec{u}"/> un vecteur non nul et deux points A et B tels que <kt src="\vec{u} = \overrightarrow{AB}"/> <br/>
				Alors pour tout vecteur <kt src="\vec{v}"/>, en notant <kt src="\vec{v'}"/> le projeté orthogonal de <kt src="\vec{v}"/> sur la droite (AB) :<br/>
				<ul>
					<li>Si <kt src="\vec{u}"/> et <kt src="\vec{v}"/> sont dans le même sens : <kt src="\lVert\vec{u}\rVert \times \lVert\vec{v'}\rVert"/> </li>
					<li>Si <kt src="\vec{u}"/> et <kt src="\vec{v}"/> ne sont pas dans le même sens : <kt src="-\lVert\vec{u}\rVert \times \lVert\vec{v'}\rVert"/> </li>
				</ul>
			</Info>
			<img  src="/ressources/math/geometrie/produit_scalaire/projeté.png" alt="Projeté">
			<ul>
				<li>Cas 1 : <kt src="\overrightarrow{AB}\cdot\overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AC'} = AB \times AC'"/></li>
				<li>Cas 2 : <kt src="\overrightarrow{AB}\cdot\overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AC'} = - AB \times AC'"/></li>
			</ul>
		</p>
		<p>
			<Info name="Décomposition d'un vecteur selon deux axes orthogonaux">
				Soit <kt src="(O; \vec{i} \vec{j})"/> un repère orthonormé et <kt src="\vec{u}" /> un vecteur non nul tel que <kt src="(\vec{i}; \vec{u}) = \theta"/>. <br/>
				Alors le vecteur <kt src="\vec{u}"/> se décompose de manière unique sous la forme <kt src="\vec{u} = \vec{u_x} \times \vec{u_y}"/> où <kt src="\vec{u_x}"/> et <kt src="\vec{u_y}"/> sont les projetés respectifs du vecteur <kt src="\vec{u}"/> sur l'axe des abscisses (<kt src="\vec{i}"/>) et l'axe des ordonnées (<kt src="\vec{j}"/>). <br/>
				De plus, on a : <kt src="\vec{u_x} = \lVert\vec{u}\rVert \times \cos{\theta}"/> et <kt src="\vec{u_y} = \lVert\vec{u}\rVert \times \sin{\theta}"/>.
			</Info>
			<img src="/ressources/math/geometrie/produit_scalaire/décomposition.png" alt="Décomposition vectorielle">
		</p>
	</main>
</template>
<script lang="ts">
import kt from '../../../components/Math.vue';
import Info from '../../../components/common/Info.vue';
export default {
	name: "ScalarProduct",
	components: {
		kt,
		Info
	}
};
</script>
