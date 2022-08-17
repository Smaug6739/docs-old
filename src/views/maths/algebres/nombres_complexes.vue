

<template>
  <main>
    <h1>Nombres complexes</h1>
    <h2>I Définitions et notations</h2>
    <h3>A) Théorème</h3>
    <ul>
      <li>On admet l'existance d'un ensemble de nombres appelé <strong>nombres complexes</strong> :
        <katex src="\mathbb{C}" />, contenant
        <katex src="\mathbb{R}" /> l'ensemble de tous les réels.
      </li>
      <li>
        <katex src="\mathbb{C}" /> est muni de deux opérations élémentaires, l'addition et la multiplication.
      </li>
      <li>
        <katex src="\mathbb{C}" /> comporte un nombre noté i, le nombre imaginaire, tel que
        <code> <katex src="i ^2 = - 1" /></code>.
      </li>
      <li>Tout élement z de
        <katex src="\mathbb{C}" /> possède une <strong>écriture unique</strong> sous la forme
        <code> <katex src=" a + ib,\:(a
        ,b) \in \mathbb{R}^2" /></code>.
      </li>
    </ul>
    <h3>B) Vocabulaire</h3>
    <ul>
      <li>Dans la notation d'un nombre complexe, on trouve deux parties distinctes, la partie réelle et la partie
        imaginaire. Prennons
        <katex src="z = a +ib" /> , ici
        <katex src="a" /> est la partie réelle et
        <katex src="b" /> la partie imaginaire.
      </li>
      <li>
        La forme algébrique du nombre complexe
        <katex src="z" /> s'écrit sous la forme
        <katex src="z = a + ib" />.
      </li>
      <li>
        Si la partie réelle d'un nombre complexe est nulle, on dit qu'il s'agit d'un nombre imaginaire pur.
      </li>
    </ul>
    <h2> II Conjugué d'un nombre complexe</h2>
    <p>Pour tout nombre complexe
      <katex src="z" /> de la forme algébrique
      <katex src="z = a + ib" />, on a avec
      <katex src="a" /> et
      <katex src="b" /> réels, <strong>on appelle conjugué de
        <katex src="z" />
      </strong> le nombre noté
      <katex src="\bar{z}" /> et défini par
      <katex src="\bar{z} = a - ib" />. Ainsi,
      <katex src="Re(\bar{z}) = Re(z)" /> et
      <katex src="Im(\bar{z}) = -Im(z)" />.
      <br />
      Exemples : <br />
    <ul class="inline-list">
      <li>
        <katex src="\bar{z_1} = \overline{1-2i} = 1 + 2i" />
      </li>
      <li>
        <katex src="\bar{z_2} = \overline{3+i} = 3 - i" />
      </li>
      <li>
        <katex src="\bar{z_3} = \overline{-3} = -3" />
      </li>
      <li>
        <katex src="\bar{z_4} = \overline{2i} = -2i" />
      </li>
    </ul>
    <ul class="inline-list">
      <li>
        a
      </li>
      <li>b
      </li>
      <li>c
      </li>
      <li>d
      </li>
    </ul>
    </p>
  </main>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import katex from '../../../components/Math.vue';

export default defineComponent({
  name: "NombresComplexes",
  components: {
    katex
  },
});
</script>