# Trust Me
# By Aspen
# A weird game/thought experiment.

import time

def level1():
    waiting = True
    while waiting:
        ans = input("It wants you to say hello. ").lower()
        if ans == "hello":
            print("Good.")
            time.sleep(0.8)
            print("Just do what it asks.")
            time.sleep(1)
            print("Trust me.")
            waiting = False
        elif ans == "hi":
            print("Did it ask you to say hi?")
            time.sleep(0.8)
        else:
            time.sleep(0.8)
        level2()

def level2():
     input("Press Enter to continue. ")
     waiting = True
     while waiting:
         print("RED \t GREEN \t BLUE")
         ans = input("It says you should choose red." ).lower()
         if ans == "red":
             # print()
             waiting = False
        elif ans == "green":
            

def main():
    level1()
main()
