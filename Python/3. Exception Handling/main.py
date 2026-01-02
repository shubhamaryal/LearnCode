# a = int(input("Enter any number: "))

# try:
#     print(10 / a)
# # except:
# #     print("We can't divide by zero")
# # except ZeroDivisionError:
# #     print("We can't divide by zero")
# except Exception as err:
#     print(f"There is a error as: {err}")
# else: 
#     print("There is no error")
# finally: 
#     print("This will always execute")
    
# print("The division is done")

age = int(input("Give me your age: "))

# if age < 10 or age > 18:
#     raise ValueError("The age must be between 10 and 18")
# else:
#     print("You are eligible")
try:
    if age < 10 or age > 18:
        raise ValueError("The age must be between 10 and 18")
    else:
        print("You are eligible")
        
except Exception as e:
    print(f"There is an error: {e}")
    
print("Welcome")