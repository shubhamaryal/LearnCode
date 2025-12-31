# a = [12, 13, 14, 15, 16] # List
# a = [12, 13, 14, 15, 16, 12, 12, 12] # Duplicates
# a = [12, 13, 14, 15, 16, True, 'shubham', print()] # Heterogeneous 

# Traversing in lists
# a =[12, 13, 14, 15, 16, 34.5]

# 1
# for i in range(len(a)):
#     print(a[i])
    
# 2
# for i in a:
#     print(i)

number = [5, 2, 9, 1, 5, 6]

number.append(25) 
print(number)
number.insert(2, 45)
print(number)
number.extend([78, 89, 90])
print(number)
number.remove(5)
print(number)