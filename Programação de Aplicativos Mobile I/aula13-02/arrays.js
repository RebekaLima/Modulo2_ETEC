let matriz = []

for(linha = 0; linha <10; linha ++){
    matriz[linha] = []
    
    for (let coluna = 0; coluna < 10; coluna ++) {
        matriz [linha][coluna] = (linha + 1) * (coluna + 2)

        if(matriz[linha][coluna]%2 == 0 ){
            console.log(matriz[linha][coluna])
        }
    }
}