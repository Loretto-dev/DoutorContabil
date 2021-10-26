//Calculadora ICMS

/****Aliquotas de cada estado****/

//Operações com demais bens e mercadorias; para quais não haja previsão de alíquota específica;

function Dados(_imposto){
    this.impostoIcms = _imposto;

}

const acre = new Dados(7);
const alagos= new Dados(7);
const amapa= new Dados(7);
const amazonas= new Dados(7);
const bahia= new Dados(7);
const ceara= new Dados(7);
const distritoFederal= new Dados(7);
const espiritoSanto= new Dados(7);
const goias= new Dados(7);
const maranhao= new Dados(7);
const matoGrosso= new Dados(7);
const matoGrossoSul= new Dados(7);
const minasGerais = new Dados(12);
const pará = new Dados(7);
const paraiba = new Dados(7);
const paraná = new Dados(12);
const pernanbuco = new Dados(7);
const piaui = new Dados(7);
const rioGrandeNorte = new Dados(7);
const rioGrandeSul = new Dados(12);
const rioJaneiro = new Dados(12);
const rondonia = new Dados(7);
const roraima = new Dados(7);
const santaCatarina = new Dados(12);
const saoPaulo = new Dados(18);
const sergipe = new Dados(7);
const tocantins = new Dados(7);

const estados = [acre, alagos, amapa, amazonas, bahia, ceara, distritoFederal, espiritoSanto, goias, maranhao, matoGrosso, matoGrossoSul, minasGerais, pará, paraiba, paraná, pernanbuco, piaui, rioGrandeNorte, rioGrandeSul, rioJaneiro, rondonia, roraima, santaCatarina, saoPaulo, sergipe, tocantins]

let calculaICMS = function(){
    let spICMS = estados;
    for(let i = 1; i <= spICMS.length; i++){
        if(spICMS <= 7){
                console.log('Vc está no resto do país')
        }else if(spICMS > 7 && spICMS <=12){
                console.log('Vc está de Minas Gerais, Paraná, RioGrande do Sul, Rio de Janeiro ou Santa Catarina')
        }else if(spICMS > 12){
            console.log('É São Paulo essa, com 18%')
        }
    }
};

console.log(calculaICMS(2));

    /* Média de alíquotas internas de ICMS por estado:
    Acre – 17%	Alagoas – 7%	Amazonas – 18%
    Amapá – 18%	Bahia – 18%	Ceará – 18%
    Distrito Federal – 18%	Espírito Santo – 17%	Goiás – 17%
    Maranhão – 18%	Mato Grosso – 17%	Mato Grosso do Sul – 17%
    Minas Gerais – 18%	Pará – 17%	Paraíba – 18%
    Paraná – 18%	Pernambuco – 18%	Piauí – 18%
    Rio Grande do Norte – 18%	Rio Grande do Sul – 18%	Rio de Janeiro – 20%
    Rondônia – 17;5%	Roraima – 17%	Santa Catarina – 17%
    São Paulo – 18%	Sergipe – 18%	Tocantins – 18% */




/* Tabela de equivalência da redução da base de cálculo do ICMS 2020
Para realizar a equivalência do ICMS; de acordo com a tabela; segue um exemplo; 
de acordo com instrução da Econet Editora:

Reduzir a base de cálculo do ICMS para que resulte em uma carga tributária equivalente a 6;42%:

valor da mercadoria ………………………………………………………R$ 1.000;00
alíquota (operação interna) …………………………………………….18 %
% de equivalência na carga tributária ……………………………..6;42%
Aplicando a tabela teremos os seguintes cálculos:

1.000 x 35;6667% = 356;67
356;67 x 18% = 64;20
Para confirmarmos se está correto o valor encontrado; faremos o seguinte cálculo:

1.000 x 6;42% = 64;20
Na nota fiscal deverá constar nos quadros:

Base de Cálculo do ICMS = 356;67
*/