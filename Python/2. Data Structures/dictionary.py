# d = {}
# d = {1: 'hello'}
# print(type(d))  

# d = {1: 'hello', 2: 'world', 3: 'python'}
# print(d[2])  

# d = {'name': 'Shubham', 'age': 20, 'city': 'Butwal'}
# print(d)
# d.update({'college': 'Kantipur'})
# print(d)

# d = {'name': 'Shubham', 'age': 20, 'city': 'Butwal'}
# print(d)
# d['college'] = 'Kantipur'
# print(d)
# del d['city']
# print(d)

# d = {
#     10: 100,
#     20: 200,
#     30: 300,
#     40: 400
# }
# for i in d:
#     print(i)
#     print(d[i])
# for i in d.values():
#     print(i)

# help(dict)


# deep copy and shallow copy (we will take example of list)
# a = [1, 2, 3, 4, 5]
# b = a
# b[0] = 100
# print(a) 

# a = [1, 2, 3, 4, 5]
# b = a.copy()
# b[0] = 100
# print(a) 

# example with dictionary
# d1 = {
#     10: 100,
#     20: 200,
#     30: 300,
#     40: 400
# }
# # d2 = d1.copy()
# d2 = d1

# d2[10] = 999
# print(d1)
# print(d2)