function calcularIMC() {
    var p = document.getElementById('peso').value;
    var a = document.getElementById('altura').value;
    var p2;
    var pT;

    var imc = (p / (a * a));

    if (imc < 17) {
        p2 = 24.9 * a * a;
        pT = p2 - p;
        alert ('IMC: ' + imc.toFixed(2) + 
               '\n\nMUITO ABAIXO DO PESO: Pode ocasionar queda de cabelo, infertilidade e ausência menstrual.' +
               '\n\nVocê deve engoradar ' + pT.toFixed(2) + 'Kg alcançar IMC 24.9');
    } else {
        if (imc < 18.5) {
            p2 = 24.9 * a * a;
            pT = p2 - p;
            alert ('IMC: ' + imc.toFixed(2) + 
                   '\n\nABAIXO DO PESO: Pode ocasionar fadiga, stress e ansiedade.' +
                   '\n\nVocê deve engoradar ' + pT.toFixed(2) + 'Kg para alcançar IMC 24.9');
        } else {
            if (imc < 24.9) {
                alert ('IMC: ' + imc.toFixed(2) + '\n\nPESO NORMAL: Menor risco de doenças cardíacas e vasculares.');
            } else {
                p2 = 24.9 * a * a;
                pT = p - p2;
                if (imc < 29.9) {
                    alert ('IMC: ' + imc.toFixed(2) + 
                           '\n\nACIMA DO PESO: Pode ocasionar fadiga, má circulação e varizes.' +
                           '\n\nVocê deve emagrecer ' + pT.toFixed(2) + 'Kg alcançar IMC 24.9');
                } else {
                    p2 = 24.9 * a * a;
                    pT = p - p2;
                    if (imc < 34.9) {
                        alert ('IMC: ' + imc.toFixed(2) + 
                               '\n\nOBESIDADE GRAU I: Pode ocasionar diabetes, angina, infarto e aterosclerose.' + 
                               '\n\nVocê deve emagrecer ' + pT.toFixed(2) + 'Kg alcançar IMC 24.9');
                    } else {
                        p2 = 24.9 * a * a;
                        pT = p - p2;
                        if (imc < 40) {
                            alert ('IMC: ' + imc.toFixed(2) + 
                                   '\n\nOBESIDADE GRAU II: Pode ocasionar apneia do sono e falta de ar.' +
                                   '\n\nVocê deve emagrecer ' + pT.toFixed(2) + 'Kg alcançar IMC 24.9');
                        } else {
                            p2 = 24.9 * a * a;
                            pT = p - p2;
                            alert ('IMC: ' + imc.toFixed(2) + 
                                   '\n\nOBESIDADE GRAU III: Pode ocasionar refluxo, dificuldade pra se mover, escaras, diabetes, infarto, etc.' +
                                   '\n\nVocê deve emagrecer ' + pT.toFixed(2) + 'Kg alcançar IMC 24.9');
                        }
                    }
                }
            }
        }
    }

}