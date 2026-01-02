from pathlib import Path # this allows us to read paths
import os

FOLDER = Path('4. File Handling/Mini-Project')

def readFileAndFolder():
    items = list(FOLDER.rglob('*'))
    for i, items in enumerate(items): # if we want to have values and index of list differently
        print(f"{i+1}: {items.name}")        

def createFile():
    try:  
        readFileAndFolder()
        name = input("Please enter your file name: ")
        p = FOLDER / name 
        if not p.exists():
            with open(p, 'w') as fs: # using with we don't need to worry about closing the file
                data = input("What you want to write in the file: ")
                fs.write(data)
                
            print(f"File created successfully")
            
        else: 
            print("File already exists")
        
    except Exception as err:
        print(f"Error occurred: {err}")
        

def readFile():
    try:
        readFileAndFolder()
        name = input("Please enter your file name to read: ")
        p = FOLDER / name  
        if p.exists() and p.is_file():
            with open(p ,'r') as fs:
                data = fs.read()
                print(data)
                
            print("File read successfully")
        else:
            print("File does not exist")
            
    except Exception as err:
        print(f"Error occurred: {err}")
        
        

def updateFile():
    try: 
        readFileAndFolder()
        name = input("Enter the name of the file to update: ")
        p = FOLDER / name  
        if p.exists() and p.is_file():
            print("Press 1 for changing the name of the file")
            print("Press 2 for deleting the content of the file and adding new content")
            print("Press 3 for adding new content to the existing content")
            
            res = int(input("Enter your choice: "))
            
            if res == 1:
                newName = input("Enter the new name of new file: ")
                p2 = FOLDER / newName  
                p.rename(p2)
                
            if res == 2:
                with open(p, 'w') as fs:
                    data = input("Enter the new content of the file, this will delete the existing data: ")
                    fs.write(data)
                    
            if res == 3:
                with open(p, 'a') as fs:
                    data = input("Enter the content to add to the existing data: ")
                    fs.write(" " + data)
                    
    except Exception as err:
        print(f"Error occurred: {err}")


def deleteFile():
    try:
        readFileAndFolder()
        name = input("Enter the name of the file to delete: ")
        p = FOLDER / name  
        
        if p.exists() and p.is_file():
            os.remove(p)
            print("File deleted successfully")
        else:
            print("File does not exist")
            
    except Exception as err:
        print(f"Error occurred: {err}")



print("Press 1 for creating a file")
print("Press 2 for reading a file")
print("Press 3 for updating a file")
print("Press 4 for deleting a file")

check = int(input("Enter your choice: "))

if check == 1:
    createFile()
    
if check == 2:
    readFile()
    
if check == 3:
    updateFile()
    
if check == 4:
    deleteFile()