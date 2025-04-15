# Найти все трех значные числа средняя цифра которых равна сумме первой и второй цифр 
# for num in range(100, 1000):
#     first = num // 100      
#     middle = (num // 10) % 10  
#     last = num % 10       
#     if middle == first + last:
#         print(num)

# Даны два целых числа A и B (A < B).Найди сумму квадратов всех целых чисел от A до B включительно
# A = int(input("Введите число A: "))
# B = int(input("Введите число B: "))
# sum_of_squares = 0
# for num in range(A, B + 1):
#     sum_of_squares += num ** 2
# print(f"Сумма квадратов чисел от {A} до {B} = {sum_of_squares}") 

# №6 
# def find_gcd(n, m):
#     d = min(n, m)
#     while n % d != 0 or m % d != 0:
#         d -= 1
#     return d
# def main():
#     print("Введите два положительных целых числа:")
#     n = int(input("Первое число: "))
#     m = int(input("Второе число: "))
#     if n <= 0 or m <= 0:
#         print("Ошибка: числа должны быть положительными!")
#         return
#     gcd = find_gcd(n, m)
#     print(f"Наибольший общий делитель чисел {n} и {m} равен {gcd}")   
# if __name__ == "__main__":
#     main()

# №7
# Описать рекурсивную функцию RootK(Х, К, N) вещественного типа, находящую приближенное значение корня К-В степени из числа Х по формуле:
# Y_{0} = 1 YN YN (YN-Х/(У) УК, где Үн обозначает RootK(Х, К, N) при фиксированных Х и К. функции: x > 0 )= вещественное число, К. (> 1) и N(0) целые. 
# С помощью функция RootK найти числа Х приближенные значения его кория К-й степени при шести данных значениях N

def RootK(X, K, N):
    if N == 0:
        return 1.0
    
    Y_prev = RootK(X, K, N - 1)
    return Y_prev - (Y_prev - X/(Y_prev**(K-1)))/K
X = 20
K = 2
print(f"Приближенные значения корня {K}-й степени из {X}:")
for N in range(6):
    result = RootK(X, K, N)
    print(f"N = {N}: {result}")
import math
exact = math.pow(X, 1/K)
print(f" Значение: {exact}")