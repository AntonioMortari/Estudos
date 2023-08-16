# crie um programa que leie o nome completo de uma pessoa e mostre:
# nome em maíusculas e minúsculas, quantas letras(sem contar os espaços, quantas letras tem o primeiro nome)

nome = input('Digite o seu nome completo:')

def obter_total_letras(nome) :
    nome.replace(' ', '')
    nome = len(nome)
    return nome

def obter_primeiro_nome(nome):
    lista = nome.split()
    nome = lista[0]
    return nome

total_letras = obter_total_letras(nome)
primeiro_nome = obter_primeiro_nome(nome)


print(f""""
    O seu nome com letras maiúsculas fica : {nome.upper()}
    O seu nome com letras minúsculas fica : {nome.lower()}
    O seu nome tem {total_letras} letras
    O seu primeiro nome tem {len(primeiro_nome)} letras
      """)