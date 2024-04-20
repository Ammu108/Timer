#include<stdio.h>

int main(){
    int n;
    printf("enter the month number : ");
    scanf("%d",&n);

    switch (n)
    {
        case 1 :
        printf("january \n");
        break;

        case 2 :
        printf("february \n");
        break;

        case 3 :
        printf("march \n");
        break;

        case 4 :
        printf("April \n");
        break;

        case 5 :
        printf("May \n");
        break;

        case 6 :
        printf("june \n");
        break;

        case 7 :
        printf("july \n");
        break;

        case 8 :
        printf("august \n");
        break;

        case 9 :
        printf("september \n");
        break;

        case 10 :
        printf("October \n");
        break;

        case 11 :
        printf("November \n");
        break;

        case 12 :
        printf("December \n");
        break;

        default:
        printf("invalid number\nplease try again \n ");
        break;
    }
   
}