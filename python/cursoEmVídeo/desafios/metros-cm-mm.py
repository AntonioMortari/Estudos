metros = float(input("Digite uma medida em metros: "))

cm = metros*100
mm = metros*1000

print("{} metros são {:.2f} centímetros e {:.2f} milímetros".format(metros,cm,mm))