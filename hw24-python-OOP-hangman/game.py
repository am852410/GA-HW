from word import words
import random

welcome_message = "Welcome to HANG-MAN"

print(welcome_message)

player_name = input('What is your name? ')
print('The user said: ', player_name)

player_answer = input(player_name + ', Would you like to play Hangman [Y/N]? ')
def game_start():
    # random.shuffle(words)
    for i in range(len(words)):
        print('Please guess the next word. Good Luck!')
        game_guess = input(words[i]["empty"] + ' (type next word): ')
        if game_guess in words[i]["full"]:
            # game_guess = c
            index_of_values = words[i]["full"].index(game_guess)
            # index_of_values = 0
            array_of_string = list(words[i]["empty"])
            # array_of_string = ["_"," ","_"," ","_"]
            array_of_string[index_of_values] = game_guess
            # ["c"," ","_"," ","_"][0] = "_"
            words[i]["empty"] = "".join(array_of_string)
            print(words[i]["empty"])

# get the index
# change the value at the index in empty string if the user chooses
# correct letter

if player_answer == 'Y':
    print('Welcome ' + player_name + "! Let's begin")
    game_start()
else:
    print('Thank you for stopping by')
