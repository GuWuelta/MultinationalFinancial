</div>

<!-- <img alt="logo da GCB" src="https://media.discordapp.net/attachments/1045500218541613168/1056308451241902181/image.png"> -->

<h1 align="center"> 💵 Multinational Financial 💵</h1>

<br>

## :dart: Sobre

Uma empresa multinacional está buscando criar um programa que poupe o tempo e substitua os cálculos manuais do coeficiente de trabalho, imposto, gratificação e etc dos funcionários. Neste cenário, foi criado um algoritmo que recebe algumas informações e utiliza elas para fazer os cáculos e retornar:

- **Salário Mínimo**; deve variar de acordo com o cargo:
  - <b>Operário:</b> Entre 750 até 2500
  - <b>Gerente:</b> Entre 1400 até 4600
    <br>
- **Coeficiente de Trabalho**, conforme a tabela abaixo:
  | Turno de Trabalho | Valor do Coeficiente |
  | ----------------- | --------------------- |
  | Matutino | 13% do salário mínimo |
  | Vespertino | 4% do salário mínimo |
  | Noturno | 8% do salário mínimo |
  <br>

- **Salário Bruto** (Cálculo: Número de Horas Trabalhadas X Valor do Coeficiente de Trabalho)
  <br>

- **Imposto**, conforme a tabela abaixo:

  | Categoria de Trabalho | Salário Bruto | Imposto sobre o Salário Bruto |
  | --------------------- | ------------- | ----------------------------- |
  | Operário              | ≥ R$ 945,00   | 13%                           |
  |                       | < R$ 945,00   | 7%                            |
  | Gerente               | ≥ R$ 1520,00  | 15%                           |
  |                       | < R$ 1520,00  | 10%                           |

    <br>

- **Gratificação**, conforme as regras abaixo:
  ✏️ Caso o funcionário preencha **todos** os requisitos abaixo, ele deve receber uma gratificação de R$1200,00, caso contrário deve ser de 465.00.

  <b>Requisitos:</b>
  - <b>Turno:</b> Matinal 
  - <b>Horas trabalhadas:</b> Superior à 80 horas.
  <br>

- **Auxílio alimentação**, conforme as regras abaixo:
  ✏️ Se o Operário preencher **todos** os requisitos abaixo, seu auxílio alimentação será de metade do seu salário bruto, caso contrário, será de um terço do seu salário bruto:

  <b>Requisitos:</b>

  - <b>Cargo:</b> Operário
  - <b>Coeficiente de Trabalho:</b> Maior ou igual a 25
  <br>

- **Salário líquido** (Cálculo: Salário Bruto - Imposto + Gratificação + Auxílio Alimentação)

<hr>

## 👾 Tecnologias

<b>Para o desenvolvimento do desafio foram utilizadas as seguintes tecnologias: </b>

- Typescript
- Jest

<hr>

## :clipboard: Documentação

<b>Este projeto consiste em diversas classes com suas respectivas responsabilidades; São elas:</b>

<hr>

<b> getRandomSalary( ): </b> Método responsável por gerar um salário mínimo aleatório respeitando os limites de cada cargo.
<br>
<b>parâmetro:</b> cargo do funcionário (string)
<br>
<b>retorno:</b> um número, gerado aleatóriamente.

---

<b> calculateWorkCoefficient( ): </b> Método responsável por calcular o coeficiente de trabalho com base na tabela de porcentagens mostrada acima.
<br>
<b>parâmetro:</b> turnos de trabalho do funcionário (array de strings)
<br>
<b>retorno:</b> cálculo do coeficiente (number).

---

<b> calculateGrossSalary( ): </b> Método responsável por realizar o cálculo e retornar o salário bruto.
<br>
<b>parâmetro:</b> horasTrabalhadas (number), coeficienteDeTrabalho(number), salarioMinimo (number).
<br>
<b>retorno:</b> Salário bruto (number)

---

<b> calculateTaxRate( ): </b> Método responsável por calcular o imposto do salário com base na tabela de porcentagens mostrada acima.
<br>
<b>parâmetro:</b> cargo do funcionário (string), salário bruto do funcionário (number).
<br>
<b>retorno:</b> quantidade descontada do salário por imposto (number).

---

<b> getGratification( ): </b> Método responsável por calcular a gratificação que o funcionário irá receber, de acordo com os requisitos.
<br>
<b>parâmetro:</b> turnos de trabalho do funcionário (array de strings), horasTrabalhadas (number)
<br>
<b>retorno:</b> gratificação do funcionário (number).

---

<b> calaculateFoodAId( ): </b> Método responsável por calcular o retornar o quanto de auxílio alimentar o operário irá receber, de acordo com os requisitos.
<br>
<b>parâmetro:</b> cargo do funcionário (string), coeficienteDeTrabalho(number), salário bruto do funcionário (number).
<br>
<b>retorno:</b> auxílio alimentar do operário (number).

---

<b> calculateNetSalary( ): </b> Método responsável por fazer o cálculo e retornar o salário líquido do funcionário.
<br>
<b>parâmetro:</b> salário bruto (number), imposto (number), gratificação (number), auxílio alimentar (number).
<br>
<b>retorno:</b> salário líquido do funcionário (number).

<hr>

<div align="center"> 
<b>Feito por</b>
<br>
<a href="https://github.com/GuWuelta" target="_blank"><img src="https://avatars.githubusercontent.com/u/101107981?v=4" width="160px;" alt="Foto do Gustavo Wuelta no GitHub"/></a>
<br>
<a href="https://github.com/GuWuelta" target="_blank"><b>Gustavo Wuelta</b></a>

</div>

<p align="right">(<a href="#top"><b>Voltar para o topo</b></a>)</p>
