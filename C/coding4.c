// write a program in c to find the square of any number using the function
#include <stdio.h>

int square(int num);

int main(){
    int num,result; 

    printf("Enter the number : ");
    scanf("%d",&num);

    result = square(num);

    printf("the square of number %d is : %d\n",num,result);

}

int square(int num){
   return  num * num;

}