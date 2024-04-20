#include<iostream>
using namespace std;

// void printnumb(int n ){
//     if( n == 0 )
//     return ;

//     cout<<n;
//     cout<<endl;
//     printnumb(n-1);
// }

// int main(){
//     int n = 5;
//     printnumb(n);
// }

// Print the factorial of given n number 

// void printmulti(int i , int n , int multi ){
//     if( i == n ){
//         multi *= i;
//         cout<<multi;
//         return ;
//     }

//     multi *= i;
//     printmulti( i + 1 , n , multi );
// }

// int main(){
//     printmulti( 1 , 5 , 1 );
// }

// Another way of solving 

// int calcfactorial(int n ){
//     if( n == 1 || n == 0 ){
//         return 1;
//     }

//     int fact_nm1 = calcfactorial(n-1);
//     int fact_n = n * fact_nm1;
//     return fact_n;
// }

// int main(){
//     int n = 5;
//     int ans = calcfactorial(n);
//     cout<<ans;
// }

// print x^n ( stack Height = n )

int calpower(int x , int n ){
    if( n == 0 ){
        return 1;
    }

    if( x == 0 ){
        return 1;
    }

    int xpownm1 = calpower(x , n-1);
    int xpow = x * xpownm1;
    return xpow;
}

int main(){
    int x = 2;
    int n = 5;

    int ans = calpower(x,n);
    cout<<(ans);
}