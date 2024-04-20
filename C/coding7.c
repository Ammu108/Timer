// write a c program to swap two numbers using third variable 
#include<stdio.h>
int main(){
    int num1 , num2 , temp;

    printf("Enter first number :");
    scanf("%d",&num1);

    printf("Enter second number :");
    scanf("%d",&num2);

    // swapping using third varaible

    temp = num1;
    num1 = num2;
    num2 = temp;

    printf("After swaping the valus : \n");
    printf("num1 = %d\n",num1);
    printf("num2 = %d\n",num2);

    return 0;

}