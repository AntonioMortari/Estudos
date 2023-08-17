import random

num = random.randint(1,5)

print('Adivinhe o número de 1 a 5, você tem 3 tentativas!')

tentativa = int(input('Chute:'))

if tentativa == num:
    print ('Parabéns! Você acertou')
else:
    tentativa = int(input('Você errou! Tente novamente:'))
    if tentativa == num:
        print ("Parabens! Voce acertou")
    else:
        tentativa = int(input('Você errou! tente uma última vez:'))
        if tentativa == num:
            print("Parabens voce acertou!")
        else:
            print(f'Você perdeu, o número era {num}! Reinicie e tente novamente')