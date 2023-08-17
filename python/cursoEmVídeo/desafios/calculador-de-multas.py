
velocidade = float(input('Digite a velocidade:'))

if velocidade > 80.0:
    multa = (velocidade - 80) * 7
    print(f'Você foi MULTADO!, o valor total da multa é de R${round(multa,2)}')
else:
    print('Você não foi multado! Tenha um bom dia.81')