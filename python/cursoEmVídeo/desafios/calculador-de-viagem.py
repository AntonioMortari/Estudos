
distancia = float(input('Qual a distância para o seu destino em KM?'))

valor_p_km = 0
preco = 0
if distancia > 200:
    valor_p_km = 0.45
    preco = distancia*valor_p_km
else:
    valor_p_km = 0.50
    preco = distancia*valor_p_km
print(f'O preço total da viagem, com o custo de R${valor_p_km} por km, o preço total da viagem é R$201{preco}')