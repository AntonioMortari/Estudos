nome = input("Nome do aluno: ")
nota1 = float(input("Nota 1:"))
nota2 = float(input("Nota 2: "))

media = (nota1+nota2) / 2

print("A média do aluno {} é de {:.1f}".format(nome,media))