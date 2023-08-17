nome = input('Digite o nome do aluno:')
nota1 = float(input('Digite a nota 1:'))
nota2 = float(input('Digite a nota 2:'))
media = (nota1 + nota2) / 2

situacao = ''
if media >= 6:
    situacao = 'Aprovado'
else:
    situacao = 'Reprovado' 

print(f'A média do aluno {nome} é {round(media,1)}, Situação: {situacao}')