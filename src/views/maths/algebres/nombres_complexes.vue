

<template>
  <main>
    <h1>Nombres complexes</h1>
    <hr>
    <h2>I Théorème</h2>
    <ul>
      <li>On admet l'existance d'un ensemble de nombres appelé <strong>nombres complexes</strong> :
        <katex src="\mathbb{C}" />, contenant
        <katex src="\mathbb{R}" /> l'ensemble de tous les réels.
      </li>

      <li>
        <katex src="\mathbb{C}" /> comporte un nombre noté i, le nombre imaginaire, tel que
        <code> <katex src="i ^2 = - 1" /></code>.
      </li>
    </ul>
    <h2>II Représentation algébrique d'un nombre complexe</h2>
    <h3>A) Définitions et notations</h3>
    <ul>

      <li> Tout élement z de
        <katex src="\mathbb{C}" /> possède une <strong>écriture unique</strong> sous la forme
        <code> <katex src=" a + ib,\:(a
        ,b) \in \mathbb{R}^2" /></code>.
      </li>
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
        Si la partie réelle d'un nombre complexe est nulle, on dit qu'il s'agit d'un nombre <strong>imaginaire
          pur</strong>.
      </li>
    </ul>
    <h3>B) Conjugué d'un nombre complexe</h3>
    <Info name="Définition:" color="red">
      Pour tout nombre complexe
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
    </Info>
    <h4>Exemples:</h4>
    <ul>
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
    <h3>Module d'un nombre complexe</h3>
    <Info name="Définition:" color="red">

      Le <strong>module</strong> d'un nombre complexe
      <katex src="z = a + ib" /> est le nombre <strong>réel positif</strong>
      <katex src=" |z| = \sqrt{a^2 + b^2}" />.
    </Info>
    <h4>Exemples:</h4>
    <ul>
      <li>
        <katex src="|z_1| = |1-2i| = \sqrt{1^2+2^2} = \sqrt{1+4} = \sqrt{5}" />
      </li>
      <li>
        <katex src="|z_2| = |3+i| = \sqrt{3^2+1^2} = \sqrt{10}" />
      </li>
      <li>
        <katex src="|z_3| = |-3| = \sqrt{-3^2} = \sqrt{9} = 3" />
      </li>
      <li>
        <katex src="|z_4| = |2i| = \sqrt{2^2} = \sqrt{4} = 2" />
      </li>
    </ul>
    <h3>Opérations sur des nombres complexes</h3>
    <h4>L'addition et la soustraction</h4>
    <p>
      <Info name="Propriété:">Les nombres complexes sont <strong>additifs</strong> et <strong>soustractifs</strong>. On
        les additionne et on
        les
        soustrait de la même manière que des nombres appartenant à l'ensembles des réels
        <katex src="\mathbb{R}" />.
      </Info>
    </p>
    <p>
      Exemple:
      <katex src="z_1 + z_2 = (1 +2i) + (3 +i) = 1 - 2i + 3 3 i = 4-i" />
    </p>
    <h4>La multiplication</h4>
    <p>
      <Info name="Propriété:">La multiplication d'un nombre complexe par un nombre réel ou un nombre complexe suivent
        les mêmes règles que
        pour
        l'ensemble des réels
        <katex src="\mathbb{R}" /> avec
        <katex src="i^2 = -1" />.
      </Info>

      <Warning name="Cas particulier:">
        Lors d'une multiplication d'un nombre complexe
        <katex src="z = a + ib" /> par son conjugué
        <katex src="z \times \bar{z} = a^2 + b^2" />.
      </Warning><br /><br />
      Exemple:
      <katex src="z_1 \times z_2 = (1 - 2i) \times (3 +i) = 3+i-6i-2i^2=3-5i+2=5-5i" />
    </p>
    <h4>La division de nombres complexes</h4>
    <p>
      <Info name="Propriété:">Le quotient de deux nombres complexes (avec un dénominateur non nul) est un nombre
        complexe.</Info>
    </p>
    <p>
      <i style="text-decoration: underline;">Méthode:</i> Pour mettre sous forme algébrique un quotient, l'idée est de
      multiplier le numérateur et le dénominateur par le conjugué du dénominateur afin de transformer le dénominateur en
      un nombre réel (
      <katex src="\mathbb{R}" />).
    </p>
  </main>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import katex from '../../../components/Math.vue';
import Warning from '../../../components/common/Warning.vue';
import Info from '../../../components/common/Info.vue';

export default defineComponent({
  name: "NombresComplexes",
  components: {
    katex,
    Warning,
    Info
  },
});
</script>