
string = 'olá, Mundo!' 

print(f'A primeira letra é {string[0]}')
print(f'A última letra é {string[len(string) - 1]}')
print(f'Há um y na string?', 'y'in string)
print(string.replace('Olá', 'Oi'))
print(f'string em maíusculo: {string.upper()}')
print(f'string em minúsculo: {string.lower()}')
print(f'Primeira letra maiúscula {string.capitalize()}')