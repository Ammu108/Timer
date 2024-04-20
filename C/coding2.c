// write a program to find the average of the three number
#include <stdio.h>
int main(){
    int a , b , c ;

    printf("Enter the value of : ");
    scanf("%d",&a);
    printf("Enter the value of : ");
    scanf("%d",&b);
    printf("Enter the value of : ");
    scanf("%d",&c);

    float avg = (a+b+c)/3;
    printf("The average of these values is : %f",avg);

    return 0;

}