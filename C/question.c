#include<stdio.h>

int main(){
    int s ;

    printf("Enter the score : ");
    scanf("%d",&s);

    if(s>=90 && s<=100){
        printf("Grade is A ");
    }
    else if(s>=60 && s<=90){
        printf("Grade is B ");
    }
    else if(s>=45 && s<=60){
        printf("Grade is C");
    }
    else{
        printf("Fail");
    }
}