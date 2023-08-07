altura = float(input("Qual a altura da parede?(em metros) : "))
largura = float(input("Qual a largura da parede?(em metros) : "))

area = altura*largura

tinta = area/2

print("Seria necessários {:.2f} litros de tinta para pintar uma parede com área de {:.2f}".format(tinta,area))
