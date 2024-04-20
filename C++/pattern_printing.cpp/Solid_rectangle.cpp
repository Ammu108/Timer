#include<iostream>
using namespace std;

// Sloid star Rectangle

// int main(){
//     int n,m;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>m;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n ; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// Slid Star Square

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n ; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// Integer Square

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n ; j++){
//             // cout<<j<<" ";
//             cout<<i<<" ";
//         }
//         cout<<endl;
//     }
// }

// Alphabet Square 

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n ; j++){
//             // cout<<(char)(j+64)<<" ";
//             cout<<(char)(j+96)<<" ";
//         }
//         cout<<endl;
//     }
// }

// Star Triangle

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= i ; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// Star Reverse Traingle

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n-i+1 ; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
// }

// Integer Triangle

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= i ; j++){
//             cout<<j<<" ";
//         }
//         cout<<endl;
//     }
// }

// Integer Reverse Triangle

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= n-i+1 ; j++){
//             cout<<j<<" ";
//         }
//         cout<<endl;
//     }
// }

// Alphabet and Integer Traingle 

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= i ; j++){
//             if(i%2==0){
//                 cout<<(char)(j+64)<<" ";
//             }
//             else{
//                 cout<<j<<" ";
//             }
//         }
//         cout<<endl;
//     }
// }

//  Binary Triangle

// int main(){
//     int n;

//     cout<<"Enter NUmber of Rows : ";
//     cin>>n;

//     for(int i = 1 ; i <= n ; i++){
//         for(int j = 1 ; j <= i ; j++){

//             if((i+j)%2==0){
//                 cout<<"1 ";
//             }
//             else{
//                 cout<<"0 ";
//             }
//         }
//         cout<<endl;
//     }
// }

// Star Plus

int main(){
    int n;

    cout<<"Enter NUmber of Rows : ";
    cin>>n;

    int mid = n/2+1;

    for(int i = 1 ; i <= n ; i++){
        for(int j = 1 ; j <= n ; j++){

            if(i==mid || j==mid){
                cout<<"* ";
            }
            else{
                cout<<"  ";
            }
        }
        cout<<endl;
    }
}