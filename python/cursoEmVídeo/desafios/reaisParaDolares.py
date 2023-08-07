reais = float(input("Quantos reais você tem? EX: 10.75 : "))

cotacao = 4.88

print("Com R${} reais você poderia comprar ${:.2f} dólares, na cotação atual de ${}".format(reais,reais/cotacao, cotacao))