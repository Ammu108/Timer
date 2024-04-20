#include<iostream>
using namespace std;

// int main(){
//     int y = 4;
//     int x = 11;
//     y = ++x;

//     printf("%d\n",y);
//     printf("%d\n",x);
// }

// int main(){
//     int y = 4;
//     int x = 11;
//     y = x++;

//     printf("%d\n",y);
//     printf("%d\n",x);
// }

// int main(){
//     int y = 4;
//     int x = 11;
//     y = --x;

//     printf("%d\n",y);
//     printf("%d\n",x);
// }


// int main(){
//     int y = 4;
//     int x = 11;
//     y = x--;

//     printf("%d\n",y);
//     printf("%d\n",x);
// }


// write a program to print the sum of the given digits 

int main(){
    int n;
    cout<<"Enter a number : ";
    cin>>n;

    int sum = 0;
    while (n!=0)
    {
        int ld = n%10;
        n /=10;
        sum +=ld;
    }
    cout<<sum;
    
}
