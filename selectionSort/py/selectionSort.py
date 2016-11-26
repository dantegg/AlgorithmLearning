
def selectionSort(numbers):
    for j in range(0,len(numbers)):
        for i in range(0,len(numbers)):
            if numbers[j]<numbers[i]:
                numbers[j],numbers[i] = numbers[i],numbers[j]
            print(numbers)



def main():
    numbers = [21,2,3,53]
    selectionSort(numbers)


if __name__ == '__main__':
    main()