value = input("Digite algo: ")

print("O valor digitado é do tipo {}".format(type(value)))
print("É um número? {}".format(value.isnumeric()))
print("É todo em maiúsculo? {}".format(value.isupper()))
print("É todo em minúsculo? {}".format(value.islower()))

