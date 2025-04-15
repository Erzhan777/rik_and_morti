def find_gcd(n, m):
    # Initialize d as the smaller of n and m
    d = min(n, m)
    
    # While either n or m is not divisible by d without remainder
    while n % d != 0 or m % d != 0:
        d -= 1
    
    return d

def main():
    # Get input from user
    print("Введите два положительных целых числа:")
    n = int(input("Первое число: "))
    m = int(input("Второе число: "))
    
    # Validate input
    if n <= 0 or m <= 0:
        print("Ошибка: числа должны быть положительными!")
        return
    
    # Find and display GCD
    gcd = find_gcd(n, m)
    print(f"Наибольший общий делитель чисел {n} и {m} равен {gcd}")

if __name__ == "__main__":
    main() 