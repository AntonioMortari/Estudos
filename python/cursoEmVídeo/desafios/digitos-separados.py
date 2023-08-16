#faça um programa que leia um numero de 1000 a 9999 e mostra cada um dos digitos separados

num = input('Digite um número entre 1000 e 9999:')


if int(num) < 1000 or int(num) > 10000:
    print('O número digitado não está dentro do intervalo estabelecido!')
else:
    print(f"""
        A unidade é {num[3]}
        A dezena é {num[2]}
        A centena é {num[1]}
        O milhar é {num[0]}
    """)