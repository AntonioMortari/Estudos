n1 = int(input("Digite um número: "))
n2 = int(input("Digite outro número: "))

print("A soma vale {}".format(n1+n2), end=">>>")
#end : o próximo print será na mesma linha
print("{} dividido por {} é igual a {:.2f}".format(n1,n2,n1/n2))
#{:.(numero de casas decimais)f}
print("{} multiplicado por {} é igual a {}".format(n1,n2,n1*n2))