// // WAP to display a single one D array elemnts and sum and in reverse order

// #include<stdio.h>

// int main(){
//     int a[5], i, sum=0;

//     printf("Enter the element : \n");
//     for(i=0; i<5; i++){
//         scanf("%d", &a[i]);
//     }

//     printf("\n Array elements are : \n");

//     for(i=0; i<5; i++){
//         printf("\n %d", a[i]);
//     }
// // Array elements in reverse order 
//     printf("\n Array elements in reverse order : ");

//     for(i=5; i>=0; i--){
//         printf("\n %d", a[i]);
//     }

//  // Find the sum of the all elements 
//     printf("\n Sum of all elements : ");

//     for(i=0; i<5; i++){
//         sum = sum + a[i];
//     }
//     printf("\n %d", sum);
// }
//     // Access elements in array

//     printf("\n %d",a[2]);
//     printf("\n %d",a[4]);
//     printf("\n %d",a[1]);
// }




// Two dimensional Array 


// #include<stdio.h>

// int main(){
//     int a[10][10], transpose[10][10],r,c,i,j;

//     printf("Enter the rows and columns : ");
//     scanf("%d%d", &r,&c);

//     printf("Enter matrix elements : \n");
//     for(i=0; i<r; ++i)
//     for(j=0; j<c; ++j){
//         printf("Enter element a%d%d : ", i+1, j+1);
//         scanf("%d",&a[i][j]);
//     }

//     printf("Entered matrix : \n");
//     for(i=0; i<r; ++i)
//     for(j=0; j<c; ++j){
//         printf("%d",a[i][j]);
//         if(j==c-1)
//         printf("\n");
//     }

//     for(i=0; i<r; ++i)
//     for(j=0; j<c; ++j){
//         transpose[j][i] = a[i][j];
//     }

//     printf("\n Transpose of the matrix : \n ");

//     for(i=0; i<c; ++i)
//     for(j=0; j<r; ++j){
//         printf("%d",transpose[i][j]);
//         if(j==r-1)
//         printf("\n");
//     }
// }

// #include <stdio.h>

// // Function declaration
// void swap(int *a, int *b);

// int main() {
//     int num1, num2;

//     // Input numbers
//     printf("Enter first number: ");
//     scanf("%d", &num1);
//     printf("Enter second number: ");
//     scanf("%d", &num2);

//     // Before swapping
//     printf("Before swapping:\n");
//     printf("First number: %d\n", num1);
//     printf("Second number: %d\n", num2);

//     // Call swap function
//     swap(&num1, &num2);

//     // After swapping
//     printf("\nAfter swapping:\n");
//     printf("First number: %d\n", num1);
//     printf("Second number: %d\n", num2);

//     return 0;
// }

// // Function definition to swap two numbers
// void swap(int *a, int *b) {
//     int temp;

//     temp = *a;
//     *a = *b;
//     *b = temp;
// }


// #include<stdio.h>

// int main(){
//     char name[30];
//     printf("enter name : ");

//     gets(name);
//     printf("Name : ");

//     puts(name);

//     return 0;
// }


// #include <stdio.h>

// int stringLength(char*);

// int main()
// {
//  char str[100]={0};
//  int length;

//  printf("Enter any string: ");
//  scanf("%s",str);
 
//  length=stringLength(str);
 
//  printf("String length is : %d\n",length);

//  return 0;
// }

// int stringLength(char* txt)
// {
//  int i=0,count=0;
 
//  while(txt[i++]!='\0'){
//  count+=1;
//  }
 
//  return count;
// }

#include<stdio.h>
#include<string.h>

struct person{
    char name[50];
    int age;
    char gender;
    /* data */
};
int main(){
    struct person people[5];

    strcpy(people[0].name, "john");
    people[0].age = 30;
    people[0].gender = 'M';

    strcpy(people[1].name, "Aman");
    people[1].age = 25;
    people[1].gender = 'M';

    strcpy(people[2].name, "Tannu");
    people[2].age = 55;
    people[2].gender = 'F';

    strcpy(people[3].name, "Alina");
    people[3].age = 22;
    people[3].gender = 'F';

    strcpy(people[4].name, "Amit");
    people[4].age = 15;
    people[4].gender = 'M';

    printf("List of persons : \n");
    for(int i=0; i<5; i++){
        printf("person %d\n", i+1);
        printf("Name : %d\n",people[i].age);
        printf("Gender : %c\n",people[i].gender);
        printf("\n");
    }
}




// #include <stdio.h>
// #include <string.h>

// // Define the struct person
// struct person {
//     char name[50];
//     int age;
//     char gender;
// };

// int main() {
//     // Declare an array of five persons
//     struct person people[5];

//     // Example: Initializing data for each person
//     strcpy(people[0].name, "John");
//     people[0].age = 30;
//     people[0].gender = 'M';

//     strcpy(people[1].name, "Alice");
//     people[1].age = 25;
//     people[1].gender = 'F';

//     strcpy(people[2].name, "Bob");
//     people[2].age = 35;
//     people[2].gender = 'M';

//     strcpy(people[3].name, "Emily");
//     people[3].age = 28;
//     people[3].gender = 'F';

//     strcpy(people[4].name, "Michael");
//     people[4].age = 40;
//     people[4].gender = 'M';

//     // Example: Printing data for each person
//     printf("List of people:\n");
//     for (int i = 0; i < 5; i++) {
//         printf("Person %d\n", i+1);
//         printf("Name: %s\n", people[i].name);
//         printf("Age: %d\n", people[i].age);
//         printf("Gender: %c\n", people[i].gender);
//         printf("\n");
//     }

//     return 0;
// }
