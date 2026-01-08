# Imperative approach
# a = 5
# b = 3
# print(a + b)


# Funcational Approach
# def addition(a, b):
#     return a + b

# print(addition(5, 6))
# print(addition(15, 16))


# OOPs

# Class
# class Animal:
#     group = "Dog"
    
#     def sound():
#         print("Bark!")
        
# print(Animal().group)
# Animal().sound() # Error

# class Animal:
#     group = "Dog"
    
#     def sound(self):
#         print("Bark!")
        
# print(Animal().group)
# Animal().sound()


# Objects
# class Fruit:
#     name = "apple"
    
# f = Fruit() # object

# print(f.name)


# Constructor
# class Factory:
#     def __init__(self, material, zips, pockets):
#         # print(self) # Prints the location
#         self.material = material
#         self.zips = zips
#         self.pockets = pockets
        
#     def what(self):
#         print(f"Hello, the {self.material} is ready")
    
# Nike = Factory("Leather", 3, 2)
# Nike.what() # Hello, the Leather is ready

# Puma = Factory("Cotton", 10, 5)
# Puma.what() # Hello, the Cotton is ready
# print(Puma.material) # Cotton


# class Animal:
#     name = "lion" # class attribute 
    
#     @classmethod # it is must for class method
#     def hello(cls): # class method
#         print("HI")
        
#     @staticmethod
#     def bye():
#         print("BYE")
    
#     def __init__(self, age):
#         self.age = age # instance attribute 
        
#     def show(self): # instance method
#         print("How are you")