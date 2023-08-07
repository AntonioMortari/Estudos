preco = float(input("Qual o preço do produto? "))

desconto = 0.05

print("O preço com um desconto aplicado de 5% é de R${:.2f}".format(preco - (preco*desconto)))