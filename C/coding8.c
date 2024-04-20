// write a c program to  swap two numbers without using third variable
#include<stdio.h>
int main(){
    int num1 , num2;

    printf("Enter first number :");
    scanf("%d",&num1);
    printf("Enter second number : ");
    scanf("%d",&num2);

    // swapping without using a third variable

    num1 = num1 + num2 ;
    num2 = num1 - num2 ;
    num1 = num1 - num2 ;

    printf("After swaping the values : \n");
    printf("num1 = %d\n", num1);
    printf("num2 : %d\n",num2);

    return 0;
}

