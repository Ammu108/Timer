#include <stdio.h>

// Function to calculate the power of a number recursively
double power(double base, int exponent) {
    // Base case: if the exponent is 0, return 1
    if (exponent == 0) {
        return 1;
    }

    // Recursive case: calculate power using recursion
    return base * power(base, exponent - 1);
}

int main() {
    double base;
    int exponent;

    // Input from the user
    printf("Enter the base: ");
    scanf("%lf", &base);
    printf("Enter the exponent: ");
    scanf("%d", &exponent);

    // Call the recursive function to calculate power
    double result = power(base, exponent);

    // Display the result
    printf("%.2lf ^ %d = %.2lf\n", base, exponent, result);

    return 0;
}

