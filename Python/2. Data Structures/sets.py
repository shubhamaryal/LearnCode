# a = {} # Dictionary
# a = {1, 2, 3, 4, 5}  

# a = {1, 1, 2, 3, 4, 4, 4}
# print(a) # Prints without duplicates

# print(hash(10))
# print(hash(10.5))
# print(hash("shubham"))

# a = {1, 2, 3, 4, 5}
# for i in a:
#     print(i)

# n = {1, 8, 3, 4, 5, 2}
# print(n)
    
# b = {"shubham", 1, 5, "kec", "aryal"}
# print(b)

# a = {1, 2, 3, 4}
# a.add(5)
# print(a)
# a.remove(2)
# print(a)
# a.pop()
# print(a)
# a.clear()
# print(a)

# a = {1, 2, 3, 4, 5}
# b = {4, 5, 6, 7, 8}

# s = (a | b)  
# print(s)
# s = (a & b)
# print(s)

a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}
b -= a
print(b)