from capitals import states
import random

# print(states)

welcome_message = "Welcome to the United States Capitals Game"

print(welcome_message)

player_name = input('What is your name? ')
print('The user said: ', player_name)

player_answer = input("Let's learn our State Capitals! Would you like to play [Y/N]? ")


def game_start():
    random.shuffle(states)
    for i in range(50):
        game_answer = input("What is the capital of " + states[i]["name"] + "? ")
        if game_answer == states[i]["capital"]:
            states[i]["correct"] = states[i].get("correct", 0) + 1
            print('That is correct! You have ' + str(states[i].get("correct", 1)) + " out of " + str((states[i].get("correct", 0)) + (states[i].get("wrong", 0))) + " tries correct.")
        else:
            states[i]["wrong"] = states[i].get("wrong", 0) + 1
            print('Incorrect, try again! You have ' + str(states[i].get("correct", 0)) + " out of " + str((states[i].get("correct", 0)) + (states[i].get("wrong", 0))) + " tries correct.")

    play_again_message = input("Would you like to play again [Y/N]? ")

    if play_again_message == "Y":
        game_start()
    else:
        print('Thank you for stopping by')
# print(states)
if player_answer == 'Y':
    print('Welcome ' + player_name + "! Let's begin")
    game_start()
else:
    print('Thank you for stopping by')
