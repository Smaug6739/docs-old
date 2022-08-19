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
